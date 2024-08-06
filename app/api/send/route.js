// pages/api/send.js
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { email, subject, message } = req.body;

      const data = await resend.emails.send({
        from: fromEmail,
        to: [fromEmail, email],
        subject: subject,
        react: (
          <>
            <h1>{subject}</h1>
            <p>Thanks for reaching out to me!</p>
            <p>New message submitted:</p>
            <p>{message}</p>
          </>
        ),
      });

      return res.status(200).json(data);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: error.message });
    }
  } else {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }
}

export default handler;
