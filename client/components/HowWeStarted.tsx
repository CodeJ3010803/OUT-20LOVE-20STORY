export default function HowWeStarted() {
  return (
    <section id="story" className="py-20 md:py-32 bg-gradient-to-b from-white to-beige-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16 animate-fade-in-down">
          <h2 className="text-4xl md:text-5xl font-bold text-brown-900 mb-4">
            How It All Began
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-primary/50 mx-auto rounded-full" />
        </div>

        {/* Timeline */}
        <div className="space-y-12">
          {/* Event 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center group animate-fade-in-up">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1516680623309-b3b8e57e8fbb?w=500&h=400&fit=crop"
                alt="First meeting"
                className="w-full h-80 object-cover rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-xl" />
            </div>
            <div className="md:pl-4">
              <h3 className="text-3xl font-bold text-brown-900 mb-3">
                The First Day
              </h3>
              <p className="text-gray-700 text-lg font-light leading-relaxed mb-4">
                It was an ordinary Tuesday when our eyes first met. What we didn't know was that
                this simple moment would change everything. A glance, a smile, and suddenly the
                world felt different. From that moment on, every moment with you has been a gift.
              </p>
              <p className="text-primary font-semibold italic">
                "And in that moment, I knew."
              </p>
            </div>
          </div>

          {/* Event 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center md:grid-cols-2-reverse animate-fade-in-up">
            <div className="md:pr-4 md:order-2 order-1">
              <h3 className="text-3xl font-bold text-brown-900 mb-3">
                Growing Closer
              </h3>
              <p className="text-gray-700 text-lg font-light leading-relaxed mb-4">
                Days turned into weeks, weeks into months. Every conversation brought us closer,
                every laugh became our own inside joke. We discovered we were two pieces of the same puzzle,
                fitting perfectly into each other's lives. The way you looked at me made me believe
                that true love really does exist.
              </p>
              <p className="text-primary font-semibold italic">
                "You became my home."
              </p>
            </div>
            <div className="relative md:order-1 order-2">
              <img
                src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&h=400&fit=crop"
                alt="Growing together"
                className="w-full h-80 object-cover rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-xl" />
            </div>
          </div>

          {/* Event 3 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center animate-fade-in-up">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1525633206246-4d13d218372f?w=500&h=400&fit=crop"
                alt="Forever together"
                className="w-full h-80 object-cover rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-xl" />
            </div>
            <div className="md:pl-4">
              <h3 className="text-3xl font-bold text-brown-900 mb-3">
                Forever Starts Now
              </h3>
              <p className="text-gray-700 text-lg font-light leading-relaxed mb-4">
                With each passing day, my love for you grows deeper. You've become my greatest adventure,
                my safe place, and my reason to smile. I can't wait to build a lifetime of memories with you,
                to face every challenge together, and to celebrate every victory as one. Thank you for
                choosing to walk this beautiful journey with me.
              </p>
              <p className="text-primary font-semibold italic">
                "You are my forever."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
