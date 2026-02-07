import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function ProductsSection() {
  const products = [
    {
      category: 'Phone Cases',
      items: ['Silicone Cases', 'Hard Cases', 'Designer Cases', 'Flip Covers'],
      badge: 'Popular'
    },
    {
      category: 'Screen Protection',
      items: ['Tempered Glass', '11D Glass', 'Privacy Glass', 'Matte Protectors'],
      badge: 'Essential'
    },
    {
      category: 'Charging Solutions',
      items: ['Fast Chargers', 'USB Cables', 'Power Banks', 'Wireless Chargers'],
      badge: 'New'
    },
    {
      category: 'Audio Accessories',
      items: ['Earphones', 'Bluetooth Headsets', 'Speakers', 'AirPods Cases'],
      badge: 'Trending'
    },
    {
      category: 'Mobile Holders',
      items: ['Car Holders', 'Desk Stands', 'Ring Holders', 'Bike Mounts'],
      badge: 'Useful'
    },
    {
      category: 'Memory & Storage',
      items: ['Memory Cards', 'OTG Drives', 'Card Readers', 'Storage Adapters'],
      badge: 'Tech'
    }
  ];

  return (
    <section id="products" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Quality Products
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Mobile Accessories
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Browse our extensive collection of mobile accessories. All products are quality-checked and available at competitive prices.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <Card
              key={index}
              className="border-2 border-gray-100 hover:border-teal-300 hover:shadow-xl transition-all duration-300 group overflow-hidden"
            >
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-teal-700 transition-colors">
                    {product.category}
                  </h3>
                  <Badge
                    variant="secondary"
                    className="bg-teal-100 text-teal-700 hover:bg-teal-200"
                  >
                    {product.badge}
                  </Badge>
                </div>
                <ul className="space-y-2">
                  {product.items.map((item, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <div className="w-1.5 h-1.5 bg-teal-500 rounded-full mr-3" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-gray-700 font-medium">
            <span className="text-red-600 font-bold">Note:</span> We also buy and sell used mobile phones at the best rates!
          </p>
        </div>
      </div>
    </section>
  );
}
