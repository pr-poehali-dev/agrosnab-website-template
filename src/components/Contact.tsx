import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Contact = () => {
  const contacts = [
    {
      icon: "Phone",
      title: "Телефон",
      value: "+7 (800) 123-45-67",
      description: "Бесплатный звонок по России",
    },
    {
      icon: "Mail",
      title: "Email",
      value: "info@agrosnab.ru",
      description: "Ответим в течение часа",
    },
    {
      icon: "MapPin",
      title: "Адрес",
      value: "г. Краснодар, ул. Красная, 123",
      description: "Главный офис и склад",
    },
    {
      icon: "Clock",
      title: "Режим работы",
      value: "Пн-Пт: 8:00 - 18:00",
      description: "Сб-Вс: 9:00 - 15:00",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Icon name="MessageSquare" className="h-4 w-4 mr-2" />
            Контакты
          </div>
          <h2 className="text-4xl lg:text-5xl font-montserrat font-bold text-gray-900 mb-6">
            Свяжитесь с нами
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Готовы ответить на ваши вопросы и помочь выбрать оптимальные решения
            для вашего хозяйства
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {contacts.map((contact, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 text-center hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:-translate-y-1"
            >
              <div className="bg-primary/10 group-hover:bg-primary w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 transition-colors">
                <Icon
                  name={contact.icon}
                  className="h-10 w-10 text-primary group-hover:text-white transition-colors"
                />
              </div>
              <h3 className="font-montserrat font-bold text-gray-900 mb-3 text-lg">
                {contact.title}
              </h3>
              <p className="text-primary font-bold mb-2 text-lg">
                {contact.value}
              </p>
              <p className="text-sm text-gray-600">{contact.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-primary-50 to-green-100 rounded-3xl p-12 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-40 h-40 bg-primary/5 rounded-full -translate-y-20 translate-x-20"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary/5 rounded-full translate-y-16 -translate-x-16"></div>
          <div className="relative z-10">
            <h3 className="text-3xl lg:text-4xl font-montserrat font-bold text-gray-900 mb-6">
              Нужна консультация?
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Оставьте заявку, и наши специалисты свяжутся с вами в течение 15
              минут для бесплатной консультации по подбору товаров
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary-600 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all"
              >
                <Icon name="Phone" className="h-5 w-5 mr-2" />
                Заказать звонок
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 text-lg font-semibold"
              >
                <Icon name="MessageCircle" className="h-5 w-5 mr-2" />
                Написать в WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
