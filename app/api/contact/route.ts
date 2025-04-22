// src/app/api/contact/route.js (App Router example)

import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';


export async function POST(request:NextRequest) {
  try {
    const { name, email, phone, subject, message } = await request.json();

    // Basic validation on the server
    if (!name || !email || !subject || !message) {
      return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
    }

    // Configure Nodemailer transport
    // Note: Using Gmail might require "less secure app access" or an App Password.
    // Consider dedicated email services (SendGrid, Mailgun, AWS SES) for production.
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_SERVER_HOST,
      port: parseInt(process.env.EMAIL_SERVER_PORT || '465', 10), // Ensure port is a number
      secure: true, // Use true for 465, false for other ports like 587
      auth: {
        user: process.env.EMAIL_SERVER_USER,
        pass: process.env.EMAIL_SERVER_PASSWORD,
      },
    });

    // Verify transporter connection (optional, but good for debugging)
    try {
        await transporter.verify();
        console.log("Nodemailer transport verified successfully.");
    } catch (verifyError) {
        console.error("Nodemailer transport verification failed:", verifyError);
        return NextResponse.json({ message: 'Email server configuration error.' }, { status: 500 });
    }
    

    
    // Email options
    const mailOptions = {
      from: `"${name}" <${process.env.EMAIL_SERVER_USER}>`, // Sender address (shows name, uses your server email)
      replyTo: email, // Set the reply-to field to the user's email
      to: process.env.EMAIL_TO, // List of receivers from environment variable
      subject: `Contact Form: ${subject}`, // Subject line
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone || 'Not provided'}\n\nMessage:\n${message}`, // Plain text body
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
      `, // HTML body
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Message sent successfully!' }, { status: 200 });

  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json({ message: 'Failed to send message.' }, { status: 500 });
  }
}

