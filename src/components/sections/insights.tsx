import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function InsightsSection() {
  const insights = [
    {
      title: "Superannuation Performance Trends 2024",
      description:
        "Exploring the latest trends in superannuation fund performance across Australia.",
      date: "February 28, 2025",
    },
    {
      title: "How to Maximize Your Retirement Savings",
      description:
        "Practical strategies to boost your super balance before retirement.",
      date: "February 15, 2025",
    },
    {
      title: "Understanding Superannuation Fee Structures",
      description:
        "Breaking down the complex fee structures of major super funds.",
      date: "January 30, 2025",
    },
  ];

  return (
    <div>
      <div className="flex flex-col justify-between gap-4 md:flex-row">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Superannuation Insights
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Stay informed with the latest trends, analysis, and expert guidance
            on superannuation and retirement planning.
          </p>
        </div>
        <div className="flex items-end">
          <Button variant="outline" asChild>
            <Link href="/insights" className="group">
              View All Insights
              <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
        {insights.map((insight, index) => (
          <Card key={index} className="flex flex-col">
            <CardHeader>
              <CardTitle>{insight.title}</CardTitle>
            </CardHeader>
            <CardContent className="grow">
              <CardDescription className="text-base">
                {insight.description}
              </CardDescription>
            </CardContent>
            <CardFooter className="flex justify-between">
              <span className="text-sm text-muted-foreground">
                {insight.date}
              </span>
              <Link
                href={`/insights/${insight.title.toLowerCase().replace(/\s+/g, "-")}`}
                className="text-sm font-medium text-primary hover:underline"
              >
                Read More
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
