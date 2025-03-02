import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Shield, TrendingUp, Users } from "lucide-react";
import Link from "next/link";

export function AboutSection() {
  const features = [
    {
      title: "Expert Analysis",
      description:
        "Our team of superannuation specialists provide expert insights and analysis.",
      icon: <TrendingUp className="h-12 w-12 text-chart-1" />,
      bgColor: "bg-chart-1/10", // Changed from gradient to simple bg color
    },
    {
      title: "Fund Comparison",
      description:
        "Compare superannuation funds side by side with our powerful tools.",
      icon: <Users className="h-12 w-12 text-primary" />,
      bgColor: "bg-primary/10",
    },
    {
      title: "Security & Trust",
      description:
        "Your data is secure, and our advice is independent and transparent.",
      icon: <Shield className="h-12 w-12 text-chart-2" />,
      bgColor: "bg-chart-2/10",
    },
  ];

  return (
    <div>
      <div className="max-w-3xl">
        <div className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
          About Us
        </div>
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
          About <span className="text-primary">SuperBoost</span>
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          SuperBoost helps Australians navigate the complex world of
          superannuation with confidence. We provide the tools, insights, and
          expertise you need to make informed decisions about your retirement
          savings.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
        {features.map((feature, index) => (
          <Card
            key={index}
            className={`overflow-hidden border-0 ${feature.bgColor} shadow-md transition-all hover:-translate-y-1 hover:shadow-lg`}
          >
            <CardHeader>
              <div className="mb-4 inline-flex rounded-xl bg-white/80 p-3 backdrop-blur-sm">
                {feature.icon}
              </div>
              <CardTitle className="text-xl">{feature.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-base text-muted-foreground">
                {feature.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-10 flex justify-center md:justify-start">
        <Button variant="gradient" size="lg" asChild>
          <Link href="/about" className="group">
            Learn More About Us
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
      </div>
    </div>
  );
}
