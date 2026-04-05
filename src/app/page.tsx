import Image from "next/image";
import Link from "next/link";

/* ───────────── DATA ───────────── */
const projects = [
  {
    id: "blue-petrol",
    title: "Villa Las Lomas",
    subtitle: "Cocina azul petróleo · Calacatta · Cobre",
    image: "/images/projects/b/frontal-island.jpg",
    aspect: "aspect-[4/3]",
  },
  {
    id: "warm-terracotta",
    title: "Villa Sierra Blanca",
    subtitle: "Madera natural · Mármol · Terracota",
    image: "/images/projects/a/hero-wide.jpg",
    aspect: "aspect-[16/10]",
  },
  {
    id: "dark-marble",
    title: "Villa La Zagaleta",
    subtitle: "Mármol negro · Tom Dixon · Latón",
    image: "/images/projects/d/tom-dixon-table.jpg",
    aspect: "aspect-[4/3]",
  },
  {
    id: "neutral-elegant",
    title: "Villa Nueva Andalucía",
    subtitle: "Roble claro · Calacatta · Minimalismo",
    image: "/images/projects/e/oval-table.jpg",
    aspect: "aspect-[4/3]",
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
    <main className="min-h-screen">
      {/* ──── NAV ──── */}
      <nav className="fixed top-0 left-0 right-0 z-50 mix-blend-difference">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-6 flex items-center justify-between">
          <Link href="/" className="text-white">
            <span className="font-serif text-xl tracking-wide">NOSH</span>
            <span className="font-sans text-[11px] tracking-widest-xl uppercase ml-2 opacity-70">
              Studio
            </span>
          </Link>
          <div className="flex items-center gap-8">
            <Link
              href="#portfolio"
              className="text-white font-sans text-[11px] tracking-widest-xl uppercase hover:opacity-70 transition-opacity hidden sm:block"
            >
              Portfolio
            </Link>
            <Link
              href="#contacto"
              className="text-white font-sans text-[11px] tracking-widest-xl uppercase hover:opacity-70 transition-opacity"
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
          alt="Cocina azul petróleo con isla de mármol calacatta — Nosh Studio"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-end pb-20 md:pb-28 px-6 md:px-12 max-w-[1400px] mx-auto">
          <p className="font-sans text-[11px] tracking-widest-xl uppercase text-white/70 mb-4">
            Carpintería & Cocinas a Medida
          </p>
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white leading-[1.1] max-w-2xl">
            Diseño que se
            <br />
            vive cada día
          </h1>
          <p className="font-sans text-sm md:text-base text-white/70 mt-6 max-w-md leading-relaxed">
            Fabricamos e instalamos cocinas y mobiliario a medida para las
            viviendas más exclusivas de la Costa del Sol.
          </p>
          <div className="mt-8">
            <Link
              href="#portfolio"
              className="inline-flex items-center gap-3 text-white font-sans text-[11px] tracking-widest-xl uppercase border border-white/30 px-6 py-3 hover:bg-white hover:text-warm-dark transition-all duration-300"
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
      <section className="bg-background py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
            <div>
              <p className="font-sans text-[11px] tracking-widest-xl uppercase text-warm-gold mb-6">
                Sobre Nosotros
              </p>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-warm-dark leading-[1.15]">
                Cada detalle importa
              </h2>
              <p className="font-sans text-base text-warm-dark/70 mt-6 leading-relaxed max-w-lg">
                En Nosh Studio diseñamos, fabricamos e instalamos cocinas y
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
                  <p className="font-serif text-3xl md:text-4xl text-warm-dark">
                    {stat.number}
                  </p>
                  <p className="font-sans text-[11px] tracking-widest-xl uppercase text-warm-gold mt-2">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ──── PORTFOLIO ──── */}
      <section id="portfolio" className="bg-background pb-24 md:pb-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="flex items-end justify-between mb-16">
            <div>
              <p className="font-sans text-[11px] tracking-widest-xl uppercase text-warm-gold mb-4">
                Portfolio
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-warm-dark">
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
                  <p className="font-sans text-[11px] tracking-widest-xl uppercase text-white/70">
                    {projects[0].subtitle}
                  </p>
                  <p className="font-serif text-xl text-white mt-1">
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
                    <p className="font-sans text-[11px] tracking-widest-xl uppercase text-white/70">
                      {projects[1].subtitle}
                    </p>
                    <p className="font-serif text-xl text-white mt-1">
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
                    <p className="font-sans text-[11px] tracking-widest-xl uppercase text-white/70">
                      {projects[2].subtitle}
                    </p>
                    <p className="font-serif text-xl text-white mt-1">
                      {projects[2].title}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom row — full width detail */}
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
                  <p className="font-sans text-[11px] tracking-widest-xl uppercase text-white/70">
                    {projects[3].subtitle}
                  </p>
                  <p className="font-serif text-xl text-white mt-1">
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
                  <p className="font-sans text-[11px] tracking-widest-xl uppercase text-white/70">
                    La artesanía está en los detalles
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ──── BRANDS ──── */}
      <section className="py-20 md:py-24 border-y border-warm-border">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <p className="font-sans text-[11px] tracking-widest-xl uppercase text-warm-gold text-center mb-12">
            Trabajamos con las mejores firmas
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6 md:gap-x-20">
            {brands.map((brand) => (
              <span
                key={brand}
                className="font-serif text-xl md:text-2xl text-warm-dark/30 hover:text-warm-dark transition-colors duration-300 cursor-default"
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
        className="relative py-24 md:py-32 bg-warm-dark text-white overflow-hidden"
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
            <div>
              <p className="font-sans text-[11px] tracking-widest-xl uppercase text-warm-gold-light mb-6">
                Contacto
              </p>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl leading-[1.15]">
                Hablemos de tu
                <br />
                próximo proyecto
              </h2>
              <p className="font-sans text-base text-white/60 mt-6 leading-relaxed max-w-md">
                Cuéntanos tu proyecto y te preparamos una propuesta sin
                compromiso. Trabajamos con promotoras, constructoras y
                particulares en toda la Costa del Sol.
              </p>
              <div className="mt-10 space-y-4">
                <a
                  href="mailto:info@noshstudio.es"
                  className="flex items-center gap-3 text-white/80 hover:text-white transition-colors group"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    className="text-warm-gold-light"
                  >
                    <path
                      d="M3 5l7 5 7-5M3 5v10h14V5H3z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="font-sans text-sm">info@noshstudio.es</span>
                </a>
                <a
                  href="tel:+34600000000"
                  className="flex items-center gap-3 text-white/80 hover:text-white transition-colors group"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    className="text-warm-gold-light"
                  >
                    <path
                      d="M5 3h3l2 4-2.5 1.5A8.5 8.5 0 0011.5 12.5L13 10l4 2v3a2 2 0 01-2 2A14 14 0 013 5a2 2 0 012-2z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="font-sans text-sm">+34 600 000 000</span>
                </a>
                <div className="flex items-center gap-3 text-white/80">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    className="text-warm-gold-light"
                  >
                    <path
                      d="M10 11a3 3 0 100-6 3 3 0 000 6zM10 11c-4 0-7 2-7 4v2h14v-2c0-2-3-4-7-4z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="font-sans text-sm">
                    Marbella, Costa del Sol
                  </span>
                </div>
              </div>
            </div>

            {/* Contact form */}
            <div className="flex flex-col justify-center">
              <form className="space-y-6">
                <div>
                  <label className="font-sans text-[11px] tracking-widest-xl uppercase text-white/50 block mb-2">
                    Nombre
                  </label>
                  <input
                    type="text"
                    className="w-full bg-transparent border-b border-white/20 py-3 font-sans text-sm text-white placeholder-white/30 focus:border-warm-gold-light focus:outline-none transition-colors"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label className="font-sans text-[11px] tracking-widest-xl uppercase text-white/50 block mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full bg-transparent border-b border-white/20 py-3 font-sans text-sm text-white placeholder-white/30 focus:border-warm-gold-light focus:outline-none transition-colors"
                    placeholder="tu@email.com"
                  />
                </div>
                <div>
                  <label className="font-sans text-[11px] tracking-widest-xl uppercase text-white/50 block mb-2">
                    Mensaje
                  </label>
                  <textarea
                    rows={4}
                    className="w-full bg-transparent border-b border-white/20 py-3 font-sans text-sm text-white placeholder-white/30 focus:border-warm-gold-light focus:outline-none transition-colors resize-none"
                    placeholder="Cuéntanos sobre tu proyecto..."
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center gap-3 font-sans text-[11px] tracking-widest-xl uppercase border border-white/30 px-8 py-4 hover:bg-white hover:text-warm-dark transition-all duration-300 mt-4"
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
      <footer className="bg-warm-dark border-t border-white/10 py-8">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center">
            <span className="font-serif text-lg tracking-wide text-white">
              NOSH
            </span>
            <span className="font-sans text-[10px] tracking-widest-xl uppercase ml-2 text-white/40">
              Studio
            </span>
          </div>
          <p className="font-sans text-[11px] text-white/40">
            &copy; {new Date().getFullYear()} Nosh Studio. Marbella, España.
          </p>
        </div>
      </footer>
    </main>
  );
}
