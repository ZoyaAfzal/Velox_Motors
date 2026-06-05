import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
} from "@tanstack/react-router";
import { useEffect } from "react";

import { reportLovableError } from "../lib/lovable-error-reporting";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-velox-black px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display italic text-8xl text-velox-gold">404</h1>
        <h2 className="mt-4 font-display text-2xl">Off the map</h2>
        <p className="mt-3 text-sm text-velox-muted">
          The road you're looking for doesn't exist.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex items-center justify-center bg-velox-gold text-velox-black px-6 py-3 font-mono-ui text-[11px]"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-velox-black px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-3xl">Something stalled</h1>
        <p className="mt-3 text-sm text-velox-muted">Try again or head home.</p>
        <div className="mt-6 flex justify-center gap-3">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="bg-velox-gold text-velox-black px-5 py-3 font-mono-ui text-[11px]"
          >
            Try again
          </button>
          <a
            href="/"
            className="border border-white/20 px-5 py-3 font-mono-ui text-[11px] text-velox-platinum"
          >
            Home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <Navbar />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <Footer />
    </QueryClientProvider>
  );
}
