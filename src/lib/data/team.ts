export type TeamMember = {
  id: number;
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
};

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Principal Advisor",
    bio: "With over 15 years of experience in superannuation advisory, Sarah leads our team with expertise in retirement planning and investment strategy.",
    imageUrl: "/team/sarah.jpg",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Investment Specialist",
    bio: "Michael brings 12 years of investment management experience, specializing in diversified portfolios and market analysis.",
    imageUrl: "/team/michael.jpg",
  },
  {
    id: 3,
    name: "Emma Williams",
    role: "Superannuation Consultant",
    bio: "Emma is our expert on superannuation legislation and compliance, helping clients navigate the complexities of Australia's super system.",
    imageUrl: "/team/emma.jpg",
  },
  {
    id: 4,
    name: "David Thompson",
    role: "Retirement Planner",
    bio: "David focuses on creating comprehensive retirement strategies, ensuring our clients can enjoy financial security in their post-work years.",
    imageUrl: "/team/david.jpg",
  },
];
