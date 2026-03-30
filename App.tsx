import React from 'react';
import Hero from './components/Hero';
import InvitationDetails from './components/InvitationDetails';
import DressCode from './components/DressCode';
import Countdown from './components/Countdown';
import RSVPForm from './components/RSVPForm';

const App: React.FC = () => {
  const weddingDate = new Date('2026-03-24T15:20:00');

  return (
    <div className="min-h-screen flex flex-col items-center overflow-x-hidden">
      <Hero />
      
      <main className="w-full max-w-4xl px-4 space-y-32 py-24">
        
        {/* Приветственное сообщение */}
        <section className="text-center max-w-3xl mx-auto space-y-8 fade-in">
           <div className="w-px h-16 bg-stone-300 mx-auto opacity-50"></div>
           <h2 className="text-xs md:text-sm tracking-[0.3em] uppercase text-stone-400 font-semibold">
             Дорогие родные и близкие!
           </h2>
           <p className="serif text-2xl md:text-4xl leading-relaxed text-stone-800 font-light italic">
             «В нашей жизни предстоят счастливые перемены. Мы очень хотим, чтобы в этот день рядом с нами были самые близкие и дорогие для нас люди, и будем рады разделить с вами чудесный день.»
           </p>
           <div className="w-px h-16 bg-stone-300 mx-auto opacity-50"></div>
        </section>

        <InvitationDetails />
        
        <DressCode />

        <section id="countdown" className="text-center py-12">
          <h2 className="text-3xl md:text-5xl mb-12 serif italic">До нашей встречи осталось</h2>
          <Countdown targetDate={weddingDate} />
        </section>

        <section id="rsvp" className="bg-white p-8 md:p-16 rounded-[3rem] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.08)] border border-stone-50">
          <RSVPForm />
        </section>

        <section className="text-center space-y-6 max-w-xl mx-auto py-12">
          <h3 className="serif text-3xl">Остались вопросы?</h3>
          <p className="text-stone-500 font-light">
            По всем интересующим Вас вопросам в плане организации, поздравлений или других пожеланий можно обратиться к нашему организатору
          </p>
          <div className="pt-4">
            <a 
              href="tel:+79149112408" 
              className="text-2xl serif text-stone-800 hover:text-wedding-gold transition-colors inline-block border-b border-stone-100 pb-1"
            >
              Елизавета <span className="text-stone-400 ml-2 font-sans text-xl">+7 (914) 911-24-08</span>
            </a>
            <p className="text-[10px] uppercase tracking-widest text-stone-300 mt-2">Доступна в рабочее время</p>
          </div>
        </section>
      </main>

      <footer className="w-full py-16 bg-stone-50 text-center border-t border-stone-200">
        <p className="serif text-3xl italic text-stone-400 mb-6">Будем очень рады видеть Вас!</p>
        <div className="h-px w-24 bg-stone-200 mx-auto mb-6"></div>
        <p className="text-xs tracking-[0.4em] text-stone-300 uppercase">24.03.2026 • САНКТ-ПЕТЕРБУРГ</p>
      </footer>
    </div>
  );
};

export default App;