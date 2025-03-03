import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight, FileText } from "lucide-react";
import Link from "next/link";

export function LegislativeUpdates() {
  const updates = [
    {
      title: "Changes to Superannuation Contribution Caps",
      description:
        "The government has announced changes to concessional and non-concessional contribution caps for the 2025-2026 financial year.",
      date: "March 1, 2025",
      category: "Legislative",
    },
    {
      title: "New ESG Reporting Requirements",
      description:
        "New regulations requiring superannuation funds to report on environmental, social, and governance investments.",
      date: "February 20, 2025",
      category: "Regulatory",
    },
    {
      title: "First Home Super Saver Scheme Update",
      description:
        "Expansion of the First Home Super Saver Scheme to include higher contribution limits for first-time buyers.",
      date: "January 15, 2025",
      category: "Policy",
    },
  ];

  return (
    <div>
      <div className="flex flex-col justify-between gap-4 md:flex-row">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Legislative Updates
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Stay informed about the latest changes to superannuation legislation
            and how they might affect your retirement savings.
          </p>
        </div>
        <div className="flex items-end">
          <Button variant="outline" asChild>
            <Link href="/updates" className="group">
              View All Updates
              <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
        {updates.map((update, index) => (
          <Card key={index} className="flex flex-col">
            <CardHeader>
              <div className="flex justify-between">
                <Badge variant="outline">{update.category}</Badge>
                <FileText className="size-5 text-muted-foreground" />
              </div>
              <CardTitle className="mt-2">{update.title}</CardTitle>
            </CardHeader>
            <CardContent className="grow">
              <CardDescription className="text-base">
                {update.description}
              </CardDescription>
            </CardContent>
            <CardFooter className="flex justify-between">
              <span className="text-sm text-muted-foreground">
                {update.date}
              </span>
              <Link
                href={`/updates/${update.title.toLowerCase().replace(/\s+/g, "-")}`}
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
