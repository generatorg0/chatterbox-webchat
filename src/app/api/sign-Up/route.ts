import dbConnect from "@/lib/dbConnect";
import UserModel from "@/model/User";
import bcrypt from "bcryptjs";
import { sendVerificationEmail } from "@/helpers/sendVerificationEmail";
import { verify } from "crypto";

export async function POST(request: Request) {
  await dbConnect();
  try {
    const { username, email, password } = await request.json();

    const existingUsername = await UserModel.findOne({
      username,
    });

    if (existingUsername) {
      return Response.json({
        success: false,
        message: "Username is already taken",
      });
    }

    const existingEmailId = await UserModel.findOne({
      email,
    });

    const otpToSend = Math.floor(100000 + Math.random() * 900000).toString();

    if (existingEmailId) {
      return Response.json({
        status: false,
        message: "Email in use",
      });
    } else {
      const hashedPassword = await bcrypt.hash(password, 10);
      //expiryDate can also be done
      const sendingEmail = await sendVerificationEmail(
        email,
        username,
        otpToSend
      );

      if (!sendingEmail.success) {
        return Response.json({
          status: false,
          message: "failed to send email . Please try again",
        });
      } else {
        const newUser = new UserModel({
          username,
          email,
          password: hashedPassword,
          messages: [],
        });

        await newUser.save();

        return Response.json({ status: true, message: "user added" });
      }
    }
  } catch (error) {
    return Response.json({
      success: false,
      message: `${error}`,
    });
  }
}

// import dbConnect from "@/lib/dbConnect";
// import UserModel from "@/model/User";
// import bcrypt from "bcryptjs";
// import { sendVerificationEmail } from "@/helpers/sendVerificationEmail";

// export async function POST(request: Request) {
//   await dbConnect();

//   try {
//     console.log(request);
//     const { username, email, password } = await request.json();

//     const existingVerifiedUserByUsername = await UserModel.findOne({
//       username,
//     });

//     if (existingVerifiedUserByUsername) {
//       return Response.json(
//         {
//           success: false,
//           message: "Username is already taken",
//         },
//         { status: 400 }
//       );
//     }

//     // const existingUserByEmail = await UserModel.findOne({ email });
//     let verifyCode = Math.floor(100000 + Math.random() * 900000).toString();

//     const hashedPassword = await bcrypt.hash(password, 10);
//     const expiryDate = new Date();
//     expiryDate.setHours(expiryDate.getHours() + 1);

//     const newUser = new UserModel({
//       username,
//       email,
//       password: hashedPassword,
//       messages: [],
//     });

//     await newUser.save();

//     // Send verification email
//     const emailResponse = await sendVerificationEmail(
//       email,
//       username,
//       verifyCode
//     );
//     if (!emailResponse.success) {
//       return Response.json(
//         {
//           success: false,
//           message: emailResponse.message,
//         },
//         { status: 500 }
//       );
//     }

//     return Response.json(
//       {
//         success: true,
//         message: "User registered successfully. Please verify your account.",
//       },
//       { status: 201 }
//     );
//   } catch (error) {
//     // console.error("Error registering user:", error);
//     return Response.json(
//       {
//         success: false,
//         message: "Error registering user",
//       },
//       { status: 500 }
//     );
//   }
// }
