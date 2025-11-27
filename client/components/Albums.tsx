import { useState } from "react";
import { MapPin, Heart } from "lucide-react";

interface Album {
  id: number;
  title: string;
  location: string;
  images: string[];
  description: string;
  date: string;
}

export default function Albums() {
  const [selectedAlbum, setSelectedAlbum] = useState(0);
  const [selectedImage, setSelectedImage] = useState(0);

  const albums: Album[] = [
    {
      id: 1,
      title: "Paris Dreams",
      location: "Paris, France",
      date: "April 2023",
      description:
        "Our romantic escape under the Eiffel Tower. Every corner whispered love in French.",
      images: [
        "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1550923566-2b67f38a3e94?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1517457373614-b7152f800fd1?w=400&h=400&fit=crop",
      ],
    },
    {
      id: 2,
      title: "Beach Bliss",
      location: "Bali, Indonesia",
      date: "June 2023",
      description:
        "Sun, sand, and your love. The perfect beach getaway we'll never forget.",
      images: [
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1502933691298-84fc14542831?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=400&fit=crop",
      ],
    },
    {
      id: 3,
      title: "Mountain Adventure",
      location: "Swiss Alps",
      date: "August 2023",
      description:
        "Reaching new heights together. The views were breathtaking, but not as much as you.",
      images: [
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop",
      ],
    },
    {
      id: 4,
      title: "City Lights",
      location: "Tokyo, Japan",
      date: "September 2023",
      description:
        "Lost in translation, found in love. A city that never sleeps, just like my heart for you.",
      images: [
        "https://images.unsplash.com/photo-1540959375944-7049f642e9c1?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1540959375944-7049f642e9c1?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1540959375944-7049f642e9c1?w=400&h=400&fit=crop",
      ],
    },
  ];

  const currentAlbum = albums[selectedAlbum];
  const currentImage = currentAlbum.images[selectedImage];

  const handlePrevAlbum = () => {
    setSelectedAlbum((prev) => (prev - 1 + albums.length) % albums.length);
    setSelectedImage(0);
  };

  const handleNextAlbum = () => {
    setSelectedAlbum((prev) => (prev + 1) % albums.length);
    setSelectedImage(0);
  };

  const handlePrevImage = () => {
    setSelectedImage(
      (prev) => (prev - 1 + currentAlbum.images.length) % currentAlbum.images.length
    );
  };

  const handleNextImage = () => {
    setSelectedImage((prev) => (prev + 1) % currentAlbum.images.length);
  };

  return (
    <section id="albums" className="py-20 md:py-32 bg-gradient-to-b from-beige-100 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16 animate-fade-in-down">
          <h2 className="text-4xl md:text-5xl font-bold text-brown-900 mb-4">
            Our Adventures Together
          </h2>
          <p className="text-gray-600 text-lg font-light">
            Traveling the world, building memories
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-primary/50 mx-auto rounded-full mt-4" />
        </div>

        {/* Main Display */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12 animate-fade-in-up">
          {/* Main Image */}
          <div className="lg:col-span-2">
            <div className="relative group rounded-2xl overflow-hidden shadow-2xl h-96 lg:h-full">
              <img
                src={currentImage}
                alt={currentAlbum.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

              {/* Navigation Arrows */}
              <button
                onClick={handlePrevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 backdrop-blur-sm p-2 rounded-full transition-all duration-300 z-10"
              >
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button
                onClick={handleNextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 backdrop-blur-sm p-2 rounded-full transition-all duration-300 z-10"
              >
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>

              {/* Image Counter */}
              <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full">
                <p className="text-white text-sm font-light">
                  {selectedImage + 1} / {currentAlbum.images.length}
                </p>
              </div>
            </div>

            {/* Thumbnail Strip */}
            <div className="flex gap-2 mt-4">
              {currentAlbum.images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative w-20 h-20 rounded-lg overflow-hidden transition-all duration-300 ${
                    index === selectedImage ? "ring-2 ring-primary" : "opacity-60 hover:opacity-100"
                  }`}
                >
                  <img
                    src={img}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Album Info */}
          <div className="flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="text-primary font-light">
                  {currentAlbum.location}
                </span>
              </div>
              <h3 className="text-3xl font-bold text-brown-900 mb-2">
                {currentAlbum.title}
              </h3>
              <p className="text-gray-600 font-light text-sm mb-6">
                {currentAlbum.date}
              </p>

              <p className="text-gray-700 font-light leading-relaxed mb-6">
                {currentAlbum.description}
              </p>

              <div className="flex items-center gap-2 text-primary">
                <Heart className="w-5 h-5 fill-primary" />
                <span className="font-light">Forever in our hearts</span>
              </div>
            </div>

            {/* Album Navigation */}
            <div className="space-y-3">
              <button
                onClick={handlePrevAlbum}
                className="w-full py-3 px-4 bg-primary/10 hover:bg-primary/20 text-primary rounded-lg font-light transition-colors duration-300"
              >
                ← Previous Album
              </button>
              <button
                onClick={handleNextAlbum}
                className="w-full py-3 px-4 bg-primary hover:bg-primary/90 text-white rounded-lg font-light transition-colors duration-300"
              >
                Next Album →
              </button>
            </div>
          </div>
        </div>

        {/* Album List */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {albums.map((album, index) => (
            <button
              key={album.id}
              onClick={() => {
                setSelectedAlbum(index);
                setSelectedImage(0);
              }}
              className={`relative h-48 rounded-lg overflow-hidden group transition-all duration-300 ${
                index === selectedAlbum ? "ring-2 ring-primary" : ""
              }`}
            >
              <img
                src={album.images[0]}
                alt={album.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-end p-4">
                <h4 className="text-white font-semibold text-sm">
                  {album.title}
                </h4>
                <p className="text-white/80 font-light text-xs">
                  {album.location}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
