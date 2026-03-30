
import React from 'react';

const InvitationDetails: React.FC = () => {
  return (
    <section className="space-y-16">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div className="space-y-8 fade-in sticky top-24">
          <h2 className="text-4xl md:text-6xl serif leading-tight">Программа дня</h2>
          <div className="space-y-8">
            <div className="border-l-2 border-stone-200 pl-6 space-y-4 relative">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-stone-800"></div>
              <div>
                <span className="text-wedding-gold font-medium tracking-widest text-sm uppercase">15:20 — Сбор гостей</span>
                <h3 className="text-xl serif mt-1">Дворец Бракосочетания №1</h3>
                <p className="text-stone-500 text-sm mt-1 italic">Английская набережная, 28</p>
                <p className="text-stone-400 text-sm mt-2">Вас встретит наш организатор и проводит в комнату для гостей.</p>
              </div>
            </div>

            <div className="border-l-2 border-stone-200 pl-6 space-y-4 relative">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-stone-400"></div>
              <div>
                <span className="text-wedding-gold font-medium tracking-widest text-sm uppercase">15:40 — Церемония</span>
                <p className="text-stone-500">Начало торжественной регистрации.</p>
              </div>
            </div>

            <div className="border-l-2 border-stone-200 pl-6 space-y-4 relative">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-stone-800"></div>
              <div>
                <span className="text-wedding-gold font-medium tracking-widest text-sm uppercase">18:00 — Банкет</span>
                <h3 className="text-xl serif mt-1">Ресторан Nevesomost</h3>
                <p className="text-stone-500 text-sm mt-1 italic">ул. Большой П.С. Проспект 37</p>
                <p className="text-stone-400 text-sm mt-2">Вход через отель «Введенский».</p>
              </div>
            </div>

            <div className="border-l-2 border-stone-200 pl-6 space-y-4 relative">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-stone-300"></div>
              <div>
                <span className="text-wedding-gold font-medium tracking-widest text-sm uppercase">21:00 — Завершение</span>
                <p className="text-stone-500">Окончание праздничного вечера.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Правая колонка с фото локаций */}
        <div className="space-y-8 pt-8 md:pt-12">
          
          {/* ЗАГС */}
          <div className="relative group">
            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-all duration-700 rounded-xl z-10"></div>
            <img 
              src="https://wedwed.ru/upload/articles/af97655ac8d0fe77da7e40a0357583f7.jpg" 
              alt="Дворец Бракосочетания №1" 
              className="rounded-xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-1000 w-full object-cover h-64 md:h-72"
            />
            <div className="absolute bottom-4 left-6 z-20 text-white drop-shadow-md">
               <p className="serif text-2xl italic">Дворец №1</p>
               <p className="text-[10px] uppercase tracking-widest opacity-90">Парадная лестница</p>
            </div>
          </div>

          {/* Ресторан - со сдвигом для визуального ритма */}
          <div className="relative group md:ml-12">
            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-all duration-700 rounded-xl z-10"></div>
            <img 
              src="https://scdn.tomesto.ru/img/place/000/022/591/restoran-nevesomost-nevesomost-na-bolshom-prospekte-p-s_cf046_full-134304.jpg" 
              alt="Ресторан Nevesomost" 
              className="rounded-xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-1000 w-full object-cover h-64 md:h-72"
            />
             <div className="absolute bottom-4 left-6 z-20 text-white drop-shadow-md">
               <p className="serif text-2xl italic">Nevesomost</p>
               <p className="text-[10px] uppercase tracking-widest opacity-90">Вид на Петербург</p>
            </div>
          </div>

        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 pt-12">
        <div className="bg-stone-50 p-8 rounded-2xl border border-stone-100">
          <h4 className="serif text-2xl mb-4">О цветах</h4>
          <p className="text-stone-500 font-light leading-relaxed">
            Мы очень любим цветы, но формат нашего торжества не даст нам насладиться ими в полной мере. 
            Вместо них мы будем счастливы, если вы сделаете вклад в бюджет нашей семьи.
          </p>
        </div>
        <div className="bg-stone-900 p-8 rounded-2xl text-white">
          <h4 className="serif text-2xl mb-4">О традициях</h4>
          <p className="text-stone-300 font-light leading-relaxed">
            Нам хотелось бы сделать этот день добрым, уютным и семейным, поэтому просим Вас воздержаться от криков «Горько!» 🖤
          </p>
        </div>
      </div>
    </section>
  );
};

export default InvitationDetails;
