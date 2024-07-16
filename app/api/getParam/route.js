import { NextResponse } from "next/server";

export async function GET(request){
    try{
        const params = request.nextUrl.searchParams;
        const courriel = params.get('courriel');
        const nom = params.get('nom');
        console.log(courriel, nom)
        return NextResponse.json({status: 200})
    }
    catch(error){
        console.log(error)
        return NextResponse.json({erruer : "Erreur lors de la tentative"}, {status: 500})
    }
}