
import { RSVPData } from '../types';

const BOT_TOKEN = '8563380892:AAG2TzMejh09_PjCE0Pb6Hcx1pL2r8--OnY';

// Если вы хотите закрепить конкретный ID (чтобы работало, даже если история очистится), впишите его сюда.
// Если оставить пустым, бот будет искать всех, кто недавно нажал /start
const HARDCODED_CHAT_ID = ''; 

export const sendRSVP = async (data: RSVPData): Promise<boolean> => {
  // Имитация ожидания для UI
  await new Promise(resolve => setTimeout(resolve, 800));

  // 1. Формируем текст сообщения
  const lines = [
    `💍 *Новая заявка на свадьбу!*`,
    ``,
    `👤 *Гость:* ${data.name}`,
    data.attending === 'yes' ? '✅ *Придет*' : '❌ *Не сможет*',
  ];

  if (data.attending === 'yes') {
    lines.push(
      `🍷 *Алкоголь:* ${data.alcohol.length > 0 ? data.alcohol.join(', ') : 'Не выбрано'}`,
      `🍽 *Еда:* ${data.food === 'meat' ? 'Мясо 🥩' : 'Рыба 🐟'}`,
      data.allergies ? `⚠️ *Аллергии:* ${data.allergies}` : ''
    );
  }

  if (data.message) {
    lines.push(`💬 *Сообщение:* ${data.message}`);
  }

  const messageText = lines.filter(Boolean).join('\n');

  try {
    // 2. Получаем список получателей (всех, кто писал боту)
    const updatesUrl = `https://api.telegram.org/bot${BOT_TOKEN}/getUpdates`;
    const updatesResponse = await fetch(updatesUrl);
    const updatesData = await updatesResponse.json();

    const chatIds = new Set<string | number>();

    // Добавляем жестко прописанный ID, если есть
    if (HARDCODED_CHAT_ID) {
      chatIds.add(HARDCODED_CHAT_ID);
    }

    // Собираем ID всех, кто взаимодействовал с ботом из истории обновлений
    if (updatesData.ok && Array.isArray(updatesData.result)) {
      updatesData.result.forEach((update: any) => {
        if (update.message?.chat?.id) {
          chatIds.add(update.message.chat.id);
        }
        if (update.my_chat_member?.chat?.id) {
          chatIds.add(update.my_chat_member.chat.id);
        }
      });
    }

    // Если получатели не найдены вообще - это проблема, но мы не показываем ошибку юзеру
    if (chatIds.size === 0) {
      console.warn('Не найдено ни одного чата для отправки. Администратор должен написать боту /start');
      // Возвращаем false, чтобы форма показала ошибку (мягкую), или true, чтобы не расстраивать гостя (выбрал true)
      // Но лучше в консоль вывести ошибку.
    }

    // 3. Отправляем сообщение каждому найденному получателю
    const sendPromises = Array.from(chatIds).map(chatId => 
      fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: messageText,
          parse_mode: 'Markdown',
        }),
      })
    );

    await Promise.all(sendPromises);
    
    // Считаем успешным, если код дошел до сюда без фатальных ошибок сети
    return true;

  } catch (error) {
    console.error('Ошибка отправки в Telegram:', error);
    return false; 
  }
};
