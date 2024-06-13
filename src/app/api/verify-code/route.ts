import dbConnect from "@/lib/dbConnect";
import UserModel from "@/model/User";

export async function POST(request: Request) {
  await dbConnect();

  try {
    
    const {otp , username} = await request.json();

    const decodedUsername = decodeURIComponent(username);


    //
    if(otp)



    return Response.json({
        status : true,
    })


  } catch (error) {
    return Response.json({
      message: `user not verified ${error}`,
      status: true,
    });
  }
}
