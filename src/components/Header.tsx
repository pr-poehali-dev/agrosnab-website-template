import { useState } from "react";
import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <Icon name="Wheat" className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-montserrat font-bold text-gray-800">
              АгроСнаб
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-gray-700 hover:text-primary transition-colors"
            >
              Главная
            </Link>
            <Link
              to="/about"
              className="text-gray-700 hover:text-primary transition-colors"
            >
              О компании
            </Link>
            <Link
              to="/catalog"
              className="text-gray-700 hover:text-primary transition-colors"
            >
              Каталог товаров
            </Link>
            <Link
              to="/delivery"
              className="text-gray-700 hover:text-primary transition-colors"
            >
              Доставка
            </Link>
            <Link
              to="/contacts"
              className="text-gray-700 hover:text-primary transition-colors"
            >
              Контакты
            </Link>
            <Link
              to="/reviews"
              className="text-gray-700 hover:text-primary transition-colors"
            >
              Отзывы
            </Link>
          </nav>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-gray-700">
              <Icon name="Phone" className="h-4 w-4" />
              <span className="text-sm font-semibold">+7 (800) 123-45-67</span>
            </div>
            <Button size="sm" className="bg-primary hover:bg-primary-600">
              Заказать звонок
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-md hover:bg-gray-100"
          >
            <Icon name={isMenuOpen ? "X" : "Menu"} className="h-6 w-6" />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-2">
              <Link to="/" className="py-2 text-gray-700 hover:text-primary">
                Главная
              </Link>
              <Link
                to="/about"
                className="py-2 text-gray-700 hover:text-primary"
              >
                О компании
              </Link>
              <Link
                to="/catalog"
                className="py-2 text-gray-700 hover:text-primary"
              >
                Каталог товаров
              </Link>
              <Link
                to="/delivery"
                className="py-2 text-gray-700 hover:text-primary"
              >
                Доставка
              </Link>
              <Link
                to="/contacts"
                className="py-2 text-gray-700 hover:text-primary"
              >
                Контакты
              </Link>
              <Link
                to="/reviews"
                className="py-2 text-gray-700 hover:text-primary"
              >
                Отзывы
              </Link>
              <div className="pt-2 border-t">
                <div className="flex items-center space-x-2 text-gray-700 py-2">
                  <Icon name="Phone" className="h-4 w-4" />
                  <span className="text-sm font-semibold">
                    +7 (800) 123-45-67
                  </span>
                </div>
                <Button
                  size="sm"
                  className="w-full bg-primary hover:bg-primary-600"
                >
                  Заказать звонок
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
