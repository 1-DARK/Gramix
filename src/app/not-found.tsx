import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-4 text-center">
      <div className="space-y-6">
        <h1 className="text-7xl font-bold tracking-tight text-primary">404</h1>

        <h2 className="text-2xl font-semibold">Page Not Found</h2>

        <p className="max-w-md text-muted-foreground">
          Sorry, the page you’re looking for doesn’t exist or has been moved.
        </p>

        <div className="flex justify-center gap-4">
          <Link href="/">
            <Button>Go to Home</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
