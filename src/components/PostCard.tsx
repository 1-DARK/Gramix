"use client";
import { getPosts, toggleLike } from "@/actions/post.action";
import { useUser } from "@clerk/nextjs";
import { useState } from "react";

type Posts = Awaited<ReturnType<typeof getPosts>>;
type Post = Posts[number];

function PostCard({ post, dbUserId }: { post: Post; dbUserId: string | null }) {
  const { user } = useUser();
  const [newComment, setNewComment] = useState("");
  const [isCommenting, setIsCommenting] = useState(false);
  const [isLiking, setIsLiking] = useState(false);
  const [hasLiked, setHasLiked] = useState(
    post.likes.some((like) => like.userId === dbUserId),
  ); // if any like was made by the current logged-in user
  const [optimisticLikes, setOptimisticsLikes] = useState(post._count.likes);

  const handleLike = async () => {
    if (isLiking) return;
    try {
      setIsLiking(true);
      setHasLiked((prev) => !prev);
      setOptimisticsLikes((prev) => prev + (hasLiked ? -1 : 1));
      await toggleLike(post.id);
    } catch (error) {
      setOptimisticsLikes(post._count.likes);
      setHasLiked(post.likes.some((like) => like.userId === dbUserId));
    } finally {
      setIsLiking(false);
    }
  };

  const handleAddComment = async () => {};

  const handleDeletePost = async () => {};

  return <div>Post</div>;
}

export default PostCard;
