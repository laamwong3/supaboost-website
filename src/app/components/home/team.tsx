import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { teamMembers } from "@/lib/data/team";
import Link from "next/link";
import React from "react";

export default function Team() {
  // For the homepage, we'll just show a few featured team members
  const featuredTeam = teamMembers.slice(0, 3);

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Meet Our Expert Team
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-500">
            Our team of certified advisors brings decades of experience in
            superannuation and financial planning.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {featuredTeam.map((member) => (
            <Card
              key={member.id}
              className="overflow-hidden border border-gray-200"
            >
              <div className="relative h-64 w-full">
                {/* In a real environment, replace with actual images */}
                <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
                  <span className="text-gray-500">{member.name}</span>
                </div>
              </div>
              <CardHeader>
                <CardTitle>{member.name}</CardTitle>
                <CardDescription>{member.role}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{member.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button variant="outline" size="lg" asChild>
            <Link href="/about#team">View Full Team</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
