"use client";
import fetcher from "@/app/services/fetcher";
import { ReactNode } from "react";
import { SWRConfig } from "swr";

export default function Providers({ children }: { children: ReactNode }) {
  // you can have multiple SWRConfigs in different context and the configs with be merged

  return (
    <SWRConfig
      value={{
        // refreshInterval: 3000,
        fetcher,

        // if server data is immutable, it's a good idea to do this
        // revalidateIfStale: false,
        // revalidateOnFocus: false,
        // revalidateOnReconnect: false,
      }}
    >
      {children}
    </SWRConfig>
  );
}
