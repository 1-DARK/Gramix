async function ProfilePage({ ...params }: { params: { username: string } }) {
  console.log(params);

  await new Promise((resolve) => setTimeout(resolve, 3000));
  return <h1>hello</h1>;
}

export default ProfilePage;
