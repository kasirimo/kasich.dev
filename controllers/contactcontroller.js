import transporter from "../config/nodemailer.js";
import resend from "../config/resend.js";

const contact = async (req,res) => {
    const { name, email, subject, message } = req.body;

    try {
        const { error } = await resend.emails.send({
            from: "onboarding@resend.dev",
            to: "kasich.dev@gmail.com",
            replyTo: email,
            subject: `Contact Message from Kasich.dev`,
            html: `
            <div style="background-color: #f5f5f5;position: relative;padding:10px;">
            <div style="width: 75%;margin-left:auto;margin-right:auto;background-color:white;border-radius: 20px;border-radius: 10px 10px 0 0;">

            <div style="background-color: red;text-align:center; color: white;padding: 20px;">
            <span style="color: #e50914;background-color: white;border-radius:50%;padding: 10px;">✉</span>
            <h2>New Contact From Message</h2>
            <p>You have received a new message from your website.</p>
            </div>

            <div style="padding: 10px 20px;background-color: #fff;">

            <div style="display:flex;justify-content:center;align-items:center;padding:10px;border-bottom:1px solid #eeeeee;">
            <div>
            <h6 style="color: #e50914;">NAME</h6>
            <p>${name}</p>
            </div>
            </div>

            <div style="display:flex;justify-content:center;align-items:center;padding:10px;border-bottom:1px solid #eeeeee;">        
            <div>
            <h6 style="color: #e50914;">Email</h6>
            <p>${email}</p>
            </div>
            </div>

            <div style="display:flex;justify-content:center;align-items:center;padding:10px;border-bottom:1px solid #eeeeee;">            
            <div>
            <h6 style="color: #e50914;">Subject</h6>
            <p>${subject}</p>
            </div>
            </div>

            <div style="display:flex;justify-content:center;align-items:center;padding:10px;">            
            <div>
            <h6 style="color: #e50914;">Message</h6>
            <p>${message}</p>
            </div>
            </div>

            </div>

            <div style="background-color:#1a1a1e;text-align:center;padding: 10px;">
            <div style="width:30px;height:2px;background-color:#e50914;margin-left:auto; margin-right: auto;"></div>
            <h4 style="color: white;">Thank you</h4>
            <h2 style="color: #e50914;"><span style="color:white;">Kasich</span>.dev</h2>
            </div>
            
            </div>
            </div>
            `
        });

        
        if (error) {
            console.log(error.message);

            return res.status(500).json({message: "Failed to send"});
        }
        
        res.json({message: "Message sent successfully",status: true});
    } catch(err) {
        console.log(err.message);

        res.status(500).json({message: "Message Not Sent", status: false});
    }    
}

export default contact;