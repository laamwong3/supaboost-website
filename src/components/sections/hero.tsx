import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Hero() {
  return (
    <div className="relative bg-gradient-to-br from-primary/10 to-accent/5 py-16 md:py-24 lg:py-32">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col justify-center">
            <div className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
              Australian Superannuation Specialists
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              <span className="block">Boost your</span>
              <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                superannuation
              </span>
              <span className="block">with confidence</span>
            </h1>
            <p className="mt-6 max-w-lg text-xl text-muted-foreground">
              Expert guidance and powerful tools to help you maximize your
              retirement savings and secure your financial future.
            </p>
            <div className="mt-8 flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-primary/90 transition-all hover:shadow-lg"
                asChild
              >
                <Link href="/comparison">Compare Funds</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10"
                asChild
              >
                <Link href="/advice">Get Expert Advice</Link>
              </Button>
            </div>
          </div>
          <div className="relative flex items-center justify-center lg:justify-end">
            <div className="relative h-64 w-full overflow-hidden rounded-2xl shadow-xl sm:h-80 lg:h-96">
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/5 to-accent/10">
                <div className="flex size-full items-center justify-center p-8">
                  <div className="relative mx-auto size-40">
                    <svg
                      viewBox="0 0 100 100"
                      className="size-full animate-pulse"
                    >
                      <circle
                        cx="50"
                        cy="50"
                        r="40"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="8"
                        className="text-chart-2"
                        strokeDasharray="251.2"
                        strokeDashoffset="50"
                      />
                      <circle
                        cx="50"
                        cy="50"
                        r="28"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="8"
                        className="text-chart-1"
                        strokeDasharray="175.8"
                        strokeDashoffset="30"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center text-3xl font-bold text-primary">
                      +65%
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Background decoration elements */}
      <div className="absolute bottom-0 left-0 size-32 rounded-full bg-accent/10 blur-3xl"></div>
      <div className="absolute right-10 top-20 size-24 rounded-full bg-chart-2/10 blur-3xl"></div>
      <div className="absolute left-1/3 top-0 size-40 rounded-full bg-primary/10 blur-3xl"></div>
    </div>
  );
}
