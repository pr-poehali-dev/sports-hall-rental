import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar } from '@/components/ui/calendar';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [selectedSport, setSelectedSport] = useState<string>('all');
  const [activeSection, setActiveSection] = useState<string>('home');

  const sports = [
    { id: 'all', name: 'Все виды', icon: 'Grid3x3' },
    { id: 'basketball', name: 'Баскетбол', icon: 'CircleDot' },
    { id: 'volleyball', name: 'Волейбол', icon: 'Circle' },
    { id: 'football', name: 'Футбол', icon: 'CircleDot' },
    { id: 'badminton', name: 'Бадминтон', icon: 'Wind' },
  ];

  const halls = [
    {
      id: 1,
      name: 'Зал "Чемпион"',
      sport: 'basketball',
      price: 2500,
      image: 'https://cdn.poehali.dev/projects/0137c08a-bf64-4d48-84d0-9032cb1c996a/files/4af3e593-bf53-446b-9b13-0802674cab1f.jpg',
      capacity: 20,
      features: ['Раздевалки', 'Душевые', 'Парковка', 'Wi-Fi'],
    },
    {
      id: 2,
      name: 'Зал "Волна"',
      sport: 'volleyball',
      price: 2000,
      image: 'https://cdn.poehali.dev/projects/0137c08a-bf64-4d48-84d0-9032cb1c996a/files/6c3da556-ffee-4ef9-ab9a-40f88e56a055.jpg',
      capacity: 16,
      features: ['Раздевалки', 'Душевые', 'Кафе'],
    },
    {
      id: 3,
      name: 'Зал "Старт"',
      sport: 'football',
      price: 3000,
      image: 'https://cdn.poehali.dev/projects/0137c08a-bf64-4d48-84d0-9032cb1c996a/files/14442983-dce7-472c-9250-13ee17a114a9.jpg',
      capacity: 24,
      features: ['Раздевалки', 'Душевые', 'Парковка', 'Кафе', 'Wi-Fi'],
    },
  ];

  const trainers = [
    {
      id: 1,
      name: 'Дмитрий Соколов',
      sport: 'Футбол',
      experience: '12 лет',
      image: 'https://cdn.poehali.dev/projects/0137c08a-bf64-4d48-84d0-9032cb1c996a/files/1f8d9cc5-5010-48ba-a013-b5efd4ac3bff.jpg',
      description: 'Мастер спорта по футболу. Работал с профессиональными командами и детскими секциями.',
      achievements: ['КМС по футболу', 'Тренер года 2022', '50+ учеников'],
    },
    {
      id: 2,
      name: 'Андрей Волков',
      sport: 'Баскетбол',
      experience: '10 лет',
      image: 'https://cdn.poehali.dev/projects/0137c08a-bf64-4d48-84d0-9032cb1c996a/files/ab9591ad-cb7d-41da-bda0-100fdaa159e6.jpg',
      description: 'Профессиональный тренер по баскетболу. Специализация на технике броска и командной игре.',
      achievements: ['Мастер спорта', 'Сертификат ФИБА', 'Опыт в НБА академии'],
    },
    {
      id: 3,
      name: 'Елена Морозова',
      sport: 'Волейбол',
      experience: '8 лет',
      image: 'https://cdn.poehali.dev/projects/0137c08a-bf64-4d48-84d0-9032cb1c996a/files/dcda5367-089b-4400-b6ab-ba9337f851ba.jpg',
      description: 'Экс-игрок национальной сборной. Специализируется на подготовке команд к соревнованиям.',
      achievements: ['ЗМС по волейболу', 'Чемпион России', 'Тренер высшей категории'],
    },
  ];

  const reviews = [
    {
      id: 1,
      name: 'Алексей Иванов',
      avatar: 'AI',
      rating: 5,
      text: 'Отличные залы, всегда чистые и современные. Администраторы вежливые и быстро реагируют на запросы.',
      date: '15 декабря 2024',
    },
    {
      id: 2,
      name: 'Мария Петрова',
      avatar: 'МП',
      rating: 5,
      text: 'Удобная система бронирования через сайт. Цены адекватные, качество на высоте!',
      date: '10 декабря 2024',
    },
    {
      id: 3,
      name: 'Дмитрий Сидоров',
      avatar: 'ДС',
      rating: 4,
      text: 'Хорошее оборудование, удобное расположение. Рекомендую для корпоративных мероприятий.',
      date: '5 декабря 2024',
    },
  ];

  const filteredHalls = selectedSport === 'all' 
    ? halls 
    : halls.filter(hall => hall.sport === selectedSport);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-2">
              <img src="https://cdn.poehali.dev/files/logoza.ru.png" alt="Спортик" className="h-10 w-auto" />
              <span className="text-xl font-bold text-secondary">Спортик</span>
            </div>
            
            <nav className="hidden md:flex items-center gap-8">
              <button 
                onClick={() => scrollToSection('home')}
                className={`text-sm font-medium transition-colors hover:text-primary ${activeSection === 'home' ? 'text-primary' : 'text-foreground/80'}`}
              >
                Главная
              </button>
              <button 
                onClick={() => scrollToSection('catalog')}
                className={`text-sm font-medium transition-colors hover:text-primary ${activeSection === 'catalog' ? 'text-primary' : 'text-foreground/80'}`}
              >
                Каталог
              </button>
              <button 
                onClick={() => scrollToSection('trainers')}
                className={`text-sm font-medium transition-colors hover:text-primary ${activeSection === 'trainers' ? 'text-primary' : 'text-foreground/80'}`}
              >
                Тренеры
              </button>
              <button 
                onClick={() => scrollToSection('reviews')}
                className={`text-sm font-medium transition-colors hover:text-primary ${activeSection === 'reviews' ? 'text-primary' : 'text-foreground/80'}`}
              >
                Отзывы
              </button>
              <button 
                onClick={() => scrollToSection('contacts')}
                className={`text-sm font-medium transition-colors hover:text-primary ${activeSection === 'contacts' ? 'text-primary' : 'text-foreground/80'}`}
              >
                Контакты
              </button>
            </nav>

            <Button className="hidden md:flex">
              <Icon name="Phone" className="mr-2 h-4 w-4" />
              +7 (495) 123-45-67
            </Button>

            <button className="md:hidden">
              <Icon name="Menu" className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      <section id="home" className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
              Аренда спортивных залов
              <span className="block text-primary mt-2">для вашей игры</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 animate-fade-in">
              Профессиональные залы для баскетбола, волейбола, футбола и других видов спорта. 
              Удобное бронирование и доступные цены.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
              <Button size="lg" className="text-base" onClick={() => scrollToSection('catalog')}>
                <Icon name="Calendar" className="mr-2 h-5 w-5" />
                Забронировать зал
              </Button>
              <Button size="lg" variant="outline" className="text-base" onClick={() => scrollToSection('contacts')}>
                Связаться с нами
              </Button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-20 max-w-5xl mx-auto">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Icon name="MapPin" className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Удобное расположение</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Залы в разных районах города с удобным транспортным доступом
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Icon name="Clock" className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Гибкий график</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Работаем ежедневно с 7:00 до 23:00, бронирование онлайн 24/7
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Icon name="Shield" className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Качество и безопасность</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Современное оборудование, регулярная уборка, страхование
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="catalog" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Каталог залов</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Выберите зал по виду спорта и забронируйте удобное время
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {sports.map((sport) => (
              <Button
                key={sport.id}
                variant={selectedSport === sport.id ? 'default' : 'outline'}
                onClick={() => setSelectedSport(sport.id)}
                className="gap-2"
              >
                <Icon name={sport.icon as any} className="h-4 w-4" />
                {sport.name}
              </Button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {filteredHalls.map((hall) => (
              <Card key={hall.id} className="overflow-hidden hover:shadow-xl transition-shadow group">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={hall.image} 
                    alt={hall.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <Badge className="absolute top-4 right-4 bg-white/90 text-secondary hover:bg-white">
                    {hall.price} ₽/час
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    {hall.name}
                    <Icon name="Users" className="h-5 w-5 text-muted-foreground" />
                  </CardTitle>
                  <CardDescription>
                    Вместимость: до {hall.capacity} человек
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {hall.features.map((feature, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                  
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="w-full">
                        <Icon name="Calendar" className="mr-2 h-4 w-4" />
                        Забронировать
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-3xl">
                      <DialogHeader>
                        <DialogTitle>{hall.name}</DialogTitle>
                        <DialogDescription>
                          Выберите дату и время для бронирования
                        </DialogDescription>
                      </DialogHeader>
                      
                      <div className="grid md:grid-cols-2 gap-6 py-4">
                        <div>
                          <h3 className="font-semibold mb-4">Выберите дату</h3>
                          <Calendar
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                            className="rounded-md border"
                          />
                        </div>
                        
                        <div>
                          <h3 className="font-semibold mb-4">Доступное время</h3>
                          <div className="grid grid-cols-3 gap-2">
                            {['09:00', '10:00', '11:00', '12:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00'].map((time) => (
                              <Button key={time} variant="outline" size="sm" className="h-12">
                                {time}
                              </Button>
                            ))}
                          </div>
                          
                          <Separator className="my-6" />
                          
                          <div className="space-y-4">
                            <div className="flex justify-between text-sm">
                              <span className="text-muted-foreground">Стоимость (1 час)</span>
                              <span className="font-semibold">{hall.price} ₽</span>
                            </div>
                            <Button className="w-full" size="lg">
                              <Icon name="CreditCard" className="mr-2 h-4 w-4" />
                              Оплатить и забронировать
                            </Button>
                          </div>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="trainers" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Наши тренеры</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Профессиональные тренеры с многолетним опытом работы
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {trainers.map((trainer) => (
              <Card key={trainer.id} className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={trainer.image} 
                    alt={trainer.name}
                    className="w-full h-full object-cover"
                  />
                  <Badge className="absolute top-4 right-4 bg-primary/90">
                    {trainer.sport}
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    {trainer.name}
                  </CardTitle>
                  <CardDescription className="flex items-center gap-2">
                    <Icon name="Award" className="h-4 w-4" />
                    Опыт: {trainer.experience}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-4">
                    {trainer.description}
                  </p>
                  <div className="space-y-2">
                    <p className="text-xs font-semibold text-foreground">Достижения:</p>
                    <div className="flex flex-wrap gap-2">
                      {trainer.achievements.map((achievement, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {achievement}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <Button className="w-full mt-4" variant="outline">
                    <Icon name="MessageCircle" className="mr-2 h-4 w-4" />
                    Связаться
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Отзывы клиентов</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Нам доверяют тысячи спортсменов и любителей активного образа жизни
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {reviews.map((review) => (
              <Card key={review.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <Avatar>
                      <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                        {review.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <CardTitle className="text-base">{review.name}</CardTitle>
                      <CardDescription className="text-xs">{review.date}</CardDescription>
                    </div>
                  </div>
                  <div className="flex gap-1">
                    {Array.from({ length: review.rating }).map((_, idx) => (
                      <Icon key={idx} name="Star" className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{review.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Показать все отзывы
            </Button>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Контакты</h2>
              <p className="text-lg text-muted-foreground">
                Свяжитесь с нами любым удобным способом
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Контактная информация</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon name="Phone" className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Телефон</p>
                      <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                      <p className="text-muted-foreground">+7 (495) 123-45-68</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon name="Mail" className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Email</p>
                      <p className="text-muted-foreground">info@sportik.ru</p>
                      <p className="text-muted-foreground">booking@sportik.ru</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon name="MapPin" className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Адрес</p>
                      <p className="text-muted-foreground">г. Москва, ул. Спортивная, д. 10</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon name="Clock" className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Режим работы</p>
                      <p className="text-muted-foreground">Ежедневно с 7:00 до 23:00</p>
                    </div>
                  </div>

                  <Separator />

                  <div>
                    <p className="font-semibold mb-4">Мы в соцсетях</p>
                    <div className="flex gap-3">
                      <Button size="icon" variant="outline">
                        <Icon name="MessageCircle" className="h-5 w-5" />
                      </Button>
                      <Button size="icon" variant="outline">
                        <Icon name="Instagram" className="h-5 w-5" />
                      </Button>
                      <Button size="icon" variant="outline">
                        <Icon name="Facebook" className="h-5 w-5" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Напишите нам</CardTitle>
                  <CardDescription>
                    Заполните форму и мы свяжемся с вами в ближайшее время
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Ваше имя</label>
                      <input 
                        type="text" 
                        className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                        placeholder="Иван Иванов"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Телефон</label>
                      <input 
                        type="tel" 
                        className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                        placeholder="+7 (___) ___-__-__"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Email</label>
                      <input 
                        type="email" 
                        className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                        placeholder="example@mail.com"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Сообщение</label>
                      <textarea 
                        className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring min-h-[100px]"
                        placeholder="Ваше сообщение..."
                      />
                    </div>
                    <Button className="w-full" size="lg">
                      <Icon name="Send" className="mr-2 h-4 w-4" />
                      Отправить сообщение
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-secondary text-secondary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img src="https://cdn.poehali.dev/files/logoza.ru.png" alt="Спортик" className="h-10 w-auto" />
                <span className="text-xl font-bold">Спортик</span>
              </div>
              <p className="text-sm text-secondary-foreground/80">
                Профессиональная аренда спортивных залов с 2020 года
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Навигация</h3>
              <ul className="space-y-2 text-sm text-secondary-foreground/80">
                <li><button onClick={() => scrollToSection('home')} className="hover:text-white transition-colors">Главная</button></li>
                <li><button onClick={() => scrollToSection('catalog')} className="hover:text-white transition-colors">Каталог</button></li>
                <li><button onClick={() => scrollToSection('trainers')} className="hover:text-white transition-colors">Тренеры</button></li>
                <li><button onClick={() => scrollToSection('reviews')} className="hover:text-white transition-colors">Отзывы</button></li>
                <li><button onClick={() => scrollToSection('contacts')} className="hover:text-white transition-colors">Контакты</button></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Виды спорта</h3>
              <ul className="space-y-2 text-sm text-secondary-foreground/80">
                <li>Баскетбол</li>
                <li>Волейбол</li>
                <li>Футбол</li>
                <li>Бадминтон</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Контакты</h3>
              <ul className="space-y-2 text-sm text-secondary-foreground/80">
                <li>+7 (495) 123-45-67</li>
                <li>info@sportik.ru</li>
                <li>г. Москва, ул. Спортивная, 10</li>
              </ul>
            </div>
          </div>
          
          <Separator className="bg-secondary-foreground/20 mb-8" />
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-secondary-foreground/80">
            <p>© 2024 Спортик. Все права защищены.</p>
            <div className="flex gap-6">
              <button className="hover:text-white transition-colors">Политика конфиденциальности</button>
              <button className="hover:text-white transition-colors">Договор оферты</button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;