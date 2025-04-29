import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import pool from '@/lib/db'; // Adjust path based on your project structure

// --- Nodemailer Transporter Setup ---
const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_SERVER_HOST,
    port: parseInt(process.env.EMAIL_SERVER_PORT || '587', 10),
    secure: parseInt(process.env.EMAIL_SERVER_PORT || '587', 10) === 465,
    auth: {
        user: process.env.EMAIL_SERVER_USER,
        pass: process.env.EMAIL_SERVER_PASSWORD,
    },
    connectionTimeout: 10000,
    socketTimeout: 10000,
});

// Helper function to create list items for HTML email
const createHtmlList = (items: string[]): string => {
    if (!items || items.length === 0) return '<p>None specified.</p>';
    return `<ul>${items.map(item => `<li style="margin-bottom: 5px;">${item}</li>`).join('')}</ul>`;
};

export async function POST(request: NextRequest) {
    let connection;
    try {
        const formData = await request.formData();

        // --- Extract Contact Data ---
        const firstName = formData.get('first-name') as string | null;
        const lastName = formData.get('last-name') as string | null;
        const email = formData.get('email') as string | null;
        const phone = formData.get('phone') as string | null;
        const company = formData.get('company') as string | null;
        const jobTitle = formData.get('job-title') as string | null;
        const privacyPolicy = formData.get('privacy-policy') as string | null; // 'on' or null

        // --- Extract Project Data ---
        const interestType = formData.get('interest-type') as string | null; // 'hardware', 'solutions', 'both'
        const industry = formData.get('industry') as string | null;
        const projectTimeline = formData.get('project-timeline') as string | null;
        const projectDescription = formData.get('project-description') as string | null;
        const budget = formData.get('budget') as string | null; // Optional

        // Extract Checkbox Data
        const interestedProducts: string[] = [];
        if (formData.get('product-modbus-gateways') === 'on') interestedProducts.push('Modbus Gateways');
        if (formData.get('product-remote-io') === 'on') interestedProducts.push('Remote IO Controllers');
        if (formData.get('product-4g-5g') === 'on') interestedProducts.push('4G/5G Solutions');
        if (formData.get('product-wifi') === 'on') interestedProducts.push('WiFi Solutions');
        if (formData.get('product-optical-fiber') === 'on') interestedProducts.push('Optical Fiber');
        if (formData.get('product-lora-zigbee') === 'on') interestedProducts.push('LoRa/ZigBee Devices');

        const interestedSolutions: string[] = [];
        if (formData.get('solution-ems') === 'on') interestedSolutions.push('Energy Management System');
        if (formData.get('solution-water-management') === 'on') interestedSolutions.push('Water Management');
        if (formData.get('solution-digital-checksheet') === 'on') interestedSolutions.push('Digital Checksheet');
        if (formData.get('solution-production-monitoring') === 'on') interestedSolutions.push('Production Monitoring');

        // --- Server-Side Validation ---
        const requiredFields = [firstName, lastName, email, phone, company, jobTitle, interestType, industry, projectTimeline, projectDescription];
        if (requiredFields.some(field => !field) || privacyPolicy !== 'on') {
            return NextResponse.json({ message: 'Missing required fields or privacy policy not accepted.' }, { status: 400 });
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email!)) {
            return NextResponse.json({ message: 'Invalid email format.' }, { status: 400 });
        }

        // --- Prepare Data for Database ---
        // Convert arrays to strings for varchar(30) fields, truncate if necessary
        const questionProducts = interestedProducts.join(', ').substring(0, 30);
        const questionSolutions = interestedSolutions.join(', ').substring(0, 30);
        // Truncate description to fit varchar(300)
        const truncatedDescription = projectDescription!.substring(0, 300);

        // --- Save to Database ---
        const query = `
            INSERT INTO quoteform (
                first_name, last_name, email, phone, company, job_title,
                question_interest, question_products, question_solutions,
                industry, project_timeline, description, estimated_budget
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `;
        const values = [
            firstName!.substring(0, 50),
            lastName!.substring(0, 50),
            email!.substring(0, 50),
            phone!.substring(0, 15),
            company!.substring(0, 30),
            jobTitle!.substring(0, 50),
            interestType!.substring(0, 30),
            questionProducts,
            questionSolutions,
            industry!.substring(0, 30),
            projectTimeline!.substring(0, 30),
            truncatedDescription,
            budget ? budget.substring(0, 30) : null,
        ];

        try {
            await pool.query(query, values);
            console.log(`Quote request saved to database for ${email}`);
        } catch (dbError) {
            console.error('Database error:', dbError);
            return NextResponse.json({ message: 'Failed to save quote request to database.' }, { status: 500 });
        }

        // --- Prepare Email ---
        const recipientEmail = process.env.QUOTE_REQUEST_EMAIL_TO || process.env.EMAIL_TO;
        if (!recipientEmail) {
            console.error('Recipient email address (QUOTE_REQUEST_EMAIL_TO or EMAIL_TO) is not configured.');
            return NextResponse.json({ message: 'Server configuration error.' }, { status: 500 });
        }

        const fullName = `${firstName} ${lastName}`;

        const mailOptions = {
            from: `"${fullName}" <${process.env.EMAIL_SERVER_USER}>`,
            replyTo: email!,
            to: recipientEmail,
            subject: `Quote Request from ${company} (${fullName}) - ${interestType}`,

            text: `
New Quote Request:

** Contact Information **
Name: ${fullName}
Company: ${company}
Job Title: ${jobTitle}
Email: ${email}
Phone: ${phone}

** Project Information **
Interested In: ${interestType}
Industry: ${industry}
Project Timeline: ${projectTimeline}
Estimated Budget: ${budget || 'Not specified'}

Interested Products:
${interestedProducts.length > 0 ? interestedProducts.map(p => `- ${p}`).join('\n') : 'None specified.'}

Interested Solutions:
${interestedSolutions.length > 0 ? interestedSolutions.map(s => `- ${s}`).join('\n') : 'None specified.'}

Project Description:
${projectDescription}

Privacy Policy Accepted: Yes
            `,

            html: `
                <div style="font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; font-size: 16px; line-height: 1.6; color: #333; max-width: 650px; margin: 20px auto; border: 1px solid #e0e0e0; border-radius: 5px; overflow: hidden;">
                    <div style="background-color: #f7f7f7; padding: 15px 20px; border-bottom: 1px solid #e0e0e0;">
                        <h2 style="margin: 0; color: #333; font-size: 20px;">New Quote Request Received</h2>
                    </div>
                    <div style="padding: 20px;">
                        <h3 style="margin-top: 0; border-bottom: 1px solid #eee; padding-bottom: 5px;">Contact Information</h3 iht>
                        <p><strong>Name:</strong> ${fullName}</p>
                        <p><strong>Company:</strong> ${company}</p>
                        <p><strong>Job Title:</strong> ${jobTitle}</p>
                        <p><strong>Email:</strong> <a href="mailto:${email}" style="color: #007bff; text-decoration: none;">${email}</a></p>
                        <p><strong>Phone:</strong> ${phone}</p>

                        <h3 style="margin-top: 25px; border-bottom: 1px solid #eee; padding-bottom: 5px;">Project Information</h3>
                        <p><strong>Interested In:</strong> ${interestType}</p>
                        <p><strong>Industry:</strong> ${industry}</p>
                        <p><strong>Project Timeline:</strong> ${projectTimeline}</p>
                        <p><strong>Estimated Budget:</strong> ${budget || 'Not specified'}</p>

                        <h4 style="margin-top: 20px; margin-bottom: 10px;">Interested Products:</h4>
                        ${createHtmlList(interestedProducts)}

                        <h4 style="margin-top: 20px; margin-bottom: 10px;">Interested Solutions:</h4>
                        ${createHtmlList(interestedSolutions)}

                        <h4 style="margin-top: 20px; margin-bottom: 10px;">Project Description:</h4>
                        <p style="background-color: #fdfdfd; border: 1px solid #eee; padding: 15px; border-radius: 4px; white-space: pre-wrap;">${projectDescription!.replace(/\n/g, '<br>')}</p>

                        <hr style="border: none; border-top: 1px solid #e0e0e0; margin: 25px 0;">
                        <p style="font-size: 14px;">Privacy Policy Accepted: Yes</p>
                    </div>
                    <div style="background-color: #f7f7f7; padding: 10px 20px; border-top: 1px solid #e0e0e0; text-align: center;">
                        <p style="font-size: 12px; color: #888; margin: 0;">Received via website quote request form.</p>
                    </div>
                </div>
            `,
        };

        // --- Send Mail ---
        try {
            await transporter.sendMail(mailOptions);
            console.log(`Quote request email sent successfully for ${email}`);
            return NextResponse.json({ message: 'Quote request submitted successfully!' }, { status: 200 });
        } catch (sendError) {
            console.error('Nodemailer failed to send quote request email:', sendError);
            return NextResponse.json({ message: 'Failed to send quote request email.' }, { status: 500 });
        }

    } catch (error) {
        console.error('API Route Error (/api/quote-request):', error);
        if (error instanceof Error && error.message.includes('Could not parse content as FormData')) {
            return NextResponse.json({ message: 'Invalid request format.' }, { status: 400 });
        }
        return NextResponse.json({ message: 'Internal Server Error.' }, { status: 500 });
    }
}