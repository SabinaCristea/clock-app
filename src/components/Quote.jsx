import getRandomQuote from "../apis/apiQuotes";
import { useQuery } from "react-query";

function Quote() {
  const {
    data: quote,
    isLoading,
    isError,
  } = useQuery("randomQuote", getRandomQuote);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error fetching quote data</p>;
  }
  const { content, author } = quote[0];
  return (
    <div>
      <div>
        <p className="bg-[green] text-[1.8rem]">{content}</p>
        <p>{author}</p>
      </div>
    </div>
  );
}

export default Quote;
