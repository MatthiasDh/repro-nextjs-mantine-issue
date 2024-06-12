"use client";

import React, { PropsWithChildren } from "react";
import { MantineProvider, ColorSchemeScript } from "@mantine/core";
import { Notifications } from "@mantine/notifications";

import "@mantine/notifications/styles.css";
import "@mantine/core/styles.css";

import { theme } from "../theme";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body style={{ backgroundColor: "#17191E", height: "100vh" }}>
        <MantineProvider theme={theme} defaultColorScheme="dark">
          <QueryClientProvider client={queryClient}>
            <Notifications />
            {children}
          </QueryClientProvider>
        </MantineProvider>
      </body>
    </html>
  );
}
