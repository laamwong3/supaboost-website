import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight, Shield, TrendingUp, Users } from "lucide-react";
import Link from "next/link";

export function AboutSection() {
  const features = [
    {
      title: "Expert Analysis",
      description:
        "Our team of superannuation specialists provide expert insights and analysis.",
      icon: <TrendingUp className="h-10 w-10 text-primary" />,
    },
    {
      title: "Fund Comparison",
      description:
        "Compare superannuation funds side by side with our powerful tools.",
      icon: <Users className="h-10 w-10 text-primary" />,
    },
    {
      title: "Security & Trust",
      description:
        "Your data is secure, and our advice is independent and transparent.",
      icon: <Shield className="h-10 w-10 text-primary" />,
    },
  ];

  return (
    <div>
      <div className="max-w-3xl">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
          About SuperBoost
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
            className="border-2 transition-all hover:border-primary/50"
          >
            <CardHeader>
              <div className="mb-2">{feature.icon}</div>
              <CardTitle>{feature.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                {feature.description}
              </CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-10 flex justify-center md:justify-start">
        <Button variant="outline" asChild>
          <Link href="/about" className="group">
            Learn More About Us
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
      </div>
    </div>
  );
}
