import { teamMembers } from "@/lib/data/team";
import React from "react";

export default function Team() {
  return (
    <section id="team" className="bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Meet Our Leadership Team
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-500">
            Our team brings decades of combined experience in superannuation
            advisory and financial planning.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="overflow-hidden rounded-lg bg-white shadow-sm"
            >
              <div className="aspect-square bg-gray-200">
                {/* Image placeholder - would be replaced with actual images */}
                <div className="flex size-full items-center justify-center text-gray-500">
                  {member.name}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-medium text-gray-900">
                  {member.name}
                </h3>
                <p className="mt-1 text-sm font-medium text-primary">
                  {member.role}
                </p>
                <p className="mt-3 text-sm text-gray-600">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
