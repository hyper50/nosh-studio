import Image from "next/image";
import Link from "next/link";

/* ───────────── DATA ───────────── */
const projects = [
  {
    id: "blue-petrol",
    title: "Villa Las Lomas",
    subtitle: "Calacatta · Azul petróleo · Cobre",
    image: "/images/projects/b/frontal-island.jpg",
  },
  {
    id: "warm-terracotta",
    title: "Villa Sierra Blanca",
    subtitle: "Madera natural · Mármol · Terracota",
    image: "/images/projects/a/hero-wide.jpg",
  },
  {
    id: "dark-marble",
    title: "Villa La Zagaleta",
    subtitle: "Mármol oscuro · Latón · Tom Dixon",
    image: "/images/projects/d/tom-dixon-table.jpg",
  },
  {
    id: "neutral-elegant",
    title: "Villa Nueva Andalucía",
    subtitle: "Roble claro · Calacatta · Minimalismo",
    image: "/images/projects/e/oval-table.jpg",
  },
];

const brands = [
  "Miele",
  "Quooker",
  "Blum",
  "Gaggenau",
  "Cosentino",
  "Dornbracht",
];

/* ───────────── PAGE ───────────── */
export default function Home() {
  return (
    <main className="min-h-screen bg-ns-paper">
      {/* ──── NAV ──── */}
      <nav className="fixed top-0 left-0 right-0 z-50 mix-blend-difference">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-6 flex items-center justify-between">
          <Link href="/" className="text-white">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logos/NOSH_Logo_Wordmark_white.svg"
              alt="NOSH STUDIO"
              className="h-5 md:h-6 w-auto"
            />
          </Link>
          <div className="flex items-center gap-8">
            <Link
              href="#portfolio"
              className="text-white text-[11px] font-semibold tracking-[0.1em] uppercase hover:opacity-70 transition-opacity hidden sm:block"
            >
              Portfolio
            </Link>
            <Link
              href="#contacto"
              className="text-white text-[11px] font-semibold tracking-[0.1em] uppercase hover:opacity-70 transition-opacity"
            >
              Contacto
            </Link>
          </div>
        </div>
      </nav>

      {/* ──── HERO ──── */}
      <section className="relative h-screen w-full overflow-hidden">
        <Image
          src="/images/projects/b/frontal-island.jpg"
          alt="Cocina azul petróleo con isla de mármol calacatta — NOSH STUDIO"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/25 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-end pb-20 md:pb-28 px-6 md:px-12 max-w-[1400px] mx-auto">
          <p className="text-[11px] font-semibold tracking-[0.1em] uppercase text-white/60 mb-4">
            Carpintería & Cocinas a Medida
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium text-white leading-[1.1] max-w-2xl">
            Precisión constructiva,
            <br />
            sensibilidad material
          </h1>
          <p className="text-sm md:text-base text-white/60 mt-6 max-w-md leading-relaxed">
            Diseñamos, fabricamos e instalamos cocinas y carpintería a medida
            para las viviendas más exigentes de la Costa del Sol.
          </p>
          <div className="mt-8">
            <Link
              href="#portfolio"
              className="inline-flex items-center gap-3 text-white text-[11px] font-semibold tracking-[0.1em] uppercase border border-white/30 px-6 py-3 hover:bg-white hover:text-ns-black transition-all duration-300"
            >
              Ver proyectos
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                className="ml-1"
              >
                <path
                  d="M3 8h10M9 4l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
              </svg>
            </Link>
          </div>
        </div>
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <div className="w-[1px] h-8 bg-white/40 animate-pulse" />
        </div>
      </section>

      {/* ──── INTRO / CREDIBILITY ──── */}
      <section className="bg-ns-paper py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
            <div>
              <p className="text-[11px] font-semibold tracking-[0.1em] uppercase text-ns-taupe mb-6">
                Sobre Nosotros
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-medium text-ns-black leading-[1.15]">
                Cada detalle importa
              </h2>
              <p className="text-base text-ns-mineral mt-6 leading-[1.7] max-w-lg">
                En NOSH STUDIO diseñamos, fabricamos e instalamos cocinas y
                carpintería a medida. Trabajamos con promotoras y constructoras
                que buscan un partner de confianza para sus proyectos más
                exigentes.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-8">
              {[
                { number: "+50", label: "Proyectos" },
                { number: "+15", label: "Años exp." },
                { number: "100%", label: "A medida" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-3xl md:text-4xl font-medium text-ns-black">
                    {stat.number}
                  </p>
                  <p className="text-[11px] font-semibold tracking-[0.1em] uppercase text-ns-taupe mt-2">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ──── PORTFOLIO ──── */}
      <section id="portfolio" className="bg-ns-paper pb-24 md:pb-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="flex items-end justify-between mb-16">
            <div>
              <p className="text-[11px] font-semibold tracking-[0.1em] uppercase text-ns-taupe mb-4">
                Portfolio
              </p>
              <h2 className="text-3xl md:text-4xl font-medium text-ns-black">
                Proyectos seleccionados
              </h2>
            </div>
          </div>

          {/* Editorial grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-5">
            {/* Large left — Blue Petrol */}
            <div className="md:col-span-7 group cursor-pointer">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={projects[0].image}
                  alt={projects[0].title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 58vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <p className="text-[11px] font-semibold tracking-[0.1em] uppercase text-white/70">
                    {projects[0].subtitle}
                  </p>
                  <p className="text-xl font-medium text-white mt-1">
                    {projects[0].title}
                  </p>
                </div>
              </div>
            </div>

            {/* Right stack */}
            <div className="md:col-span-5 flex flex-col gap-4 md:gap-5">
              {/* Top right — Warm Terracotta */}
              <div className="group cursor-pointer flex-1">
                <div className="relative aspect-[4/3] md:aspect-auto md:h-full overflow-hidden">
                  <Image
                    src={projects[1].image}
                    alt={projects[1].title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 42vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <p className="text-[11px] font-semibold tracking-[0.1em] uppercase text-white/70">
                      {projects[1].subtitle}
                    </p>
                    <p className="text-xl font-medium text-white mt-1">
                      {projects[1].title}
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom right — Dark Marble */}
              <div className="group cursor-pointer flex-1">
                <div className="relative aspect-[4/3] md:aspect-auto md:h-full overflow-hidden">
                  <Image
                    src={projects[2].image}
                    alt={projects[2].title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 42vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <p className="text-[11px] font-semibold tracking-[0.1em] uppercase text-white/70">
                      {projects[2].subtitle}
                    </p>
                    <p className="text-xl font-medium text-white mt-1">
                      {projects[2].title}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom row */}
            <div className="md:col-span-5 group cursor-pointer">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={projects[3].image}
                  alt={projects[3].title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 42vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <p className="text-[11px] font-semibold tracking-[0.1em] uppercase text-white/70">
                    {projects[3].subtitle}
                  </p>
                  <p className="text-xl font-medium text-white mt-1">
                    {projects[3].title}
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom right — Detail shot */}
            <div className="md:col-span-7 group cursor-pointer">
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src="/images/projects/b/marble-detail.jpg"
                  alt="Detalle mármol calacatta y herrajes de cobre"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 58vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <p className="text-[11px] font-semibold tracking-[0.1em] uppercase text-white/70">
                    La artesanía está en los detalles
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ──── BRANDS ──── */}
      <section className="py-20 md:py-24 border-y border-ns-stone">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <p className="text-[11px] font-semibold tracking-[0.1em] uppercase text-ns-taupe text-center mb-12">
            Trabajamos con las mejores firmas
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6 md:gap-x-20">
            {brands.map((brand) => (
              <span
                key={brand}
                className="text-xl md:text-2xl font-light text-ns-stone hover:text-ns-black transition-colors duration-300 cursor-default"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ──── CONTACT ──── */}
      <section
        id="contacto"
        className="relative py-24 md:py-32 bg-ns-black text-ns-paper overflow-hidden"
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
            <div>
              <p className="text-[11px] font-semibold tracking-[0.1em] uppercase text-ns-stone mb-6">
                Contacto
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-medium leading-[1.15]">
                Hablemos de tu
                <br />
                próximo proyecto
              </h2>
              <p className="text-base text-ns-stone mt-6 leading-[1.7] max-w-md">
                Cuéntanos tu proyecto y te preparamos una propuesta sin
                compromiso. Trabajamos con promotoras, constructoras y
                particulares en toda la Costa del Sol.
              </p>
              <div className="mt-10 space-y-4">
                <a
                  href="mailto:contact@nosh.studio"
                  className="flex items-center gap-3 text-ns-stone hover:text-white transition-colors"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    className="text-ns-taupe"
                  >
                    <path
                      d="M3 5l7 5 7-5M3 5v10h14V5H3z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="text-sm">contact@nosh.studio</span>
                </a>
                <a
                  href="tel:+34649623080"
                  className="flex items-center gap-3 text-ns-stone hover:text-white transition-colors"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    className="text-ns-taupe"
                  >
                    <path
                      d="M5 3h3l2 4-2.5 1.5A8.5 8.5 0 0011.5 12.5L13 10l4 2v3a2 2 0 01-2 2A14 14 0 013 5a2 2 0 012-2z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="text-sm">+34 649 623 080</span>
                </a>
                <div className="flex items-center gap-3 text-ns-stone">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    className="text-ns-taupe"
                  >
                    <path
                      d="M10 2a6 6 0 016 6c0 4-6 10-6 10S4 12 4 8a6 6 0 016-6z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinejoin="round"
                    />
                    <circle
                      cx="10"
                      cy="8"
                      r="2"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                  </svg>
                  <span className="text-sm">
                    Carr. Istán KM1, CC Le Village
                    <br />
                    29602 Marbella, Málaga
                  </span>
                </div>
              </div>
            </div>

            {/* Contact form */}
            <div className="flex flex-col justify-center">
              <form className="space-y-6">
                <div>
                  <label className="text-[11px] font-semibold tracking-[0.1em] uppercase text-ns-mineral block mb-2">
                    Nombre
                  </label>
                  <input
                    type="text"
                    className="w-full bg-transparent border-b border-ns-mineral/30 py-3 text-sm text-white placeholder-ns-mineral focus:border-ns-stone focus:outline-none transition-colors"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label className="text-[11px] font-semibold tracking-[0.1em] uppercase text-ns-mineral block mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full bg-transparent border-b border-ns-mineral/30 py-3 text-sm text-white placeholder-ns-mineral focus:border-ns-stone focus:outline-none transition-colors"
                    placeholder="tu@email.com"
                  />
                </div>
                <div>
                  <label className="text-[11px] font-semibold tracking-[0.1em] uppercase text-ns-mineral block mb-2">
                    Mensaje
                  </label>
                  <textarea
                    rows={4}
                    className="w-full bg-transparent border-b border-ns-mineral/30 py-3 text-sm text-white placeholder-ns-mineral focus:border-ns-stone focus:outline-none transition-colors resize-none"
                    placeholder="Cuéntanos sobre tu proyecto..."
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center gap-3 text-[11px] font-semibold tracking-[0.1em] uppercase border border-ns-mineral/40 px-8 py-4 hover:bg-ns-paper hover:text-ns-black transition-all duration-300 mt-4"
                >
                  Enviar mensaje
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M3 8h10M9 4l4 4-4 4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ──── FOOTER ──── */}
      <footer className="bg-ns-black border-t border-ns-mineral/20 py-8">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-6">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logos/NOSH_Logo_Wordmark_white.svg"
              alt="NOSH STUDIO"
              className="h-4 w-auto"
            />
            <span className="text-xs font-light tracking-[0.02em] text-ns-stone italic">
              Crafted with quiet precision.
            </span>
          </div>
          <p className="text-[11px] text-ns-mineral">
            &copy; {new Date().getFullYear()} Noshorning Studio S.L. · Marbella
          </p>
        </div>
      </footer>
    </main>
  );
}
