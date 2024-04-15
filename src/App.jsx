import { QueryClient, QueryClientProvider } from "react-query";
import AppLayout from "./components/AppLayout";

function App() {
  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <AppLayout />
      </QueryClientProvider>
    </>
  );
}

export default App;
