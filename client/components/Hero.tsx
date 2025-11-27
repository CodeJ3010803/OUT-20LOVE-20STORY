export default function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source
            src="https://videos.pexels.com/video-files/3045163/3045163-sd_640_360_25fps.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 animate-fade-in-up">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg">
          Our Love Story
        </h1>
        <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto font-light drop-shadow-lg">
          A journey of two hearts, captured forever
        </p>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-float">
          <div className="flex flex-col items-center gap-2">
            <span className="text-white/70 text-sm font-light">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center p-2">
              <div className="w-1 h-2 bg-white/70 rounded-full animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
