import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-primary-50 to-primary-100 py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl lg:text-5xl font-montserrat font-bold text-gray-800 mb-6 animate-fade-in">
              Качественные товары для сельского хозяйства
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Полный спектр агротоваров: семена, удобрения, средства защиты
              растений, сельхозтехника. Прямые поставки от производителей по
              выгодным ценам.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary-600 text-white px-8"
              >
                Посмотреть каталог
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-white"
              >
                Получить консультацию
              </Button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
              <div className="flex items-center space-x-3">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Icon name="Truck" className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">
                    Быстрая доставка
                  </h3>
                  <p className="text-sm text-gray-600">По всей России</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Icon name="Shield" className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">
                    Гарантия качества
                  </h3>
                  <p className="text-sm text-gray-600">Сертификаты</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Icon name="Users" className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">
                    Экспертная поддержка
                  </h3>
                  <p className="text-sm text-gray-600">24/7 консультации</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1">
            <img
              src="https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=600&h=400&fit=crop&crop=center"
              alt="Сельское хозяйство"
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
