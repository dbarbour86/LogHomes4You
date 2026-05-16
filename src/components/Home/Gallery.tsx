import { motion } from "motion/react";

const galleryImages = [
  { url: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&q=80&w=1200", title: "Living Room Heritage", colSpan: "lg:col-span-2", rowSpan: "lg:row-span-2" },
  { url: "https://images.unsplash.com/photo-1464146072230-91cabc968266?auto=format&fit=crop&q=80&w=1200", title: "Alpine Master Suite", colSpan: "lg:col-span-1", rowSpan: "lg:row-span-1" },
  { url: "https://images.unsplash.com/photo-1542718610-a1d656d1884c?auto=format&fit=crop&q=80&w=1200", title: "Custom Stone Fireplace", colSpan: "lg:col-span-1", rowSpan: "lg:row-span-1" },
  { url: "https://images.unsplash.com/photo-1549144511-f099e773c147?auto=format&fit=crop&q=80&w=1200", title: "Twilight Exterior", colSpan: "lg:col-span-1", rowSpan: "lg:row-span-2" },
  { url: "https://images.unsplash.com/photo-1493606394233-5a0dc5c697c1?auto=format&fit=crop&q=80&w=1200", title: "Modern Cabin Kitchen", colSpan: "lg:col-span-1", rowSpan: "lg:row-span-1" },
];

export default function Gallery() {
  return (
    <section className="py-24 bg-charcoal" id="gallery">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 text-center lg:text-left flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <span className="text-amber text-xs uppercase tracking-[0.4em] font-medium mb-4 block">PORTFOLIO OF ARTISTRY</span>
            <h2 className="text-4xl md:text-5xl font-bold text-cream">
              Cinematic <span className="italic font-normal">Interiors &</span> Exteriors
            </h2>
          </div>
          <p className="text-cream/50 text-sm max-w-sm font-light leading-relaxed">
            Every project is a study in texture, light, and mass. Explore the details that define the Kings Cabins lifestyle.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-[250px] gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className={`group relative overflow-hidden rounded-sm ${image.colSpan} ${image.rowSpan}`}
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-charcoal/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center p-6 text-center">
                <span className="text-amber text-[10px] uppercase tracking-widest mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">VIEW PROJECT</span>
                <h3 className="text-xl font-serif text-cream transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">{image.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
