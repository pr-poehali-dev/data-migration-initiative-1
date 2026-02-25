import { ArtDecoSunburst } from "@/components/ArtDecoSunburst";
import { ArtDecoDivider } from "@/components/ArtDecoDivider";
import { CTAForm } from "@/components/CTAForm";
import { Calculator } from "@/components/Calculator";
import Icon from "@/components/ui/icon";

function App() {
  return (
    <main className="min-h-screen bg-background dark">

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
        <ArtDecoSunburst />
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <div className="flex justify-center mb-8">
            <div className="flex items-center gap-4">
              <div className="w-16 h-px bg-primary" />
              <div className="w-3 h-3 rotate-45 border border-primary" />
              <div className="w-16 h-px bg-primary" />
            </div>
          </div>
          <p className="text-primary tracking-[0.3em] uppercase text-sm mb-6">Натяжные потолки под ключ</p>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-foreground mb-6 leading-tight">
            <span className="text-gold-gradient">Тяни</span>&nbsp;Потолок
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-4">
            Премиальные натяжные потолки под ключ за 1 день
          </p>
          <p className="text-lg text-muted-foreground/70 max-w-xl mx-auto mb-12">
            Более 100 вариантов исполнения: от классики до парящих конструкций с подсветкой
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a href="#calculator" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-medium tracking-wider uppercase text-sm hover:bg-primary/90 transition-all duration-300">
              Рассчитать стоимость
            </a>
            <a href="#contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-primary text-primary font-medium tracking-wider uppercase text-sm hover:bg-primary/10 transition-all duration-300">
              Получить консультацию
            </a>
          </div>
          <div className="flex justify-center">
            <div className="flex flex-col items-center gap-2">
              <div className="w-px h-16 bg-gradient-to-b from-transparent via-primary to-primary" />
              <div className="w-2 h-2 rotate-45 bg-primary" />
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-primary">
            <path d="M12 5v14M5 12l7 7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-24 px-6 bg-card/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-primary tracking-[0.2em] uppercase text-sm mb-4">Почему выбирают нас</p>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground">Наши преимущества</h2>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: "Ruler", title: "Бесплатный замер", desc: "Выезд специалиста в день обращения с образцами материалов" },
              { icon: "ShieldCheck", title: "Гарантия 10 лет", desc: "Официальная гарантия на материалы от производителей MSD, Pongs, Descor" },
              { icon: "Wind", title: "Монтаж без пыли", desc: "Чистая и аккуратная работа с промышленными пылесосами" },
              { icon: "Layers", title: "Индивидуальный дизайн", desc: "3D-визуализация будущего потолка бесплатно" },
            ].map((item) => (
              <div key={item.title} className="relative p-6 border border-border/50 hover:border-primary/50 transition-all duration-300 group">
                <div className="absolute -top-1 -left-1 w-4 h-4 border-t border-l border-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b border-r border-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="text-primary mb-4">
                  <Icon name={item.icon} size={36} />
                </div>
                <h3 className="font-serif text-lg text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Materials */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <ArtDecoDivider variant="stepped" />
          <div className="text-center mb-16">
            <p className="text-primary tracking-[0.2em] uppercase text-sm mb-4">Только сертифицированные материалы</p>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-4">Полотна в наличии</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">ПВХ полотна · Тканевые полотна · Премиум коллекция</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "MSD Classic",
                origin: "Китай",
                price: "от 450 ₽/м²",
                desc: "Эконом-сегмент с отличным качеством. Толщина 0,18-0,20 мм. Зеркальность глянца 91-94%.",
                features: ["Матовые, сатиновые, глянцевые", "Ширина до 5,65 м (бесшовно)", "Более 130 оттенков", "Сертификаты безопасности"],
                highlight: false,
              },
              {
                name: "MSD Premium",
                origin: "Тайвань",
                price: "от 650 ₽/м²",
                desc: "Премиальное сырье из Тайваня. Повышенная экологичность.",
                features: ["Зеркальность глянца 95-99%", "Матовость 4-4.5%", "Толщина мата >0,20 мм", "Богатая цветовая палитра"],
                highlight: true,
              },
              {
                name: "MSD Evolution",
                origin: "Тайвань",
                price: "от 850 ₽/м²",
                desc: "Улучшенная рецептура, максимальная экологичность. Для аллергиков.",
                features: ["Толщина 0,21-0,22 мм", "Крупная шагрень, премиальный вид", "Гипоаллергенно", "Белый матовый (код 303)"],
                highlight: false,
              },
            ].map((mat) => (
              <div key={mat.name} className={`relative p-8 border ${mat.highlight ? "border-primary" : "border-border"} transition-all duration-300 hover:border-primary/70`}>
                {mat.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs tracking-widest uppercase px-4 py-1">
                    Популярный
                  </div>
                )}
                <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-primary" />
                <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-primary" />
                <p className="text-primary tracking-widest text-xs uppercase mb-1">{mat.origin}</p>
                <h3 className="font-serif text-2xl text-foreground mb-1">{mat.name}</h3>
                <p className="text-primary text-xl font-medium mb-4">{mat.price}</p>
                <p className="text-muted-foreground text-sm mb-6 leading-relaxed">{mat.desc}</p>
                <ul className="space-y-2">
                  {mat.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="text-primary mt-0.5 shrink-0">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Types */}
      <section className="py-24 px-6 bg-card/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-primary tracking-[0.2em] uppercase text-sm mb-4">Конструкции</p>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground">Типы потолков</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "Minus",
                title: "Теневые потолки",
                desc: "Зазор 5-20 мм между стеной и потолком создает эффект парения.",
                features: ["Специальный алюминиевый профиль", "Черный зазор для глубины", "Возможна подсветка по контуру", "Скрывает неровности стен"],
              },
              {
                icon: "Sparkles",
                title: "Парящие потолки",
                desc: "Подсветка по периметру создает ощущение, что потолок висит в воздухе.",
                features: ["RGB или светодиодная лента", "Рассеянный свет, не виден источник", "Визуально поднимает потолки"],
              },
              {
                icon: "LayoutDashboard",
                title: "Двухуровневые",
                desc: "Сложные конструкции с перепадами высоты для зонирования.",
                features: ["Комбинация фактур и цветов", "Любые формы: волны, круги, квадраты", "Скрытие коммуникаций"],
              },
            ].map((t) => (
              <div key={t.title} className="relative p-8 border border-border hover:border-primary/50 transition-all duration-300 group">
                <div className="absolute -top-1 -left-1 w-5 h-5 border-t border-l border-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="text-primary mb-4">
                  <Icon name={t.icon} size={40} />
                </div>
                <h3 className="font-serif text-xl text-foreground mb-3">{t.title}</h3>
                <p className="text-muted-foreground text-sm mb-5 leading-relaxed">{t.desc}</p>
                <ul className="space-y-2">
                  {t.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="text-primary mt-0.5 shrink-0">✓</span>{f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Profiles */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <ArtDecoDivider variant="fan" />
          <div className="text-center mb-16">
            <p className="text-primary tracking-[0.2em] uppercase text-sm mb-4">Выбирайте под ваш дизайн-проект</p>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground">Профили и системы крепления</h2>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { code: "ПК-14", title: "Стеновой багет", desc: "Классический алюминиевый профиль для стандартного монтажа. Крепление к стене, ширина 35 мм." },
              { code: "ПК-15", title: "Потолочный багет", desc: "Для крепления к потолку. Используется, когда стены не несущие или для многоуровневых конструкций." },
              { code: "ПК-12", title: "Усиленный профиль", desc: "Для больших площадей и тяжелых полотен. Повышенная жесткость." },
              { code: "Теневой", title: "Теневой профиль", desc: "Алюминиевый анодированный или неанодированный. Зазор 5-9 мм." },
              { code: "SLOTT R", title: "Стыковочный профиль", desc: "Для соединения полотен в больших помещениях, стыковки разных цветов." },
              { code: "Вент.", title: "С перфорацией", desc: "Для устранения эффекта «гуляющего» потолка при открывании дверей." },
            ].map((p) => (
              <div key={p.code} className="p-6 border border-border/50 hover:border-primary/40 transition-all duration-300">
                <span className="text-primary text-xs tracking-widest uppercase font-medium">{p.code}</span>
                <h3 className="font-serif text-lg text-foreground mt-1 mb-2">{p.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
          <div className="grid md:grid-cols-2 gap-8 mt-8">
            {[
              { title: "Ниша для штор", sub: "Скрытая ниша под шторы", desc: "Эстетичное решение для скрытия карниза.", features: ["Готовая алюминиевая конструкция", "Индивидуальное изготовление", "С подсветкой или без"] },
              { title: "Ниша с перегибом", sub: "Ниша с перегибом через брусок", desc: "Для создания плавного изгиба полотна и скрытого карниза.", features: ["Деревянный брусок 50×50 мм", "Два варианта: с перегибом и без"] },
            ].map((n) => (
              <div key={n.title} className="p-8 border border-border/50 hover:border-primary/40 transition-all duration-300">
                <p className="text-primary text-xs tracking-widest uppercase mb-1">{n.sub}</p>
                <h3 className="font-serif text-xl text-foreground mb-3">{n.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{n.desc}</p>
                <ul className="space-y-1">
                  {n.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="text-primary">✓</span>{f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lighting */}
      <section className="py-24 px-6 bg-card/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-primary tracking-[0.2em] uppercase text-sm mb-4">Любые варианты: от классики до современных световых линий</p>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground">Освещение</h2>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { icon: "Circle", title: "Точечные светильники", desc: "Встраиваемые LED-светильники, 230В или 12В. Любые цоколи: GU5.3, GX53, GU10." },
              { icon: "Zap", title: "Накладные споты", desc: "Поворотные и статичные, для акцентного освещения." },
              { icon: "AlignCenter", title: "Шинопроводы", desc: "Накладные и встроенные с трековыми светильниками. Магнитные системы." },
              { icon: "SunDim", title: "Световые линии", desc: "Светодиодные линейные светильники, встраиваемые в полотно. Прямоугольные или радиусные." },
              { icon: "Lightbulb", title: "Подсветка за полотном", desc: "Светодиодные ленты RGB или одноцветные. Эффект парящего потолка." },
              { icon: "Star", title: "Люстры", desc: "Подвесные, потолочные. Усиленные закладные под любые люстры до 50 кг." },
            ].map((l) => (
              <div key={l.title} className="p-6 border border-border/50 hover:border-primary/40 transition-all duration-300">
                <div className="text-primary mb-3">
                  <Icon name={l.icon} size={28} />
                </div>
                <h3 className="font-serif text-lg text-foreground mb-2">{l.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{l.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Calculator */}
      <section id="calculator" className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <ArtDecoDivider variant="chevron" />
          <div className="text-center mb-12">
            <p className="text-primary tracking-[0.2em] uppercase text-sm mb-4">Узнайте цену за 30 секунд</p>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground">Калькулятор стоимости</h2>
          </div>
          <div className="relative p-8 md:p-12 border border-border">
            <div className="absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 border-primary" />
            <div className="absolute -top-2 -right-2 w-8 h-8 border-t-2 border-r-2 border-primary" />
            <div className="absolute -bottom-2 -left-2 w-8 h-8 border-b-2 border-l-2 border-primary" />
            <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-2 border-r-2 border-primary" />
            <Calculator />
          </div>
        </div>
      </section>

      {/* CTA / Contact */}
      <section id="contact" className="py-24 px-6 relative overflow-hidden bg-card/50">
        <div className="absolute inset-0 opacity-5">
          <ArtDecoSunburst />
        </div>
        <div className="max-w-3xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <p className="text-primary tracking-[0.2em] uppercase text-sm mb-4">Бесплатный замер</p>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6">Оставить заявку</h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Оставьте контакты — свяжусь с вами, отвечу на вопросы и договоримся об удобном времени замера.
            </p>
          </div>
          <div className="relative p-8 md:p-12 border border-border">
            <div className="absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 border-primary" />
            <div className="absolute -top-2 -right-2 w-8 h-8 border-t-2 border-r-2 border-primary" />
            <div className="absolute -bottom-2 -left-2 w-8 h-8 border-b-2 border-l-2 border-primary" />
            <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-2 border-r-2 border-primary" />
            <CTAForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border">
        <div className="max-w-6xl mx-auto flex flex-col items-center gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-px bg-primary" />
            <span className="font-serif text-xl text-foreground">Тяни Потолок</span>
            <div className="w-12 h-px bg-primary" />
          </div>
          <p className="text-muted-foreground text-sm">© 2026 Тяни Потолок. Все права защищены.</p>
        </div>
      </footer>
    </main>
  );
}

export default App;
