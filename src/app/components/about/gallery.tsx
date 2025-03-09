import React from "react";

// In a real implementation, these would be actual image paths
const galleryImages = [
  { id: 1, src: "/gallery/office1.jpg", alt: "Supaboost Office" },
  { id: 2, src: "/gallery/team-event.jpg", alt: "Team Building Event" },
  { id: 3, src: "/gallery/workshop.jpg", alt: "Client Workshop" },
  { id: 4, src: "/gallery/office2.jpg", alt: "Meeting Room" },
  { id: 5, src: "/gallery/conference.jpg", alt: "Financial Conference" },
  { id: 6, src: "/gallery/client-meeting.jpg", alt: "Client Consultation" },
];

export default function Gallery() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            A Glimpse Into Supaboost
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-500">
            Take a look behind the scenes at our office, team events, and client
            workshops.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className="aspect-video overflow-hidden rounded-lg bg-gray-100"
            >
              {/* Image placeholders - would be replaced with actual images */}
              <div className="flex size-full items-center justify-center text-gray-500">
                {image.alt}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
