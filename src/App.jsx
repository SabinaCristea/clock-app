import { QueryClient, QueryClientProvider } from "react-query";
import Quote from "./components/Quote";

function App() {
  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Quote />
      </QueryClientProvider>
    </>
  );
}

export default App;
