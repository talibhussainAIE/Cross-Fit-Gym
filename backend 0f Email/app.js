// import express from "express";
// import { config } from "dotenv";
// import cors from "cors";
// import { sendEmail } from "./utils/sendEmail.js";

// const app = express();
// const router = express.Router();

// config({ path: "./config.env" });

// app.use(
//   cors({
//     origin: [process.env.FRONTEND_URL],
//     methods: ["POST"],
//     credentials: true,
//   })
// );

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// router.post("/send/mail", async (req, res, next) => {
//   const { name, email, message } = req.body;
//   if (!name || !email || !message) {
//     return next(
//       res.status(400).json({
//         success: false,
//         message: "Please provide all details",
//       })
//     );
//   }
//   try {
//     await sendEmail({
//       email: "talibshbyt@gmail.com",
//       subject: "GYM WEBSITE CONTACT",
//       message,
//       userEmail: email,
//     });
//     res.status(200).json({
//       success: true,
//       message: "Message Sent Successfully.",
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: " Internal Server Error",
//     });
//   }
// });

// app.use(router);

// const PORT = process.env.PORT || 4001;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


import express from "express";
import { config } from "dotenv";
import cors from "cors";
import { sendEmail } from "./utils/sendEmail.js";

const app = express();
const router = express.Router();

config({ path: "./config.env" });

app.use(
  cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["POST"],
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

router.post("/send/mail", async (req, res, next) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return next(
      res.status(400).json({
        success: false,
        message: "Please provide all details",
      })
    );
  }
  try {
    // List of emails to send the message to
    const recipients = [
      "faizanzeeshan444@gmail.com",
      "talibshbyt@gmail.com" // Include your default email
    ];

    await sendEmail({
      email: recipients, // Pass the array of emails
      subject: "GYM WEBSITE CONTACT",
      message,
      userEmail: email,
    });

    res.status(200).json({
      success: true,
      message: "Message Sent Successfully to multiple recipients.",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
});

app.use(router);

const PORT = process.env.PORT || 4001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

