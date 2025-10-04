import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const bracelets = [
    {
      id: 1,
      name: 'Радуга',
      price: '299',
      image: '/img/e7cbac7e-e223-4832-9196-c8f2945059a7.jpg',
      description: 'Яркий браслет из разноцветных резинок'
    },
    {
      id: 2,
      name: 'Сердечки',
      price: '399',
      image: '/img/cb2d1feb-5e8c-405b-9912-278c9feebd1f.jpg',
      description: 'Романтичный браслет с узором сердечек'
    },
    {
      id: 3,
      name: 'Звездочка',
      price: '349',
      image: '/img/d78a9352-c269-43dc-bd59-56a0aed4cdd4.jpg',
      description: 'Стильный браслет со звездным плетением'
    }
  ];

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted">
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              BayBrasletiki
            </h1>
            <div className="hidden md:flex gap-8">
              {['home', 'catalog', 'about', 'delivery', 'contacts'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-sm transition-colors hover:text-primary ${
                    activeSection === section ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  {section === 'home' && 'Главная'}
                  {section === 'catalog' && 'Каталог'}
                  {section === 'about' && 'О бренде'}
                  {section === 'delivery' && 'Доставка'}
                  {section === 'contacts' && 'Контакты'}
                </button>
              ))}
            </div>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Icon name="Menu" size={24} />
            </Button>
          </div>
        </div>
      </nav>

      <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-4">
        <div className="container mx-auto text-center animate-fade-in">
          <h2 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-float">
            Яркие браслеты
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Плетеные браслеты из резинок для самых креативных!
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-primary-foreground"
            onClick={() => scrollToSection('catalog')}
          >
            Смотреть коллекцию
            <Icon name="ArrowRight" size={20} className="ml-2" />
          </Button>
        </div>
      </section>

      <section id="catalog" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold text-center mb-4">Наша коллекция</h2>
          <p className="text-center text-muted-foreground mb-12">Каждый браслет — произведение искусства</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {bracelets.map((bracelet, index) => (
              <Card
                key={bracelet.id}
                className="group overflow-hidden border-border bg-card hover:border-primary transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={bracelet.image}
                    alt={bracelet.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{bracelet.name}</h3>
                  <p className="text-muted-foreground mb-4">{bracelet.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-primary">{bracelet.price} ₽</span>
                    <Button className="bg-gradient-to-r from-primary to-secondary text-primary-foreground">
                      Купить
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-5xl font-bold mb-6">О бренде</h2>
          <p className="text-xl text-muted-foreground leading-relaxed mb-8">
            BayBrasletiki — это яркие и стильные браслеты из резинок, 
            сплетенные вручную с любовью. Каждый браслет уникален и создан 
            для того, чтобы добавить красок в твой образ!
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                <Icon name="Sparkles" size={32} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Уникальный дизайн</h3>
              <p className="text-muted-foreground">Каждое изделие создается вручную</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center mb-4">
                <Icon name="Gem" size={32} className="text-secondary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Яркие цвета</h3>
              <p className="text-muted-foreground">Огромный выбор расцветок</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mb-4">
                <Icon name="Heart" size={32} className="text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-2">С любовью</h3>
              <p className="text-muted-foreground">Каждая деталь продумана</p>
            </div>
          </div>
        </div>
      </section>

      <section id="delivery" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-5xl font-bold text-center mb-12">Доставка</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border-border bg-card">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Icon name="Truck" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">По России</h3>
                    <p className="text-muted-foreground">
                      Бесплатная доставка при заказе от 1 000 ₽. 
                      Стандартная доставка 3-5 дней — 200 ₽
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border-border bg-card">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                    <Icon name="Package" size={24} className="text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Упаковка</h3>
                    <p className="text-muted-foreground">
                      Каждый браслет упаковывается в яркую подарочную упаковку
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border bg-card">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Icon name="CreditCard" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Оплата</h3>
                    <p className="text-muted-foreground">
                      Принимаем карты, электронные кошельки, 
                      оплату при получении
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="text-5xl font-bold mb-6">Контакты</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Мы всегда на связи и готовы ответить на ваши вопросы
          </p>
          <div className="space-y-4">
            <div className="flex items-center justify-center gap-3">
              <Icon name="Mail" size={24} className="text-primary" />
              <a href="mailto:info@baybrasletiki.ru" className="text-lg hover:text-primary transition-colors">
                info@baybrasletiki.ru
              </a>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Icon name="Phone" size={24} className="text-primary" />
              <a href="tel:+79991234567" className="text-lg hover:text-primary transition-colors">
                +7 (999) 123-45-67
              </a>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Icon name="MapPin" size={24} className="text-primary" />
              <span className="text-lg">Москва, ул. Звездная, 1</span>
            </div>
          </div>
          <div className="flex justify-center gap-4 mt-8">
            <Button variant="outline" size="icon" className="rounded-full">
              <Icon name="Instagram" size={20} />
            </Button>
            <Button variant="outline" size="icon" className="rounded-full">
              <Icon name="Send" size={20} />
            </Button>
            <Button variant="outline" size="icon" className="rounded-full">
              <Icon name="Facebook" size={20} />
            </Button>
          </div>
        </div>
      </section>

      <footer className="py-8 border-t border-border">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>© 2024 BayBrasletiki. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;