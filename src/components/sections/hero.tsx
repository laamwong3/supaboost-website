import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Hero() {
  return (
    <div className="relative bg-background py-16 md:py-24 lg:py-32">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              <span className="block">Boost your</span>
              <span className="block text-primary">superannuation</span>
              <span className="block">with confidence</span>
            </h1>
            <p className="mt-6 max-w-lg text-xl text-muted-foreground">
              Expert guidance and powerful tools to help you maximize your
              retirement savings and secure your financial future.
            </p>
            <div className="mt-8 flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <Button size="lg" asChild>
                <Link href="/comparison">Compare Funds</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/advice">Get Expert Advice</Link>
              </Button>
            </div>
          </div>
          <div className="relative flex items-center justify-center lg:justify-end">
            <div className="relative h-64 w-full overflow-hidden rounded-lg sm:h-80 lg:h-96">
              <div className="absolute inset-0 flex items-center justify-center bg-muted">
                <div className="h-full w-full bg-gradient-to-br from-primary/20 to-chart-2/20">
                  <div className="flex h-full items-center justify-center">
                    <div className="relative h-40 w-40">
                      <svg viewBox="0 0 100 100" className="h-full w-full">
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
                      <div className="absolute inset-0 flex items-center justify-center text-2xl font-bold">
                        +65%
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
