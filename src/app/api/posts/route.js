import { NextResponse } from "next/server";

import Post from "@/models/Post";
import connectDB from "@/utilities/db";

export const GET = async (request) => {
  try {
    await connectDB();

    const posts = await Post.find({});

    return new NextResponse(JSON.stringify(posts), { status: 200 });
  } catch (error) {
    return new NextResponse(error, { status: 500 });
  }
};
