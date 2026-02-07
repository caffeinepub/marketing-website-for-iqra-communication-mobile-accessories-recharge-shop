import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Phone, MapPin, Clock } from 'lucide-react';
import InquiryForm from './InquiryForm';

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Contact Us
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Visit our store or reach out to us. We're here to help with all your mobile needs.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="border-2 border-teal-100">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-teal-700">
                  <Phone className="w-6 h-6" />
                  Phone Numbers
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <a
                  href="tel:9053030920"
                  className="flex items-center gap-3 p-4 bg-teal-50 rounded-lg hover:bg-teal-100 transition-colors group"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-emerald-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Primary Contact</p>
                    <p className="text-xl font-bold text-gray-900">9053030920</p>
                  </div>
                </a>
                <a
                  href="tel:7027835322"
                  className="flex items-center gap-3 p-4 bg-teal-50 rounded-lg hover:bg-teal-100 transition-colors group"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-emerald-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Secondary Contact</p>
                    <p className="text-xl font-bold text-gray-900">7027835322</p>
                  </div>
                </a>
              </CardContent>
            </Card>

            <Card className="border-2 border-teal-100">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-teal-700">
                  <MapPin className="w-6 h-6" />
                  Location
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  Visit us at our store for the best mobile accessories and services in town.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-teal-100">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-teal-700">
                  <Clock className="w-6 h-6" />
                  Business Hours
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-gray-700">
                  <div className="flex justify-between">
                    <span className="font-medium">Monday - Saturday:</span>
                    <span>9:00 AM - 9:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Sunday:</span>
                    <span>10:00 AM - 8:00 PM</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Inquiry Form */}
          <div>
            <InquiryForm />
          </div>
        </div>
      </div>
    </section>
  );
}
