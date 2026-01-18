"use client";
import { getPosts } from "@/actions/post.action";
import { Post } from "@/generated/prisma/client";
import { useUser } from "@clerk/nextjs";
import { useState } from "react";

type Posts = Awaited<ReturnType<typeof getPosts>>;

function PostCard({ post, dbUserId }: { post: Post; dbUserId: string | null }) {
  const { user } = useUser();
  const [newComment, setNewComment] = useState("");
  const [isCommenting, setIsCommenting] = useState(false);
  const [isLiking, setIsLiking] = useState(false);
  const [hasLiked, setHasLiked] = useState(false);
  const [likes, setLikes] = useState(post._count.likes);
  return <div>Post</div>;
}

export default PostCard;
