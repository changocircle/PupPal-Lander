/**
 * SSR mock for convex/react.
 *
 * During static pre-rendering (Node.js / renderToString), this file is
 * aliased in place of `convex/react` via the Vite SSR config. It provides
 * stub implementations of the hooks used by landing page components so that:
 *
 *   - `useQuery`  → returns `undefined` (the "loading" state, already handled
 *                   by components with `?? 0` or similar fallbacks)
 *   - `useMutation` → returns a no-op async function
 *   - `ConvexProvider` → renders children as-is (no-op wrapper)
 *
 * This lets `renderToString` complete without a real Convex WebSocket.
 */

import type { ReactNode } from "react";

export function ConvexProvider({ children }: { children: ReactNode }) {
  return <>{children}</>;
}

// biome-ignore lint/suspicious/noExplicitAny: SSR mock accepts any Convex query descriptor
export function useQuery(_query: any, ..._args: any[]): undefined {
  return undefined;
}

// biome-ignore lint/suspicious/noExplicitAny: SSR mock accepts any Convex mutation descriptor
export function useMutation(_mutation: any) {
  return async (..._args: any[]) => undefined;
}

// biome-ignore lint/suspicious/noExplicitAny: SSR mock accepts any Convex action descriptor
export function useAction(_action: any) {
  return async (..._args: any[]) => undefined;
}

export function ConvexReactClient() {
  return {};
}
