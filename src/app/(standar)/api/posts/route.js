// In this file, we can define any type of request as follows:
// export async function GET(Request) {}
// export async function HEAD(Request) {}
// export async function POST(Request) {}
// export async function PUT(Request) {}
// export async function DELETE(Request) {}
//  A simple GET Example

import { NextResponse } from "next/server";

export async function GET(Request) {
  const res = await fetch(
    "http://localhost:3000/json/posts.json"
  );
  const data = await res.json();
  return NextResponse.json(data);
}