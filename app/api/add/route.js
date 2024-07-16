import { NextResponse } from "next/server";
import Add from "@/model/add";


export async function PUT(request){
    try{
       const {userName, passWord} = await request.json()

       console.log(userName, passWord);
       const res = await Add(userName, passWord);
       return NextResponse.json({salutation : res}, {status: 200})
    }
    catch(error){
        console.log(error)
        return NextResponse.json({erruer : "Erreur lors de la tentative"}, {status: 500})
    }
}