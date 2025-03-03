import { RetirementCalculator } from "@/components/calculator/retirement-calculator";
import { Container } from "@/components/layout/container";

export default function CalculatorPage() {
  return (
    <main>
      <div className="bg-muted py-16 md:py-24">
        <Container>
          <div className="max-w-3xl">
            <h1 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
              Retirement Calculator
            </h1>
            <p className="mt-6 text-xl text-muted-foreground">
              Plan your retirement with our interactive calculator to estimate
              your future superannuation balance and income.
            </p>
          </div>
        </Container>
      </div>

      <Container className="py-16 md:py-24">
        <RetirementCalculator />

        <div className="mx-auto mt-16 max-w-3xl text-center">
          <h2 className="text-2xl font-bold">Need personalized advice?</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Our financial advisors can help you create a tailored retirement
            strategy based on your unique situation and goals.
          </p>
          <div className="mt-8 flex justify-center">
            <a
              href="/contact"
              className="inline-flex h-12 items-center justify-center gap-2 whitespace-nowrap rounded-md bg-primary px-8 text-base font-medium text-primary-foreground shadow transition-all hover:bg-primary/90 hover:shadow-md active:translate-y-0.5"
            >
              Book a Consultation
            </a>
          </div>
        </div>
      </Container>
    </main>
  );
}
