//Route pour retourner bonjour
import { NextResponse } from "next/server";

export async function GET(request){
  try{
    return NextResponse.json({status: 200})
  }
  catch(error){
      console.log(error)
      return NextResponse.json({erruer : "Erreur lors de la tentative"}, {status: 500})
  }
}
