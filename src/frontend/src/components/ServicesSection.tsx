import { Card, CardContent } from '@/components/ui/card';
import { Smartphone, Battery, Shield, Wrench, RefreshCw, ShoppingBag } from 'lucide-react';

export default function ServicesSection() {
  const services = [
    {
      icon: RefreshCw,
      title: 'Mobile Recharge',
      description: 'Quick and easy recharge for all networks. Instant processing and best rates.'
    },
    {
      icon: ShoppingBag,
      title: 'Mobile Accessories',
      description: 'Wide range of quality accessories including cases, chargers, earphones, and more.'
    },
    {
      icon: Shield,
      title: 'Screen Guards',
      description: 'Premium tempered glass and screen protectors for all mobile models.'
    },
    {
      icon: Battery,
      title: 'Chargers & Cables',
      description: 'Original and compatible chargers, cables, and power banks for all devices.'
    },
    {
      icon: Wrench,
      title: 'Mobile Repair',
      description: 'Expert repair services for all mobile issues. Fast turnaround and warranty.'
    },
    {
      icon: Smartphone,
      title: 'Used Phones',
      description: 'Buy and sell used mobile phones. Best prices and quality assured devices.'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-white to-teal-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            What We Offer
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Complete mobile solutions under one roof. Quality products and expert services you can trust.
          </p>
        </div>

        {/* Services Icons Image */}
        <div className="mb-12 max-w-4xl mx-auto">
          <img
            src="/assets/generated/iqra-services-icons.dim_1200x400.png"
            alt="Our Services"
            className="w-full h-auto rounded-2xl shadow-lg"
          />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="border-2 border-teal-100 hover:border-teal-300 hover:shadow-xl transition-all duration-300 group"
              >
                <CardContent className="p-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-teal-500 to-emerald-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
