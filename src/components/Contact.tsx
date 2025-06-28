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
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-montserrat font-bold text-gray-800 mb-4">
            Свяжитесь с нами
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Готовы ответить на ваши вопросы и помочь выбрать оптимальные решения
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contacts.map((contact, index) => (
            <Card
              key={index}
              className="text-center hover:shadow-lg transition-shadow"
            >
              <CardContent className="p-6">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={contact.icon} className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-montserrat font-semibold text-gray-800 mb-2">
                  {contact.title}
                </h3>
                <p className="text-primary font-semibold mb-1">
                  {contact.value}
                </p>
                <p className="text-sm text-gray-600">{contact.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-primary-50 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-montserrat font-bold text-gray-800 mb-4">
            Нужна консультация?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Оставьте заявку, и наши специалисты свяжутся с вами в течение 15
            минут для бесплатной консультации по подбору товаров
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary-600 text-white px-8"
            >
              Заказать звонок
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-white"
            >
              Написать в WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
