"use client";
import { useState } from "react";
import { Button } from "./ui/button";
import { Loader2Icon } from "lucide-react";
import toast from "react-hot-toast";

function FollowButton({ userId }: { userId: string }) {
  const [isLoading, setIsLoading] = useState(false);

  const handleFollow = async () => {
    setIsLoading(true);
    try {
      await toggleFollow(userId);
      toast.success("User Followed successfully");
    } catch (error) {
      console.log("Error Following user", error);
      toast.error("Error in Following user");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <Button
      size={"sm"}
      variant={"secondary"}
      onClick={handleFollow}
      disabled={isLoading}
      className="w-20"
    >
      {isLoading ? <Loader2Icon className="w-4 h-4 animate-spin" /> : "Follow"}
    </Button>
  );
}

export default FollowButton;
