export type Service = {
  id: number;
  title: string;
  description: string;
  features: string[];
  imageUrl: string;
};

export const services: Service[] = [
  {
    id: 1,
    title: "Personalized Superannuation Advice",
    description:
      "Our expert advisors provide tailored superannuation strategies designed to optimize your retirement savings based on your unique financial situation, goals, and risk tolerance.",
    features: [
      "Comprehensive analysis of your current superannuation",
      "Customized investment strategy recommendations",
      "Regular portfolio reviews and adjustments",
      "Strategic contribution planning",
      "Performance benchmarking and reporting",
    ],
    imageUrl: "/services/superannuation-advice.jpg",
  },
  {
    id: 2,
    title: "Investment Strategy Consultation",
    description:
      "Maximize your superannuation returns with our strategic investment consultation services, designed to optimize your portfolio allocation across various asset classes.",
    features: [
      "Risk profile assessment and alignment",
      "Diversification strategy development",
      "Market trend analysis and insights",
      "Performance tracking and rebalancing",
      "Tax-efficient investment approaches",
    ],
    imageUrl: "/services/investment-strategy.jpg",
  },
  {
    id: 3,
    title: "Retirement Planning",
    description:
      "Plan for a comfortable retirement with our comprehensive planning services that ensure your superannuation will support your desired lifestyle when you stop working.",
    features: [
      "Retirement income projection and modeling",
      "Lifestyle needs assessment",
      "Transition to retirement strategies",
      "Pension and benefit optimization",
      "Estate planning considerations",
    ],
    imageUrl: "/services/retirement-planning.jpg",
  },
];

export type AdditionalService = {
  id: number;
  title: string;
  description: string;
  icon: string; // This would be the icon name in a real implementation
};

export const additionalServices: AdditionalService[] = [
  {
    id: 1,
    title: "Risk Assessment",
    description:
      "Comprehensive evaluation of your risk tolerance and portfolio alignment to ensure your superannuation strategy matches your comfort level.",
    icon: "shield",
  },
  {
    id: 2,
    title: "Portfolio Management",
    description:
      "Ongoing management and optimization of your superannuation portfolio to adapt to market changes and your evolving needs.",
    icon: "chart-bar",
  },
  {
    id: 3,
    title: "Financial Education",
    description:
      "Workshops and resources to help you understand the superannuation system and make informed decisions about your retirement savings.",
    icon: "academic-cap",
  },
];
