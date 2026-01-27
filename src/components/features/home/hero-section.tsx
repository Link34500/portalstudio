import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black pt-16">
      <div className="absolute inset-0 bg-linear-to-b from-white/5 via-transparent to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="text-center space-y-8">
          {/*Note : Mettre le logo ici */}
          <div className=""></div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl text-white max-w-4xl mx-auto leading-tight">
            Créez votre site web et transformez l’image de votre entreprise en
            Guyane
          </h1>

          <h2 className="text-lg sm:text-xl lg:text-2xl text-white/60 max-w-2xl mx-auto leading-relaxed">
            Agence de développement web en Guyane pour professionnels et
            commerces locaux
          </h2>

          <div className="pt-4">
            <button className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-black text-lg hover:bg-white/90 transition-all rounded-lg shadow-lg hover:shadow-xl">
              Demander un devis
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
