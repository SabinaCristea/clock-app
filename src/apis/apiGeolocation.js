export default async function getLocation() {
  const res = await fetch("https://ipinfo.io/json?token=5dbef33f40c326");
  const data = await res.json();
  return data;
}
