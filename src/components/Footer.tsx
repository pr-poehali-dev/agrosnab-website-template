import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <Icon name="Wheat" className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-montserrat font-bold">
                АгроСнаб
              </span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              Надежный поставщик сельскохозяйственной продукции с 15-летним
              опытом работы на рынке.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                <Icon name="Facebook" className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                <Icon name="Instagram" className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                <Icon name="Youtube" className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-montserrat font-semibold mb-4">
              Быстрые ссылки
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/about"
                  className="text-gray-300 hover:text-primary transition-colors text-sm"
                >
                  О компании
                </Link>
              </li>
              <li>
                <Link
                  to="/catalog"
                  className="text-gray-300 hover:text-primary transition-colors text-sm"
                >
                  Каталог товаров
                </Link>
              </li>
              <li>
                <Link
                  to="/delivery"
                  className="text-gray-300 hover:text-primary transition-colors text-sm"
                >
                  Доставка
                </Link>
              </li>
              <li>
                <Link
                  to="/reviews"
                  className="text-gray-300 hover:text-primary transition-colors text-sm"
                >
                  Отзывы
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-montserrat font-semibold mb-4">Категории</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-primary transition-colors text-sm"
                >
                  Семена
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-primary transition-colors text-sm"
                >
                  Удобрения
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-primary transition-colors text-sm"
                >
                  Средства защиты
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-primary transition-colors text-sm"
                >
                  Сельхозтехника
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-montserrat font-semibold mb-4">Контакты</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Icon name="Phone" className="h-4 w-4 text-primary" />
                <span className="text-gray-300 text-sm">
                  +7 (800) 123-45-67
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Mail" className="h-4 w-4 text-primary" />
                <span className="text-gray-300 text-sm">info@agrosnab.ru</span>
              </div>
              <div className="flex items-start space-x-2">
                <Icon name="MapPin" className="h-4 w-4 text-primary mt-0.5" />
                <span className="text-gray-300 text-sm">
                  г. Краснодар, ул. Красная, 123
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Clock" className="h-4 w-4 text-primary" />
                <span className="text-gray-300 text-sm">Пн-Пт: 8:00-18:00</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 АгроСнаб. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
