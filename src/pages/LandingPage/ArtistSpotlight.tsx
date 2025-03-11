import React from "react";

const artists = [
  {
    name: "Rajesh Sharma",
    image: "/artists/artist1.jpg", // Local image
    bio: "A contemporary artist specializing in abstract and modern art.",
    bestSelling: "The Golden Horizon",
  },
  {
    name: "Priya Verma",
    image: "/artists/artist2.jpg",
    bio: "A watercolor expert known for her breathtaking landscapes.",
    bestSelling: "Serene Valley",
  },
  {
    name: "Amit Kapoor",
    image: "/artists/artist3.jpg",
    bio: "A portrait artist bringing emotions to life on canvas.",
    bestSelling: "Eternal Gaze",
  },
  {
    name: "Neha Choudhary",
    image: "/artists/artist4.jpg",
    bio: "Blending realism and surrealism to create captivating art.",
    bestSelling: "Dreamscape",
  },
  {
    name: "Rohan Gupta",
    image: "/artists/artist5.jpg",
    bio: "Famous for bold strokes and vibrant color palettes.",
    bestSelling: "Cosmic Symphony",
  },
  {
    name: "Sneha Mehta",
    image: "/artists/artist6.jpg",
    bio: "Merging traditional techniques with modern themes.",
    bestSelling: "Echoes of Time",
  },
];

const ArtistSpotlight: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-6">🎭 Meet Our Artists</h2>
        <p className="text-lg text-gray-700 mb-12">
          Discover the visionaries behind our exclusive collection.
        </p>

        {/* Artists Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {artists.map((artist, index) => (
            <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-lg text-center">
              <img
                src={artist.image}
                alt={artist.name}
                className="w-40 h-40 mx-auto mb-4 rounded-full object-cover border-2 border-red-500"
              />
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">{artist.name}</h3>
              <p className="text-gray-600 mb-2">{artist.bio}</p>
              <p className="text-red-600 font-semibold">🔥 Best-Selling: {artist.bestSelling}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArtistSpotlight;
