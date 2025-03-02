import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight, Award, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export function ExpertAdvice() {
  const experts = [
    {
      name: "Sarah Johnson",
      title: "Financial Advisor",
      specialty: "Retirement Planning",
      description:
        "With over 15 years of experience in superannuation advice, Sarah specializes in helping clients optimize their retirement strategies.",
      imageUrl: "/api/placeholder/200/200",
    },
    {
      name: "Michael Chen",
      title: "Investment Analyst",
      specialty: "Fund Performance",
      description:
        "Michael's deep knowledge of investment markets helps clients understand superannuation fund performance and make informed choices.",
      imageUrl: "/api/placeholder/200/200",
    },
    {
      name: "Emma Rodriguez",
      title: "Superannuation Consultant",
      specialty: "SMSF Management",
      description:
        "Emma is an expert in self-managed super funds, helping clients navigate the complexities of SMSF establishment and management.",
      imageUrl: "/api/placeholder/200/200",
    },
  ];

  return (
    <div>
      <div className="flex flex-col justify-between gap-4 md:flex-row">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Expert Advice
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Our team of superannuation specialists are here to help you make
            informed decisions about your retirement savings.
          </p>
        </div>
        <div className="flex items-end">
          <Button asChild>
            <Link href="/advice" className="group">
              Book a Consultation
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
        {experts.map((expert, index) => (
          <Card key={index} className="flex flex-col">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-4">
                <Avatar className="h-12 w-12">
                  <AvatarImage src={expert.imageUrl} alt={expert.name} />
                  <AvatarFallback>{expert.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className="text-lg">{expert.name}</CardTitle>
                  <CardDescription>
                    {expert.title} • {expert.specialty}
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-sm text-muted-foreground">
                {expert.description}
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" size="sm" className="w-full" asChild>
                <Link
                  href={`/experts/${expert.name.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  View Profile
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="mt-12 rounded-lg bg-muted/30 p-6 md:p-8">
        <div className="flex items-center gap-4">
          <Award className="h-10 w-10 text-primary" />
          <h3 className="text-xl font-bold">Why Choose Our Experts?</h3>
        </div>
        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          <div className="flex items-start gap-2">
            <CheckCircle2 className="h-5 w-5 text-primary" />
            <p className="text-sm">Independent, unbiased advice</p>
          </div>
          <div className="flex items-start gap-2">
            <CheckCircle2 className="h-5 w-5 text-primary" />
            <p className="text-sm">Certified financial advisors</p>
          </div>
          <div className="flex items-start gap-2">
            <CheckCircle2 className="h-5 w-5 text-primary" />
            <p className="text-sm">Personalized strategies</p>
          </div>
          <div className="flex items-start gap-2">
            <CheckCircle2 className="h-5 w-5 text-primary" />
            <p className="text-sm">Ongoing support and guidance</p>
          </div>
          <div className="flex items-start gap-2">
            <CheckCircle2 className="h-5 w-5 text-primary" />
            <p className="text-sm">Up-to-date with legislative changes</p>
          </div>
          <div className="flex items-start gap-2">
            <CheckCircle2 className="h-5 w-5 text-primary" />
            <p className="text-sm">Transparent fee structure</p>
          </div>
        </div>
      </div>
    </div>
  );
}
