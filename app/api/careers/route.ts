// src/app/api/internship-application/route.ts

import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import pool from '@/lib/db'; // Adjust the import path to your db utility
import { PoolConnection, ResultSetHeader } from 'mysql2/promise'; // Import types


// --- Nodemailer Transporter Setup (Consider moving to a lib file) ---
// Ensure environment variables are set: EMAIL_SERVER_USER, EMAIL_SERVER_PASSWORD, etc.
const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_SERVER_HOST,
    port: parseInt(process.env.EMAIL_SERVER_PORT || '587', 10), // Default to 587 for Outlook/Office365 STARTTLS
    secure: parseInt(process.env.EMAIL_SERVER_PORT || '587', 10) === 465, // true for 465, false for other ports like 587
    auth: {
        user: process.env.EMAIL_SERVER_USER,
        pass: process.env.EMAIL_SERVER_PASSWORD, // Use App Password
    },
    // Increase timeout for potential file processing delays
    connectionTimeout: 15000, // 15 seconds
    socketTimeout: 15000, // 15 seconds
    // debug: process.env.NODE_ENV === 'development',
    // logger: process.env.NODE_ENV === 'development',
});


export async function POST(request: NextRequest) {
    let dbConnection: PoolConnection | undefined; // For releasing in finally block
    try {
        const formData = await request.formData();

        // --- Extract Data ---
        const name = formData.get('intern-name') as string | null;
        const email = formData.get('intern-email') as string | null;
        const phone = formData.get('intern-phone') as string | null;
        const education = formData.get('intern-education') as string | null;
        const area = formData.get('intern-area') as string | null;
        const startDate = formData.get('intern-start') as string | null;
        const message = formData.get('intern-message') as string | null;
        const terms = formData.get('intern-terms') as string | null; // Will be 'on' if checked
        const resumeFile = formData.get('intern-resume') as File | null;

        // --- Server-Side Validation ---
        if (!name || !email || !phone || !education || !area || !startDate || !message || terms !== 'on') {
            return NextResponse.json({ message: 'Missing required text fields or terms not accepted.' }, { status: 400 });
        }
         // Email format validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
          return NextResponse.json({ message: 'Invalid email format.' }, { status: 400 });
        }

        // File validation
        
        if (!resumeFile || resumeFile.size === 0) {
            return NextResponse.json({ message: 'Resume file is required.' }, { status: 400 });
        }

        const MAX_SIZE = 5 * 1024 * 1024; // 5MB
        if (resumeFile.size > MAX_SIZE) {
            return NextResponse.json({ message: `Resume file size exceeds ${MAX_SIZE / 1024 / 1024}MB limit.` }, { status: 400 });
        }

        const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
        if (!allowedTypes.includes(resumeFile.type)) {
            return NextResponse.json({ message: 'Invalid resume file type. Only PDF, DOC, DOCX allowed.' }, { status: 400 });
        }

        // --- Prepare Email ---
        // Convert resume File to Buffer for Nodemailer attachment
        const resumeBuffer = Buffer.from(await resumeFile.arrayBuffer());



        let insertId: number | string | null = null;
        try{
            dbConnection = await pool.getConnection();
            console.log('DB connection acquired for internship application POST.');
            const sql = `
                INSERT INTO resumeform (
                    full_name, email, phone, education_background, area_of_interest, preferred_start_date, resume_file, message
                ) VALUES (?, ?, ?, ?, ?, ?, ?, ?)
            `;
            const values = [
                name,
                email,
                phone || null,              // Store NULL if phone is not provided
                education,
                area,
                startDate || null, // Store NULL if date is not provided (ensure format compatibility)
                resumeBuffer,               // The file content as a Buffer for MEDIUMBLOB
                message

            ];

            const [result] = await dbConnection.execute<ResultSetHeader>(sql, values);
            insertId = result.insertId; // Store the ID of the inserted row
            console.log(`resume submission saved to mysql db, insert ID: ${insertId}`)

        } catch (dbError) {
            console.error('MySQL Database Error saving internship application form:', dbError);
            // Important: Return error response if database save fails
            return NextResponse.json({ message: 'Database error: Failed to save submission.' }, { status: 500 });
        } finally {
            if (dbConnection) {
                dbConnection.release();
                console.log('DB connection released for internship application POST.');
            }
        }



        // Determine recipient (use a specific env var or fallback)
        const recipientEmail = process.env.INTERNSHIP_EMAIL_TO || process.env.EMAIL_TO;
        if (!recipientEmail) {
             console.error('Recipient email address (INTERNSHIP_EMAIL_TO or EMAIL_TO) is not configured.');
             return NextResponse.json({ message: 'Server configuration error.' }, { status: 500 });
        }


        const mailOptions = {
            from: `"${name}" <${process.env.EMAIL_SERVER_USER}>`, // Use server email, display name is applicant
            replyTo: email, // Reply directly to the applicant
            to: recipientEmail, // Send to HR/Internship coordinator
            subject: `Internship Application: ${name} - ${area}`,
            text: `
New Internship Application Received:

Name: ${name}
Email: ${email}
Phone: ${phone}
Educational Background: ${education}
Area of Interest: ${area}
Preferred Start Date: ${startDate}

Message/Motivation:
${message}

Resume is attached.
            `,
            html: `
                <div style="font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; font-size: 16px; line-height: 1.6; color: #333; max-width: 600px; margin: 20px auto; border: 1px solid #e0e0e0; border-radius: 5px; overflow: hidden;">
                    <div style="background-color: #f7f7f7; padding: 15px 20px; border-bottom: 1px solid #e0e0e0;">
                        <h2 style="margin: 0; color: #333; font-size: 20px;">New Internship Application</h2>
                    </div>
                    <div style="padding: 20px;">
                        <h3 style="margin-top: 0; color: #444;">Applicant Details:</h3>
                        <p><strong>Name:</strong> ${name}</p>
                        <p><strong>Email:</strong> <a href="mailto:${email}" style="color: #007bff; text-decoration: none;">${email}</a></p>
                        <p><strong>Phone:</strong> ${phone}</p>
                        <p><strong>Educational Background:</strong> ${education}</p>
                        <p><strong>Area of Interest:</strong> ${area}</p>
                        <p><strong>Preferred Start Date:</strong> ${startDate}</p>
                        <hr style="border: none; border-top: 1px solid #e0e0e0; margin: 20px 0;">
                        <h3 style="margin-top: 0; color: #444;">Motivation/Message:</h3>
                        <p style="background-color: #fdfdfd; border: 1px solid #eee; padding: 15px; border-radius: 4px; white-space: pre-wrap;">${message.replace(/\n/g, '<br>')}</p>
                         <hr style="border: none; border-top: 1px solid #e0e0e0; margin: 20px 0;">
                         <p><strong>Resume/CV:</strong> Attached to this email (${resumeFile.name}).</p>
                    </div>
                     <div style="background-color: #f7f7f7; padding: 10px 20px; border-top: 1px solid #e0e0e0; text-align: center;">
                        <p style="font-size: 12px; color: #888; margin: 0;">Received via website internship application form.</p>
                    </div>
                </div>
            `,
            attachments: [
                {
                    filename: resumeFile.name, // Use original filename
                    content: resumeBuffer,     // Attach file content
                    contentType: resumeFile.type // Set correct MIME type
                }
            ]
        };

        // --- Send Mail ---
        try {
            await transporter.sendMail(mailOptions);
            console.log(`Internship application email sent successfully for ${email}`);
            return NextResponse.json({ message: 'Application submitted successfully!' }, { status: 200 });
        } catch (sendError) {
            console.error('Nodemailer failed to send email:', sendError);
            return NextResponse.json({ message: 'Failed to send application email.' }, { status: 500 });
        }

    } catch (error) {
        console.error('API Route Error (/api/internship-application):', error);
         // Handle potential errors during formData parsing
         if (error instanceof Error && error.message.includes('Could not parse content as FormData')) {
             return NextResponse.json({ message: 'Invalid request format.' }, { status: 400 });
         }
        return NextResponse.json({ message: 'Internal Server Error.' }, { status: 500 });
    }
}