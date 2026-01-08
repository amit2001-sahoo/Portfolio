import nodemailer from "nodemailer"

export default async function handler(req, res) {
    console.log("inside the mailer function")
    if (req.method != "POST") {
        return res.status(405).json({message:"method not allowed"})
    }
    const {name, email, message} = req.body

    try{
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            }
        })
        await transporter.sendMail({
            from: email,
            to: process.env.EMAIL_USER,
            subject: `New Message From ${name}`,
            text: `
            
            Name: ${name}
            Email: ${email}
            
            Message:
            ${message}`
        })
        return res.status(200).json({ success: true, message:"Message Sent Successfully." })
    }
    catch (error) {
    return res.status(500).json({ message: "Failed to send message" })
  }
    
}