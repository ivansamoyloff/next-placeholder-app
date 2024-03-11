import Link from 'next/link';

const UsersProfile = async ({ params }) => {

  const users = await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/users/${params.id}`);
  const data = await users.json();
  console.log(data);

  return (
    <>
      <h2>Name: {data.name}</h2>
      <h4>Email: <Link href={`mailto:${data.email}`}>{data.email}</Link></h4>
      <h4>Phone: <Link href={`tel:${data.phone}`}>{data.phone}</Link></h4>
      <h4>Website: <Link href={`https://${data.website}`} target='_blank'>{data.website}</Link></h4>
    </>
  );
}

export default UsersProfile;
