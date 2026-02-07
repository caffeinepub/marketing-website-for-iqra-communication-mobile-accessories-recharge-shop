import { Button } from '@/components/ui/button';
import { Phone } from 'lucide-react';

export default function HeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="hero" className="relative bg-gradient-to-br from-teal-600 via-emerald-600 to-teal-700 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>

      <div className="container mx-auto px-4 py-16 md:py-24 relative">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-white space-y-6">
            <div className="inline-block">
              <span className="bg-red-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                Trusted Mobile Solutions
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Welcome to<br />
              <span className="text-yellow-300">IQRA COMMUNICATION</span>
            </h1>
            <p className="text-xl text-teal-50 leading-relaxed">
              Your one-stop shop for mobile accessories, repairs, recharge services, and more. 
              Quality products and expert service you can trust.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button
                size="lg"
                onClick={scrollToContact}
                className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 shadow-lg"
              >
                <Phone className="w-5 h-5 mr-2" />
                Contact Us
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => {
                  const element = document.getElementById('services');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-white/10 hover:bg-white/20 text-white border-white/30 backdrop-blur-sm font-semibold px-8"
              >
                Our Services
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/assets/generated/iqra-communication-hero.dim_1600x600.png"
                alt="IQRA COMMUNICATION - Mobile Accessories & Services"
                className="w-full h-auto"
              />
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-6 max-w-xs">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-emerald-600 rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Available Now</p>
                  <p className="text-lg font-bold text-gray-900">Expert Service</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
