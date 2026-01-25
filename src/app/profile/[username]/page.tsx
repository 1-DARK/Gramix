import type { Metadata } from "next";
import { getProfileByUsername } from "@/actions/profile.action";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ username: string }>;
}): Promise<Metadata> {
  const { username } = await params; // ✅ REQUIRED

  const user = await getProfileByUsername(username);

  if (!user) {
    return {
      title: "User not found",
    };
  }

  return {
    title: `${user.name} (@${user.username})`,
    description: user.bio ?? "",
  };
}

async function ProfilePage({ ...params }: { params: { username: string } }) {
  console.log(params);
  return <h1>hello</h1>;
}

export default ProfilePage;
