import { NextResponse } from "next/server";

export const dynamic = "force-dynamic"

export async function GET ( _ , { params }) {

    const id = params.id;

    const res = await fetch(`http://localhost:8000/products/${id}`)

    const product = await res.json();

    if(!res.ok) {
        return NextResponse.json({
            error: "Cannot find the product."
        },{
            status: 404
        })
    }

    return NextResponse.json(product,{
        status: 200
    });
}
