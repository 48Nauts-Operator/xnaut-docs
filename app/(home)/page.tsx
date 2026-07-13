import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center text-center flex-1 gap-4 px-6">
      <h1 className="text-3xl font-bold">xNAUT Documentation</h1>
      <p className="text-fd-muted-foreground max-w-md">
        The terminal built for the agent era — 20 MB native, local-first AI,
        free forever.
      </p>
      <div className="flex gap-3 mt-2">
        <Link
          href="/docs"
          className="rounded-lg bg-fd-primary px-5 py-2.5 font-medium text-fd-primary-foreground"
        >
          Read the docs
        </Link>
        <a
          href="https://xnaut.dev"
          className="rounded-lg border px-5 py-2.5 font-medium"
        >
          xnaut.dev
        </a>
      </div>
    </div>
  );
}
