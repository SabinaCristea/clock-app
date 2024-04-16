export default async function getLocation({ ip }) {
  const res = await fetch(
    `https://api.ipbase.com/v2/info?apikey=ipb_live_qOf5bPvHFwXva8YLr205C7RGcr6YCL3kQ5RH0aeH&ip=${ip}`
  );
  const data = await res.json();
  return data;
}
