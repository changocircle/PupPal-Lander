/**
 * SSR entry point for static pre-rendering.
 *
 * Used by scripts/prerender.ts to render each route to a static HTML string
 * at build time. The output is injected into index.html, so Vercel serves
 * full HTML content to Google and AI crawlers on the first HTTP response.
 *
 * React then hydrates on the client and takes over all interactivity.
 *
 * `convex/react` is aliased to src/convex-ssr-mock.tsx in the Vite SSR config
 * so that useQuery / useMutation stubs work without a live WebSocket.
 */

import { renderToString } from "react-dom/server";
import { StrictMode } from "react";
import AppSSR from "./AppSSR";

export function render(path: string): string {
  return renderToString(
    <StrictMode>
      <AppSSR path={path} />
    </StrictMode>,
  );
}
