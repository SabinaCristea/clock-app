export default async function getRandomQuote() {
  const res = await fetch("https://api.quotable.io/quotes/random");
  const data = await res.json();
  return data;
}
