"use client";

import { clientEnv } from "@/env/client";
import { ThemeProvider } from "next-themes";
import posthog from 'posthog-js';
import { PostHogProvider } from 'posthog-js/react';
import { ReactNode } from "react";

export function Providers({ children }: { children: ReactNode }) {
  if (typeof window !== 'undefined' && process.env.NODE_ENV === 'production') {
    posthog.init(clientEnv.NEXT_PUBLIC_POSTHOG_KEY!, {
      api_host: clientEnv.NEXT_PUBLIC_POSTHOG_HOST,
      person_profiles: 'always',
    });
  }

  return (
    <PostHogProvider client={posthog}>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        {children}
      </ThemeProvider>
    </PostHogProvider>
  )
}