import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Memory {
  id: number;
  image: string;
  title: string;
  message: string;
  quote: string;
  date: string;
}

export default function Memories() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const memories: Memory[] = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1474533469280-7757b547cb4d?w=600&h=500&fit=crop",
      title: "Summer Breeze",
      message:
        "That day at the beach, watching the sunset together felt like time stopped. Your hand in mine made everything perfect.",
      quote: "In your eyes, I found my home.",
      date: "June 15, 2023",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1516680623309-b3b8e57e8fbb?w=600&h=500&fit=crop",
      title: "Coffee Shop Romance",
      message:
        "Every morning coffee with you is a blessing. Your smile across the table makes my heart skip a beat, always.",
      quote: "You are my favorite hello and my hardest goodbye.",
      date: "July 22, 2023",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1525633206246-4d13d218372f?w=600&h=500&fit=crop",
      title: "Starry Night",
      message:
        "Lying under the stars with you, talking about dreams and forever. Those moments are when I feel most alive.",
      quote: "You are my greatest love story.",
      date: "August 10, 2023",
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&h=500&fit=crop",
      title: "Mountain View",
      message:
        "Climbing to the top together, reaching new heights in life and love. With you, anything feels possible.",
      quote: "Our love is my favorite adventure.",
      date: "September 5, 2023",
    },
  ];

  const currentMemory = memories[currentIndex];

  const nextMemory = () => {
    setCurrentIndex((prev) => (prev + 1) % memories.length);
  };

  const prevMemory = () => {
    setCurrentIndex((prev) => (prev - 1 + memories.length) % memories.length);
  };

  return (
    <section id="memories" className="py-20 md:py-32 bg-gradient-to-b from-beige-50 via-white to-beige-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16 animate-fade-in-down">
          <h2 className="text-4xl md:text-5xl font-bold text-brown-900 mb-4">
            Precious Memories
          </h2>
          <p className="text-gray-600 text-lg font-light">
            Moments that made us who we are
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-primary/50 mx-auto rounded-full mt-4" />
        </div>

        {/* Memory Carousel */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center animate-scale-in">
          {/* Image */}
          <div className="relative group">
            <div className="relative h-96 md:h-full rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={currentMemory.image}
                alt={currentMemory.title}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>

            {/* Date Badge */}
            <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full">
              <p className="text-sm font-light text-brown-900">
                {currentMemory.date}
              </p>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div>
              <h3 className="text-4xl font-bold text-brown-900 mb-2">
                {currentMemory.title}
              </h3>
              <div className="w-12 h-1 bg-gradient-to-r from-primary to-transparent rounded-full" />
            </div>

            <p className="text-gray-700 text-lg font-light leading-relaxed">
              {currentMemory.message}
            </p>

            <div className="bg-gradient-to-br from-primary/10 to-primary/5 border-l-4 border-primary rounded-lg p-6">
              <p className="text-xl font-light italic text-brown-900">
                "{currentMemory.quote}"
              </p>
            </div>

            {/* Navigation */}
            <div className="flex items-center gap-4 pt-6">
              <button
                onClick={prevMemory}
                className="p-3 rounded-full bg-primary/20 hover:bg-primary/30 transition-colors duration-300 group"
              >
                <ChevronLeft className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
              </button>
              <div className="flex-1 flex gap-2">
                {memories.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? "bg-primary w-8"
                        : "bg-primary/30 w-2"
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={nextMemory}
                className="p-3 rounded-full bg-primary/20 hover:bg-primary/30 transition-colors duration-300 group"
              >
                <ChevronRight className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
