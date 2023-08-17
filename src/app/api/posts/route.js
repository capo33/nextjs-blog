import { NextResponse } from "next/server";

import Post from "@/models/Post";
import connectDB from "@/utilities/db";

export const GET = async (request) => {
  const url = new URL(request.url);
  const username = url.searchParams.get("username"); // Get username from query params
  try {
    await connectDB();

    // If username is present, get posts by username else get all posts
    const posts = await Post.find(username && { username });

    return new NextResponse(JSON.stringify(posts), { status: 200 });
  } catch (error) {
    return new NextResponse(error, { status: 500 });
  }
};

export const POST = async (request) => {
  const body = await request.json();
  try {
    await connectDB();

    const newPost = new Post(body);

    await newPost.save();

    return new NextResponse("Post has been created", { status: 201 });
  } catch (error) {
    return new NextResponse(error, { status: 500 });
  }
};
