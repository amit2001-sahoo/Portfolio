import nodemailer from "nodemailer"

export default async function handler(req, res) {
    if (req.method != "POST") {
        return res.status(405).json({message:"method not allowed"})
    }
    const {name, email, message} = req.body

    if(!name){
        return res.status(400).json({message:"missing field 'name'"})
    }

    if(!email){
        return res.status(400).json({message:"missing field 'email'"})
    }

    if(!message){
        return res.status(400).json({message:"missing field 'message'"})
    }

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