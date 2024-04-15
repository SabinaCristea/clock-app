export default async function getTime() {
  const res = await fetch("http://worldtimeapi.org/api/ip");
  const data = await res.json();
  return data;
}

// export default async function getTime() {
//   const fetchData = async () => {
//     const res = await fetch("http://worldtimeapi.org/api/ip");
//     const data = await res.json();
//     return data;
//   };

//   // Fetch data initially
//   // let timeData = await fetchData();

//   // Set up interval to fetch data periodically
//   // const intervalId = setInterval(async () => {
//   //   let timeData = await fetchData();
//   // }, 60000); // Interval set to 1 minute (adjust as needed)

//   // // Return a function to clear the interval on unmount
//   // return () => clearInterval(intervalId);
// }
