"use client";

import { getProfileByUsername, getUserPosts } from "@/actions/profile.action";

type User = Awaited<ReturnType<typeof getProfileByUsername>>;
type Posts = Awaited<ReturnType<typeof getUserPosts>>;

interface ProfilePageClientProps {
  user: NonNullable<User>;
  posts: Posts;
  likedPosts: Posts;
  isFollowing: boolean;
}
function ProfilePageClient({}: ProfilePageClientProps) {
  return <div></div>;
}

export default ProfilePageClient;
