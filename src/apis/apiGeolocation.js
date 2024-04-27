// const API_KEY = "75658239e7f04f8380c804e99982007d";

// export default async function getLocation({ ip }) {
//   // const res = await fetch(
//   //   `https://api.ipbase.com/v2/info?apikey=ipb_live_qOf5bPvHFwXva8YLr205C7RGcr6YCL3kQ5RH0aeH&ip=${ip}`
//   // );
//   const res = await fetch(
//     `https://api.ipgeolocation.io/ipgeo?apiKey=${API_KEY}&ip=${ip}`
//     // `https://api.ipgeolocation.io/ipgeo?ip=${ip}`
//   );
//   const data = await res.json();
//   return data;
// }

export default async function getLocation({ ip }) {
  const res = await fetch(`http://ip-api.com/json/${ip}`);
  const data = await res.json();
  return data;
}
