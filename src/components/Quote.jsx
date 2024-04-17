import { useEffect, useState } from "react";
import getRandomQuote from "../apis/apiQuotes";
import { useQuery } from "react-query";

function Quote() {
  const [quoteData, setQuoteData] = useState({
    content: "",
    author: "",
  });

  const {
    data: quote,
    isLoading,
    isError,
    refetch,
  } = useQuery("randomQuote", getRandomQuote);

  useEffect(() => {
    if (!isLoading && quote) {
      setQuoteData({
        content: quote[0].content,
        author: quote[0].author,
      });
    }
  }, [isLoading, quote]);

  const handleRefreshQuote = async () => {
    await refetch();
    setQuoteData({
      content: quote[0].content,
      author: quote[0].author,
    });
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error fetching quote data</p>;
  }

  return (
    <div className="flex items-start justify-between h-[20rem]">
      <div className="pr-[1.6rem]">
        <blockquote className="text-[1.2rem] leading-[2.2rem] mb-[0.8rem]">
          {`"${quoteData.content}"`}
        </blockquote>
        <p className="font-bold text-[1.2rem] leading-[2.2rem]">
          {quoteData.author}
        </p>
      </div>
      <button
        className="refresh-quote-btn shrink-0"
        onClick={handleRefreshQuote}
      >
        <img
          src="../assets/desktop/icon-refresh.svg"
          alt="SVG Image of Refresh Button"
        />
      </button>
    </div>
  );
}

export default Quote;
