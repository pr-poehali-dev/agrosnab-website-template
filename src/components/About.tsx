import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const About = () => {
  const stats = [
    { number: "15+", label: "Лет на рынке", icon: "Calendar" },
    { number: "5000+", label: "Довольных клиентов", icon: "Users" },
    { number: "50+", label: "Регионов поставок", icon: "MapPin" },
    { number: "24/7", label: "Техподдержка", icon: "Headphones" },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-green-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Icon name="Building" className="h-4 w-4 mr-2" />О компании
            </div>
            <h2 className="text-4xl lg:text-5xl font-montserrat font-bold text-gray-900 mb-6">
              АгроСнаб — ваш надежный партнер
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Более 15 лет мы являемся ведущим поставщиком сельскохозяйственной
              продукции в России. Наша миссия — обеспечить аграриев
              качественными товарами по честным ценам.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Работаем напрямую с производителями, что позволяет предлагать
              конкурентные цены и гарантировать высочайшее качество продукции.
              Наша команда экспертов всегда готова предоставить профессиональные
              консультации.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-8">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow"
                >
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={stat.icon} className="h-8 w-8 text-primary" />
                  </div>
                  <div className="text-3xl font-montserrat font-bold text-primary mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600 font-semibold">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <Button
              size="lg"
              className="bg-primary hover:bg-primary-600 text-white px-8 py-4 text-lg font-semibold shadow-lg"
            >
              <Icon name="ArrowRight" className="h-5 w-5 mr-2" />
              Узнать больше
            </Button>
          </div>

          <div className="relative order-1 lg:order-2">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=600&h=500&fit=crop&crop=center"
                alt="Современное сельское хозяйство"
                className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-8 rounded-xl shadow-2xl border">
                <div className="text-center">
                  <div className="text-4xl font-montserrat font-bold text-primary mb-2">
                    98%
                  </div>
                  <div className="text-sm text-gray-600 font-semibold">
                    Довольных клиентов
                  </div>
                  <div className="flex justify-center mt-2">
                    {[...Array(5)].map((_, i) => (
                      <Icon
                        key={i}
                        name="Star"
                        className="h-4 w-4 text-yellow-400 fill-current"
                      />
                    ))}
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

export default About;
