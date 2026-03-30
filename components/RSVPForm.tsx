
import React, { useState } from 'react';
import { sendRSVP } from '../services/rsvpService';
import { RSVPData } from '../types';

const RSVPForm: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState<RSVPData>({
    name: '',
    attending: 'yes',
    alcohol: [],
    food: 'meat',
    allergies: '',
    message: ''
  });

  const alcoholOptions = [
    'Вино красное', 'Вино белое', 'Сухое', 'Полусухое', 
    'Сладкое', 'Полусладкое', 'Просекко', 'Брют', 'Игристое вино'
  ];

  const toggleAlcohol = (option: string) => {
    setFormData(prev => ({
      ...prev,
      alcohol: prev.alcohol.includes(option) 
        ? prev.alcohol.filter(a => a !== option)
        : [...prev.alcohol, option]
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim()) return;

    setStatus('loading');
    const success = await sendRSVP(formData);
    
    if (success) {
      setStatus('success');
    } else {
      setStatus('error');
      // Сброс ошибки через 3 секунды, чтобы можно было попробовать снова
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  if (status === 'success') {
    return (
      <div className="text-center py-24 space-y-6 fade-in">
        <div className="w-24 h-24 bg-stone-900 text-wedding-gold rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
          <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
          </svg>
        </div>
        <h3 className="text-4xl serif">Спасибо за ответ!</h3>
        <p className="text-stone-500 font-light text-lg">
          Мы получили ваше сообщение. <br/> С нетерпением ждем встречи 24 марта!
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-12">
      <div className="text-center space-y-4">
        <h2 className="text-4xl md:text-5xl serif">RSVP</h2>
        <p className="text-stone-400 font-light max-w-lg mx-auto italic">
          Пожалуйста, подтвердите ваше присутствие до 1 марта 2026 года
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-10">
        <div className="space-y-8">
          {/* Name Input */}
          <div className="space-y-2">
             <label className="text-[10px] uppercase tracking-[0.2em] text-stone-400 pl-1">Ваши Имя и Фамилия</label>
             <input 
              required
              type="text" 
              className="w-full bg-transparent border-b border-stone-200 py-4 focus:border-stone-800 outline-none transition-colors text-xl serif placeholder:text-stone-300"
              placeholder="Александр и Мария Ивановы"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
          </div>

          {/* Attending Toggle */}
          <div className="space-y-4">
            <label className="text-[10px] uppercase tracking-[0.2em] text-stone-400 pl-1">Планируете ли вы быть?</label>
            <div className="flex flex-wrap gap-4">
              {[
                { value: 'yes', label: 'С радостью приду' },
                { value: 'no', label: 'К сожалению, не смогу' }
              ].map((opt) => (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => setFormData({...formData, attending: opt.value as 'yes' | 'no'})}
                  className={`flex-1 py-4 px-6 rounded-xl border transition-all duration-300 text-sm tracking-wide uppercase ${
                    formData.attending === opt.value
                      ? 'bg-stone-900 text-white border-stone-900 shadow-lg' 
                      : 'border-stone-200 text-stone-500 hover:border-stone-400 bg-white'
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          {/* Details Section (Only if attending) */}
          {formData.attending === 'yes' && (
            <div className="space-y-10 pt-6 fade-in">
              
              {/* Alcohol */}
              <div className="space-y-4">
                <label className="text-[10px] uppercase tracking-[0.2em] text-stone-400 pl-1">Предпочтения по напиткам</label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {alcoholOptions.map((opt) => (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => toggleAlcohol(opt)}
                      className={`px-4 py-3 rounded-lg border text-xs text-left transition-all duration-200 ${
                        formData.alcohol.includes(opt)
                          ? 'bg-wedding-gold text-white border-wedding-gold shadow-md'
                          : 'border-stone-100 text-stone-500 hover:bg-stone-50 bg-stone-50/50'
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Food */}
                <div className="space-y-4">
                  <label className="text-[10px] uppercase tracking-[0.2em] text-stone-400 pl-1">Основное блюдо</label>
                  <div className="flex gap-4">
                    {['meat', 'fish'].map((opt) => (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => setFormData({...formData, food: opt as 'meat' | 'fish'})}
                        className={`flex-1 py-3 rounded-xl border text-sm transition-all ${
                          formData.food === opt 
                            ? 'bg-stone-800 text-white border-stone-800 shadow-lg' 
                            : 'border-stone-200 text-stone-500 hover:bg-stone-50'
                        }`}
                      >
                        {opt === 'meat' ? 'Мясо' : 'Рыба'}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Allergies */}
                <div className="space-y-4">
                  <label className="text-[10px] uppercase tracking-[0.2em] text-stone-400 pl-1">Аллергии</label>
                  <input 
                    type="text" 
                    className="w-full bg-stone-50 rounded-xl px-4 py-3 text-sm focus:bg-white border border-transparent focus:border-stone-200 outline-none transition-all placeholder:text-stone-300"
                    placeholder="Орехи, мед, лактоза..."
                    value={formData.allergies}
                    onChange={(e) => setFormData({...formData, allergies: e.target.value})}
                  />
                </div>
              </div>
            </div>
          )}

          {/* Message / Wishes - Always visible */}
          <div className="space-y-4 pt-4">
            <label className="text-[10px] uppercase tracking-[0.2em] text-stone-400 pl-1">
              {formData.attending === 'yes' ? 'Пожелания или вопросы' : 'Пожелание паре'}
            </label>
            <textarea 
              rows={3}
              className="w-full bg-stone-50 rounded-xl px-4 py-3 text-sm focus:bg-white border border-transparent focus:border-stone-200 outline-none transition-all resize-none placeholder:text-stone-300"
              placeholder={formData.attending === 'yes' ? "Ваши пожелания..." : "Пара слов для молодых..."}
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
            />
          </div>
        </div>

        <button 
          type="submit"
          disabled={status === 'loading'}
          className="w-full bg-stone-900 text-white py-5 rounded-full uppercase tracking-[0.3em] text-xs hover:bg-stone-800 transition-all duration-500 shadow-2xl active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center gap-3"
        >
          {status === 'loading' ? (
            <>
              <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Отправка...
            </>
          ) : (
            'Отправить'
          )}
        </button>
        
        {status === 'error' && (
           <p className="text-red-500 text-xs text-center uppercase tracking-widest fade-in">
             Произошла ошибка. Попробуйте еще раз.
           </p>
        )}
      </form>
    </div>
  );
};

export default RSVPForm;
