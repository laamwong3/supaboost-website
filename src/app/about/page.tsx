import { Container } from "@/components/layout/container";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Award,
  Clock,
  DollarSign,
  Globe,
  Heart,
  Shield,
  ThumbsUp,
  TrendingUp,
  Users,
} from "lucide-react";

export default function AboutPage() {
  const values = [
    {
      title: "Expertise",
      description:
        "Our team of financial professionals have decades of combined experience in superannuation and retirement planning.",
      icon: <Award className="size-8 text-primary" />,
    },
    {
      title: "Independence",
      description:
        "We provide unbiased, objective advice without allegiance to any particular superannuation fund.",
      icon: <Shield className="size-8 text-primary" />,
    },
    {
      title: "Transparency",
      description:
        "We believe in clear, jargon-free communication and complete fee transparency.",
      icon: <Globe className="size-8 text-primary" />,
    },
    {
      title: "Client-first",
      description:
        "Our clients' best interests are at the heart of everything we do.",
      icon: <Heart className="size-8 text-primary" />,
    },
  ];

  const timeline = [
    {
      year: "2015",
      title: "SuperBoost Founded",
      description:
        "Established to help Australians navigate the complex superannuation landscape.",
    },
    {
      year: "2017",
      title: "Launch of Fund Comparison Tool",
      description:
        "Developed our flagship superannuation fund comparison platform.",
    },
    {
      year: "2019",
      title: "Advisory Services Expansion",
      description:
        "Expanded our team of superannuation specialists and financial advisors.",
    },
    {
      year: "2021",
      title: "Legislative Update Platform",
      description:
        "Launched our real-time superannuation legislative update service.",
    },
    {
      year: "2023",
      title: "Digital Transformation",
      description:
        "Comprehensive digital overhaul to enhance client experience.",
    },
    {
      year: "2025",
      title: "Nationwide Presence",
      description:
        "Expanded to serve clients across all Australian states and territories.",
    },
  ];

  const team = [
    {
      name: "David Wilson",
      title: "Founder & CEO",
      bio: "David founded SuperBoost with a vision to demystify superannuation for everyday Australians. With over 20 years in financial services, he leads our strategic direction.",
    },
    {
      name: "Sarah Johnson",
      title: "Head of Advisory Services",
      bio: "Sarah oversees our team of financial advisors, ensuring clients receive personalized, expert guidance tailored to their unique retirement goals.",
    },
    {
      name: "Michael Chen",
      title: "Chief Investment Analyst",
      bio: "Michael leads our investment research team, analyzing superannuation fund performance and market trends to provide data-driven insights.",
    },
    {
      name: "Emma Rodriguez",
      title: "Superannuation Consultant",
      bio: "Emma specializes in self-managed super funds and complex superannuation strategies for high-net-worth individuals.",
    },
  ];

  return (
    <main>
      <div className="bg-muted py-16 md:py-24">
        <Container>
          <div className="max-w-3xl">
            <h1 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
              About SuperBoost
            </h1>
            <p className="mt-6 text-xl text-muted-foreground">
              We&apos;re on a mission to help Australians secure their financial
              future through optimized superannuation strategies.
            </p>
          </div>
        </Container>
      </div>

      <Container className="py-16 md:py-24">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold md:text-3xl">Our Story</h2>
            <div className="mt-6 space-y-4 text-muted-foreground">
              <p>
                SuperBoost was founded in 2015 with a clear mission: to help
                Australians navigate the complex world of superannuation and
                maximize their retirement savings.
              </p>
              <p>
                We recognized that most people find superannuation confusing and
                overwhelming, leading to disengagement and potentially
                significant financial losses over time. With most Australians
                relying on their super for retirement, this knowledge gap was
                having a real impact on financial futures.
              </p>
              <p>
                Our team of superannuation specialists, financial advisors, and
                technology experts came together to create accessible tools and
                resources that empower everyday Australians to make informed
                decisions about their retirement savings.
              </p>
              <p>
                Today, SuperBoost serves thousands of clients across Australia,
                helping them compare funds, optimize contributions, and develop
                tailored retirement strategies that align with their financial
                goals.
              </p>
            </div>
          </div>
          <div className="order-first md:order-last">
            <div className="aspect-video overflow-hidden rounded-lg bg-muted">
              <div className="flex size-full items-center justify-center bg-gradient-to-br from-primary/20 to-chart-2/20 p-8">
                <div className="relative size-40">
                  <svg viewBox="0 0 100 100" className="size-full">
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
                    SuperBoost
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-24">
          <h2 className="text-2xl font-bold md:text-3xl">Our Values</h2>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <Card
                key={index}
                className="border-2 transition-all hover:border-primary/50"
              >
                <CardHeader>
                  <div className="mb-2">{value.icon}</div>
                  <CardTitle>{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="mt-24">
          <h2 className="text-2xl font-bold md:text-3xl">Our Journey</h2>
          <div className="relative mt-8 border-l border-muted pl-6">
            {timeline.map((item, index) => (
              <div key={index} className="mb-10 last:mb-0">
                <div className="absolute -left-3 flex size-6 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Clock className="size-3" />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-muted-foreground">
                    {item.year}
                  </span>
                  <h3 className="mt-1 text-lg font-medium">{item.title}</h3>
                  <p className="mt-1 text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-24">
          <h2 className="text-2xl font-bold md:text-3xl">Our Team</h2>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="mb-4 flex h-40 items-center justify-center rounded-md bg-muted">
                    <Users className="size-20 text-muted-foreground/30" />
                  </div>
                  <CardTitle className="text-lg">{member.name}</CardTitle>
                  <CardDescription>{member.title}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="mt-24 overflow-hidden rounded-2xl bg-gradient-to-br from-primary/10 to-chart-1/5 p-8 shadow-md">
          <div className="flex items-center gap-4">
            <div className="rounded-full bg-white/80 p-3 shadow-sm backdrop-blur-sm">
              <TrendingUp className="size-8 text-primary" />
            </div>
            <h2 className="text-2xl font-bold text-primary">Our Impact</h2>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="flex flex-col items-center rounded-xl bg-white/60 p-6 text-center shadow-sm backdrop-blur-sm">
              <div className="flex size-20 items-center justify-center rounded-full bg-primary/10">
                <Users className="size-10 text-primary" />
              </div>
              <span className="mt-4 text-4xl font-bold text-primary">
                10,000+
              </span>
              <span className="mt-2 text-muted-foreground">Clients Served</span>
            </div>
            <div className="flex flex-col items-center rounded-xl bg-white/60 p-6 text-center shadow-sm backdrop-blur-sm">
              <div className="flex size-20 items-center justify-center rounded-full bg-chart-2/10">
                <DollarSign className="size-10 text-chart-2" />
              </div>
              <span className="mt-4 text-4xl font-bold text-chart-2">
                $500M+
              </span>
              <span className="mt-2 text-muted-foreground">
                Super Optimized
              </span>
            </div>
            <div className="flex flex-col items-center rounded-xl bg-white/60 p-6 text-center shadow-sm backdrop-blur-sm">
              <div className="flex size-20 items-center justify-center rounded-full bg-chart-1/10">
                <ThumbsUp className="size-10 text-chart-1" />
              </div>
              <span className="mt-4 text-4xl font-bold text-chart-1">98%</span>
              <span className="mt-2 text-muted-foreground">
                Client Satisfaction
              </span>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}
