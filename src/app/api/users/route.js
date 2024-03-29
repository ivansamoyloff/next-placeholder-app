export async function GET(){
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/users`,{
    headers:{
      'Content-Type': 'application/json',
    }
  })
  const data = await res.json();

  return Response.json({ data });
}