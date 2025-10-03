"use client";
import { useEffect, useState } from "react";
import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import { ThemeProvider } from "next-themes";
import { Toaster } from "react-hot-toast";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import {system} from "./theme";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // With SSR, we usually want to set some default staleTime
      // above 0 to avoid refetching immediately on the client
      staleTime: 60 * 1000,
    },
  },
});

export function Providers({
  children,
}: {
  readonly children: React.ReactNode;
}) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Prevent hydration mismatch by ensuring the component is mounted before rendering
  if (!isMounted) {
    return (
      <ChakraProvider value={system}>
        <ThemeProvider
          attribute="class"
          disableTransitionOnChange
          defaultTheme="light"
        >
          <div className="w-full flex items-center justify-center h-[100vh]">
            {/* <Loader size="xl" /> */}
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-r-2 border-[#703BF7]"></div>
          </div>
        </ThemeProvider>
      </ChakraProvider>
    );
  }

  return (
    <QueryClientProvider client={queryClient}>
      <div className="text-[1.4rem]">
        <ReactQueryDevtools initialIsOpen={false} />
      </div>
      <Toaster position="top-right" />
      <ChakraProvider value={system}>
        <ThemeProvider
          attribute="class"
          disableTransitionOnChange
          defaultTheme="light"
        >
          {children}
        </ThemeProvider>
      </ChakraProvider>
    </QueryClientProvider>
  );
}
