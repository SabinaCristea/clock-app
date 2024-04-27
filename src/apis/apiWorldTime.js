export default async function getTime() {
  const res = await fetch("https://worldtimeapi.org/api/ip");
  const data = await res.json();
  return data;
}
