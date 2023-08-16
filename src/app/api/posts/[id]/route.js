import { NextResponse } from "next/server";

import Post from "@/models/Post";
import connectDB from "@/utilities/db";

export const GET = async (request, { params }) => {
  const { id } = params;

  try {
    await connectDB();

    const post = await Post.findById(id);

    return new NextResponse(JSON.stringify(post), { status: 200 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};
