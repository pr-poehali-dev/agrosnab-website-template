import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-green-50 via-emerald-50 to-green-100 py-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-20 h-20 bg-primary rounded-full"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-primary rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-primary rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6 animate-fade-in">
              <Icon name="Sparkles" className="h-4 w-4 mr-2" />
              Надежный поставщик с 2008 года
            </div>
            <h1 className="text-5xl lg:text-6xl font-montserrat font-bold text-gray-900 mb-6 leading-tight">
              Агротовары для
              <span className="text-primary block">успешного урожая</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl">
              Полный спектр качественных агротоваров: семена, удобрения,
              средства защиты растений и сельхозтехника. Прямые поставки от
              производителей по лучшим ценам.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary-600 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all"
              >
                <Icon name="ShoppingCart" className="h-5 w-5 mr-2" />
                Каталог товаров
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 text-lg font-semibold"
              >
                <Icon name="Phone" className="h-5 w-5 mr-2" />
                Консультация
              </Button>
            </div>

            {/* Updated Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="flex items-center space-x-4 bg-white/70 backdrop-blur-sm p-4 rounded-lg shadow-sm">
                <div className="bg-primary/15 p-3 rounded-full">
                  <Icon name="Truck" className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg">
                    Доставка по РФ
                  </h3>
                  <p className="text-sm text-gray-600">От 1 дня</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 bg-white/70 backdrop-blur-sm p-4 rounded-lg shadow-sm">
                <div className="bg-primary/15 p-3 rounded-full">
                  <Icon name="Award" className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg">
                    Качество
                  </h3>
                  <p className="text-sm text-gray-600">100% гарантия</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 bg-white/70 backdrop-blur-sm p-4 rounded-lg shadow-sm">
                <div className="bg-primary/15 p-3 rounded-full">
                  <Icon name="Headphones" className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg">
                    Поддержка 24/7
                  </h3>
                  <p className="text-sm text-gray-600">Всегда на связи</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 relative">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=700&h=500&fit=crop&crop=center"
                alt="Современное сельское хозяйство"
                className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-xl shadow-xl border">
                <div className="flex items-center space-x-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Icon name="TrendingUp" className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">+35%</div>
                    <div className="text-sm text-gray-600">
                      Рост урожайности
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
