import { Container } from "@/components/layout/container";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  BookOpen,
  CheckCircle2,
  DollarSign,
  FileCheck,
  FilePieChart,
  Heart,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import Link from "next/link";

export default function AdvicePage() {
  const services = [
    {
      title: "Superannuation Review",
      description:
        "A comprehensive analysis of your current superannuation arrangements, identifying opportunities for improvement.",
      icon: <FilePieChart className="h-10 w-10 text-primary" />,
      price: "$295",
      features: [
        "Analysis of current fund performance",
        "Fee structure assessment",
        "Insurance coverage review",
        "Investment option evaluation",
        "Written report with recommendations",
      ],
    },
    {
      title: "Retirement Planning",
      description:
        "Tailored retirement planning advice to help you achieve your retirement income goals.",
      icon: <Heart className="h-10 w-10 text-primary" />,
      price: "$495",
      features: [
        "Retirement income projection",
        "Contribution strategy planning",
        "Tax optimization strategies",
        "Government entitlement assessment",
        "Comprehensive retirement roadmap",
      ],
    },
    {
      title: "SMSF Consultation",
      description:
        "Expert guidance on establishing and managing a Self-Managed Super Fund.",
      icon: <ShieldCheck className="h-10 w-10 text-primary" />,
      price: "$695",
      features: [
        "SMSF suitability assessment",
        "Setup guidance and requirements",
        "Investment strategy development",
        "Compliance and reporting overview",
        "Trustee responsibility education",
      ],
    },
    {
      title: "Superannuation Consolidation",
      description:
        "Simplify your super by combining multiple accounts to reduce fees and improve management.",
      icon: <DollarSign className="h-10 w-10 text-primary" />,
      price: "$195",
      features: [
        "Lost super search",
        "Fund comparison and selection",
        "Consolidation paperwork assistance",
        "Insurance implications review",
        "Post-consolidation strategy",
      ],
    },
  ];

  const faqs = [
    {
      question:
        "How is superannuation advice different from general financial advice?",
      answer:
        "Superannuation advice specifically focuses on your retirement savings within the superannuation system. It addresses fund selection, contribution strategies, investment options, and insurance within super. General financial advice typically covers broader areas like budgeting, investments outside super, debt management, and overall financial planning.",
    },
    {
      question:
        "Do I need to prepare anything before my superannuation consultation?",
      answer:
        "To get the most from your consultation, it's helpful to gather recent statements from all your superannuation accounts, details of any insurance within super, information about your current employment and salary, and a general idea of your retirement goals and timeline.",
    },
    {
      question: "How often should I review my superannuation strategy?",
      answer:
        "We recommend reviewing your superannuation strategy annually, or whenever there are significant changes to your personal circumstances (such as marriage, career change, or approaching retirement), or major legislative changes to superannuation rules.",
    },
    {
      question:
        "Can SuperBoost help with transferring UK pension funds to Australian superannuation?",
      answer:
        "Yes, we have specialists experienced in UK pension transfers to Australian superannuation funds. This is a complex area with specific requirements and tax implications, so professional advice is particularly important for these situations.",
    },
    {
      question:
        "What's the difference between the accumulation and pension phase of superannuation?",
      answer:
        "The accumulation phase is when you're building up your super balance through contributions and investment returns during your working life. The pension phase begins when you start drawing on your super as retirement income. Different tax rules and regulations apply to each phase.",
    },
  ];

  return (
    <main>
      <div className="bg-muted py-16 md:py-24">
        <Container>
          <div className="max-w-3xl">
            <h1 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
              Superannuation Advice
            </h1>
            <p className="mt-6 text-xl text-muted-foreground">
              Expert guidance to help you navigate the complexities of
              superannuation and maximize your retirement savings.
            </p>
          </div>
        </Container>
      </div>

      <Container className="py-16 md:py-24">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold md:text-3xl">
              Why Get Superannuation Advice?
            </h2>
            <div className="mt-6 space-y-6">
              <div className="flex items-start gap-4">
                <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Sparkles className="h-4 w-4" />
                </div>
                <div>
                  <h3 className="font-medium">
                    Maximize Your Retirement Savings
                  </h3>
                  <p className="mt-2 text-muted-foreground">
                    Small changes to your superannuation strategy can lead to
                    significant differences in your final balance. Our experts
                    help you identify opportunities to boost your retirement
                    savings.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <FileCheck className="h-4 w-4" />
                </div>
                <div>
                  <h3 className="font-medium">Navigate Complex Regulations</h3>
                  <p className="mt-2 text-muted-foreground">
                    Superannuation rules and regulations change frequently. Our
                    advisors stay up-to-date with the latest changes and help
                    you understand how they affect your retirement strategy.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <BookOpen className="h-4 w-4" />
                </div>
                <div>
                  <h3 className="font-medium">Personalized Strategies</h3>
                  <p className="mt-2 text-muted-foreground">
                    Everyone&apos;s retirement goals and circumstances are
                    different. We provide tailored advice that aligns with your
                    specific needs, timeline, and risk tolerance.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="order-first md:order-last">
            <div className="aspect-video overflow-hidden rounded-lg bg-muted">
              <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-primary/20 to-chart-2/20 p-8 text-center">
                <div>
                  <h3 className="text-2xl font-bold">Did you know?</h3>
                  <p className="mt-4 text-lg">
                    A 35-year-old with a $50,000 super balance could potentially
                    have <span className="font-bold">$100,000+ more</span> at
                    retirement by optimizing their super strategy now.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-24">
          <h2 className="text-2xl font-bold md:text-3xl">
            Our Advisory Services
          </h2>
          <p className="mt-4 max-w-3xl text-lg text-muted-foreground">
            We offer a range of specialized superannuation advisory services
            tailored to your needs at every stage of your retirement planning
            journey.
          </p>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <Card key={index} className="flex flex-col">
                <CardHeader>
                  <div className="mb-4">{service.icon}</div>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription className="mt-2">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="mb-4">
                    <span className="text-2xl font-bold">{service.price}</span>
                    <span className="text-muted-foreground"> / session</span>
                  </div>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" asChild>
                    <Link href="/contact">Book Consultation</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>

        <div className="mt-24">
          <h2 className="text-2xl font-bold md:text-3xl">Our Approach</h2>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-4">
            <div className="flex flex-col items-center text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h3 className="mt-4 text-lg font-medium">Initial Assessment</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                We begin by understanding your current financial situation,
                retirement goals, and timeline.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h3 className="mt-4 text-lg font-medium">Strategy Development</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Our experts analyze your needs and develop personalized
                strategies to optimize your superannuation.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h3 className="mt-4 text-lg font-medium">Implementation</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                We guide you through implementing recommendations, helping with
                paperwork and transitions.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <span className="text-2xl font-bold">4</span>
              </div>
              <h3 className="mt-4 text-lg font-medium">Ongoing Support</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                We provide regular reviews and adjustments to ensure your
                strategy remains optimal as circumstances change.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-24">
          <h2 className="text-2xl font-bold md:text-3xl">
            Frequently Asked Questions
          </h2>
          <div className="mt-8 max-w-3xl">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>

        <div className="mt-24 rounded-lg bg-muted/30 p-8 text-center">
          <h2 className="text-2xl font-bold">
            Ready to optimize your superannuation?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Book a consultation with one of our superannuation specialists and
            take the first step toward maximizing your retirement savings.
          </p>
          <div className="mt-8">
            <Button size="lg" asChild>
              <Link href="/contact">Book a Consultation</Link>
            </Button>
          </div>
        </div>
      </Container>
    </main>
  );
}
