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
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
        ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
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

