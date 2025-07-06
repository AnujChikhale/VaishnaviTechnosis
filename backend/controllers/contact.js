import Contact from '../models/contact.js';
import nodemailer from 'nodemailer';

export const submitForm = async (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message)
    return res.status(400).json({ error: 'All fields are required' });

  try {
    const contact = await Contact.create({ name, email, message });

    // Setup email transporter
    const transporter = nodemailer.createTransport({
      service: process.env.EMAIL_SERVICE,
      auth: { 
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    // Send notification
    await transporter.sendMail({
      from: `"VaishnaviTechnosis" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: 'New Contact Form Submission',
      text: `
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `
    });

    res.status(201).json({ message: 'Form submitted successfully' });
  } catch (err) {
    console.error('Error:', err);
    res.status(500).json({ error: 'Server error' });
  }
};
