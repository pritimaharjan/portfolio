export default function Banner() {
  return (
    <section className="bg-linear-to-br from-[#1E3A8A] to-[#7C3AED] py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center gap-8 text-center">
          <h1 className="text-4xl sm:text-6xl font-bold text-white">
            Hello, I'm Pritima
          </h1>

          <p className="text-lg text-white/80 max-w-2xl">
            I'm a Full Stack Developer and a Tech Enthusiast. I love exploring
            new technologies and building innovative solutions.
          </p>

          {/* Let's Connect */}
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <a
              href="#contact"
              className="px-6 py-3 bg-white text-[#1E3A8A] font-semibold rounded-full hover:scale-105 transition"
            >
              Let’s Connect
            </a>

            <a
              href="/Pritima_Maharjan_CV.pdf"
              className="px-6 py-3 border border-white text-white font-semibold rounded-full hover:bg-white hover:text-[#1E3A8A] transition"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
