export default async function getLocation() {
  const res = await fetch("");
  const data = await res.json();
  return data;
}
