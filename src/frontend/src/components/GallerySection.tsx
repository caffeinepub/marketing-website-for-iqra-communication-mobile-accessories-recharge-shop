import { Card } from '@/components/ui/card';

export default function GallerySection() {
  const galleryImages = [
    {
      src: '/assets/generated/iqra-communication-logo.dim_512x512.png',
      alt: 'IQRA COMMUNICATION Logo',
      title: 'Our Brand'
    },
    {
      src: '/assets/generated/iqra-communication-hero.dim_1600x600.png',
      alt: 'Mobile Accessories Collection',
      title: 'Product Range'
    },
    {
      src: '/assets/generated/iqra-services-icons.dim_1200x400.png',
      alt: 'Our Services',
      title: 'Service Icons'
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-gradient-to-b from-teal-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Visual Showcase
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Gallery
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Take a look at our brand and product offerings
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <Card
              key={index}
              className="overflow-hidden border-2 border-gray-100 hover:border-teal-300 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="aspect-video relative overflow-hidden bg-gradient-to-br from-teal-50 to-emerald-50">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4 bg-white">
                <h3 className="text-lg font-semibold text-gray-900 text-center">
                  {image.title}
                </h3>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
