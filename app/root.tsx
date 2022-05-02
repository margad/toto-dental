import type { MetaFunction, LinksFunction } from "@remix-run/cloudflare";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import globalStylesUrl from "./styles/global.css";

import { MantineProvider, ColorSchemeProvider, ColorScheme } from '@mantine/core';
import { useHotkeys, useLocalStorage } from '@mantine/hooks';

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1",
});

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: globalStylesUrl }];
};

export default function App() {
  
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: 'mantine-color-scheme',
    defaultValue: 'light',
    getInitialValueInEffect: true,
  });

  const toggleColorScheme = (value?: ColorScheme) => {
    const colorSchemeValue = value || (colorScheme === 'dark' ? 'light' : 'dark');
    setColorScheme(colorSchemeValue);
  }

  useHotkeys([['mod+J', () => toggleColorScheme()]]);

  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
          <MantineProvider theme={{ colorScheme }}>
            <Outlet />
          </MantineProvider>
        </ColorSchemeProvider>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
