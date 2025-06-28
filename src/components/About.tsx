import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const About = () => {
  const stats = [
    { number: "15+", label: "Лет на рынке", icon: "Calendar" },
    { number: "5000+", label: "Довольных клиентов", icon: "Users" },
    { number: "50+", label: "Регионов поставок", icon: "MapPin" },
    { number: "24/7", label: "Техподдержка", icon: "Headphones" },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-montserrat font-bold text-gray-800 mb-6">
              О компании АгроСнаб
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Мы являемся ведущим поставщиком сельскохозяйственной продукции в
              России. Наша миссия — обеспечить аграриев качественными товарами
              по доступным ценам и помочь повысить эффективность их
              деятельности.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Работаем напрямую с производителями, что позволяет предлагать
              лучшие цены и гарантировать высокое качество продукции. Наша
              команда экспертов всегда готова предоставить профессиональные
              консультации.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="p-4">
                    <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Icon name={stat.icon} className="h-6 w-6 text-primary" />
                    </div>
                    <div className="text-2xl font-montserrat font-bold text-primary mb-1">
                      {stat.number}
                    </div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=600&h=400&fit=crop&crop=center"
              alt="Современное сельское хозяйство"
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
            <div className="absolute -bottom-6 -left-6 bg-primary text-white p-6 rounded-lg shadow-lg">
              <div className="text-2xl font-montserrat font-bold">98%</div>
              <div className="text-sm">Клиенты рекомендуют нас</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
