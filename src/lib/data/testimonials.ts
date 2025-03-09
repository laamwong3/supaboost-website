export type Testimonial = {
  id: number;
  name: string;
  role: string;
  company?: string;
  testimonial: string;
  imageUrl?: string;
};

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "John Smith",
    role: "Retiree",
    testimonial:
      "Supaboost transformed my retirement planning. Their personalized approach helped me increase my super balance by 22% in just two years!",
    imageUrl: "/testimonials/john.jpg",
  },
  {
    id: 2,
    name: "Rebecca Lee",
    role: "Business Owner",
    company: "Lee Enterprises",
    testimonial:
      "As a business owner, I needed specific advice for both my personal and business superannuation. The team at Supaboost provided clear, actionable strategies that have made a significant difference.",
    imageUrl: "/testimonials/rebecca.jpg",
  },
  {
    id: 3,
    name: "Thomas Wilson",
    role: "IT Professional",
    company: "Tech Solutions",
    testimonial:
      "I was overwhelmed by the superannuation options available. Supaboost simplified everything and created a strategy that aligns perfectly with my long-term goals.",
    imageUrl: "/testimonials/thomas.jpg",
  },
  {
    id: 4,
    name: "Lisa Peterson",
    role: "Healthcare Worker",
    testimonial:
      "The personalized service from Supaboost was exceptional. They took the time to understand my unique situation and designed a super strategy that gives me confidence about my future.",
    imageUrl: "/testimonials/lisa.jpg",
  },
];
