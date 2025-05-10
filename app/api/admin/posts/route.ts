// app/api/admin/posts/route.ts
import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
// Adjust the path to your authOptions location
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
// Import your original function to get posts data
import { getAllPosts } from '@/lib/blog-service';

export async function GET(request: Request) {
  // Check session on the server
  const session = await getServerSession(authOptions);

  // Protect this API route - only allow authenticated admins
  // You can add more specific role checks if needed: (session.user as any)?.role === 'admin'
  if (!session) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }

  try {
    // Fetch posts using your existing function
    const posts = await getAllPosts();
    // Return the posts data
    return NextResponse.json(posts);
  } catch (error) {
    console.error('API Error fetching posts:', error);
    // Return a generic server error
    return NextResponse.json({ message: 'Internal Server Error fetching posts' }, { status: 500 });
  }
}