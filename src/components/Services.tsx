import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Services = () => {
  const services = [
    {
      icon: "Wheat",
      title: "Семена",
      description:
        "Высококачественные семена зерновых, овощных и технических культур от ведущих селекционных центров.",
      features: [
        "Высокая всхожесость",
        "Устойчивость к болезням",
        "Адаптация к климату",
      ],
    },
    {
      icon: "Droplets",
      title: "Удобрения",
      description:
        "Минеральные и органические удобрения для повышения урожайности и улучшения почвы.",
      features: ["NPK комплексы", "Микроэлементы", "Органика"],
    },
    {
      icon: "Shield",
      title: "Средства защиты",
      description:
        "Современные препараты для защиты растений от вредителей, болезней и сорняков.",
      features: ["Инсектициды", "Фунгициды", "Гербициды"],
    },
    {
      icon: "Wrench",
      title: "Сельхозтехника",
      description:
        "Широкий ассортимент техники и оборудования для механизации сельскохозяйственных работ.",
      features: ["Тракторы", "Комбайны", "Навесное оборудование"],
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-montserrat font-bold text-gray-800 mb-4">
            Наши товары и услуги
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Предлагаем полный спектр товаров для успешного ведения сельского
            хозяйства
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <CardContent className="p-6">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <Icon name={service.icon} className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-montserrat font-semibold text-gray-800 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-1">
                  {service.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center text-sm text-gray-600"
                    >
                      <Icon
                        name="Check"
                        className="h-4 w-4 text-primary mr-2 flex-shrink-0"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
