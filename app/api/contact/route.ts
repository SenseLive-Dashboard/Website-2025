import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import pool from '@/lib/db'; // Adjust the import path to your db utility
import { PoolConnection, ResultSetHeader } from 'mysql2/promise'; // Import types

// It's generally better practice to define the transporter *outside* the POST handler
// so it's potentially reused if the server environment keeps the instance warm,
// but defining it inside as you have is also functional.
// We'll keep it inside for now to match your structure.

export async function POST(request: NextRequest) {
    let dbConnection: PoolConnection | undefined; // For releasing in finally block

    try {
        // 1. Parse Request Body
        const { name, email, phone, subject, message } = await request.json();

        // 2. Basic Server-Side Validation
        if (!name || !email || !subject || !message) {
          return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
        }
        // Optional: Add email format validation here if desired
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
           return NextResponse.json({ message: 'Invalid email format.' }, { status: 400 });
        }

        // --- *** 3. Save Data to Database using mysql2 Pool *** ---
        let insertId: number | string | null = null;
        try {
            // Get connection from pool
            dbConnection = await pool.getConnection();
            console.log('DB connection acquired for contact POST.');

            // SQL INSERT statement with placeholders
            const sql = `
                INSERT INTO contactform (name, email, phone, subject, message)
                VALUES (?, ?, ?, ?, ?)
            `;
            const values = [name, email, phone || null, subject, message];

            // Execute the query
            const [result] = await dbConnection.execute<ResultSetHeader>(sql, values);
            insertId = result.insertId; // Store the ID of the inserted row
            console.log(`Contact submission saved to MySQL DB. Insert ID: ${insertId}`);

        } catch (dbError) {
            console.error('MySQL Database Error saving contact form:', dbError);
            // Important: Return error response if database save fails
            return NextResponse.json({ message: 'Database error: Failed to save submission.' }, { status: 500 });
        } finally {
            // **Crucial**: Always release connection back to the pool
            if (dbConnection) {
                dbConnection.release();
                console.log('DB connection released for contact POST.');
            }
        }
        // --- *** End Database Save *** ---


        // --- 4. Configure and Send Email (Your Existing Logic) ---
        const transporter = nodemailer.createTransport({
          host: process.env.EMAIL_SERVER_HOST,
          port: parseInt(process.env.EMAIL_SERVER_PORT || '587', 10), // Adjust default if needed
          // Secure should typically be false for port 587 (STARTTLS) and true for 465 (SSL/TLS)
          secure: parseInt(process.env.EMAIL_SERVER_PORT || '587', 10) === 465,
          auth: {
            user: process.env.EMAIL_SERVER_USER,
            pass: process.env.EMAIL_SERVER_PASSWORD,
          },
        });

        // Verify transporter connection (optional but good practice)
        try {
            await transporter.verify();
            console.log("Nodemailer transport verified successfully.");
        } catch (verifyError) {
            console.error("Nodemailer transport verification failed:", verifyError);
            // Data was saved to DB, but email system has config issues.
            // Decide how critical email is. Maybe still return success but log error.
            // For now, return a specific error indicating email config problem.
            return NextResponse.json({ message: 'Submission saved, but email server configuration error.' }, { status: 500 });
        }

        // Email options
        const mailOptions = {
          from: `"${name}" <${process.env.EMAIL_SERVER_USER}>`,
          replyTo: email,
          to: process.env.EMAIL_TO, // Ensure EMAIL_TO is set in environment variables
          subject: `Contact Form: ${subject}`,
          text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone || 'Not provided'}\n\nMessage:\n${message}\n\nDB ID: ${insertId}`, // Added DB ID
          html: `
              <div style="font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; font-size: 16px; line-height: 1.6; color: #333; max-width: 600px; margin: 20px auto; border: 1px solid #e0e0e0; border-radius: 5px; overflow: hidden;">
                    <div style="background-color: #f7f7f7; padding: 15px 20px; border-bottom: 1px solid #e0e0e0;">
                        <h2 style="margin: 0; color: #333; font-size: 20px;">New Contact Form Submission</h2>
                    </div>
                    <div style="padding: 20px;">
                        <p><strong>Name:</strong> ${name}</p>
                        <p><strong>Email:</strong> <a href="mailto:${email}" style="color: #007bff; text-decoration: none;">${email}</a></p>
                        ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
                        <p><strong>Subject:</strong> ${subject}</p>
                        <hr style="border: none; border-top: 1px solid #e0e0e0; margin: 20px 0;">
                        <p><strong>Message:</strong></p>
                        <p style="background-color: #fdfdfd; border: 1px solid #eee; padding: 15px; border-radius: 4px; white-space: pre-wrap;">${message.replace(/\n/g, '<br>')}</p>
                    </div>
                    <div style="background-color: #f7f7f7; padding: 10px 20px; border-top: 1px solid #e0e0e0; text-align: center;">
                        <p style="font-size: 12px; color: #888; margin: 0;">Received via website contact form.</p>
                    </div>
                </div>
          `,
        };

        // Send the email (Add specific try/catch if needed)
        try {
             await transporter.sendMail(mailOptions);
             console.log(`Contact form email notification sent successfully for ${email}`);
        } catch(emailError) {
             console.error('Nodemailer failed to send email (data WAS saved):', emailError);
             // Decide if this should return an error to the user.
             // Often, logging is sufficient if the main goal (saving data) succeeded.
             // We'll let the success response proceed for now.
        }
        // --- *** End Email Sending *** ---


        // 5. Return Success Response to Frontend
        // Reached only if DB save was successful and email verify/send didn't throw blocking error
        return NextResponse.json({ message: 'Message received and processed successfully!' }, { status: 200 });

    } catch (error: any) {
        // Catch top-level errors (like JSON parsing, unexpected issues)
        if (error instanceof SyntaxError) {
             console.error('API Route Error (/api/contact): Invalid JSON received.', error);
             return NextResponse.json({ message: 'Invalid request format.' }, { status: 400 });
        }
        console.error('API Top-Level Error:', error);
        // Generic error if something else went wrong
        return NextResponse.json({ message: 'Failed to process request.' }, { status: 500 });
    }
}