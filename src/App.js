import {Outlet} from 'react-router-dom'
import SearchHeader from "./components/SearchHeader";
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import './App.css';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000*60*10,
      refetchOnWindowFocus: false
    }
  }
});

function App() {
  return (
    <>
      <SearchHeader />
      <QueryClientProvider client={queryClient}>
        <Outlet />
      </QueryClientProvider>
    </>
  );
}

export default App;
