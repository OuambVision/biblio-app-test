import { NextResponse } from "next/server";

import Salut from "@/model/salut";

export async function GET(request){
    try{
        const sa = await Salut()
        return NextResponse.json({salutation : sa}, {status: 200})
    }
    catch(error){
        console.log(error)
        return NextResponse.json({erruer : "Erreur lors de la tentative"}, {status: 500})
    }
}