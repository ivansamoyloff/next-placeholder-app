const UsersProfile = async ({ params }) => {

  const users = await fetch(`${process.env.API_BASE}/users/${params.id}`);
  const data = await users.json();

  return (
      <h3>{data.name}</h3>
  );
}

export default UsersProfile;
