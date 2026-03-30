
import React from 'react';

const DressCode: React.FC = () => {
  // Мы используем черно-белый фильтр (grayscale) в CSS, чтобы любые фото смотрелись строго в стиле Total Black
  const references = [
    {
      id: 'woman',
      // Женщина в черном
      src: 'https://i.pinimg.com/1200x/55/df/54/55df54a491c8f20f6fb5d638f7cfecc4.jpg', 
      label: 'Для леди',
      description: 'Коктейльные платья или строгие костюмы, свободный крой, акцентные аксессуары.'
    },
    {
      id: 'kids',
      // Ребенок в темном
      src: 'https://i.pinimg.com/1200x/89/a9/06/89a906a77eee39e76b9da9dd7c47865b.jpg', 
      label: 'Для детей',
      description: 'Удобные и стильные черные комплекты, рубашки или платья.'
    },
    {
      id: 'man',
      // Мужчина в черном
      src: 'https://i.pinimg.com/1200x/fb/f4/52/fbf45260cc3936bbab67908772f47134.jpg', 
      label: 'Для джентльменов',
      description: 'Черный Total look: брюки, поло, лоферы.'
    }
  ];

  return (
    <section className="py-20 bg-stone-900 text-white rounded-[3rem] px-6 md:px-16 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-64 h-64 bg-wedding-gold/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      
      <div className="max-w-5xl mx-auto text-center space-y-12 relative z-10">
        <div className="space-y-6">
          <h2 className="text-4xl md:text-6xl serif italic">Dress Code: Классический Total Black</h2>
          <p className="text-stone-400 font-light text-lg max-w-2xl mx-auto">
            Мы будем благодарны, если вы поддержите стиль нашей свадьбы.
            <br />
            Пожалуйста, выберите образы в <span className="text-white font-medium">черном цвете</span>.
          </p>
        </div>

        {/* Сетка референсов */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
          {references.map((item) => (
            <div key={item.id} className="space-y-4 group">
              <div className="aspect-[3/5] md:aspect-[3/4] overflow-hidden rounded-xl bg-stone-800 relative shadow-2xl border border-stone-800">
                 <img 
                  src={item.src} 
                  alt={item.label} 
                  // Возвращаем grayscale, чтобы гарантировать стиль Total Black, даже если на фото есть оттенки
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100 grayscale brightness-90 contrast-125"
                  loading="lazy"
                />
              </div>
              <div className="text-left md:text-center space-y-1">
                <h3 className="text-wedding-gold uppercase tracking-[0.2em] text-xs font-semibold">{item.label}</h3>
                <p className="text-stone-400 text-xs md:text-sm font-light leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DressCode;
