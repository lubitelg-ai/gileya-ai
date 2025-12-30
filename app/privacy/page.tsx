export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-12 text-zinc-900">
      <h1 className="text-3xl font-semibold tracking-tight">Політика конфіденційності</h1>
      <p className="mt-4 text-zinc-700">
        Ця Політика конфіденційності описує, як Gileya AI (далі — «Сервіс») збирає, використовує та
        захищає інформацію користувачів.
      </p>

      <h2 className="mt-8 text-xl font-semibold">1. Які дані ми можемо отримувати</h2>
      <ul className="mt-3 list-disc space-y-2 pl-5 text-zinc-700">
        <li>Контактні дані, які ви надаєте добровільно (наприклад, email для зв’язку).</li>
        <li>Дані про господарство, які ви надаєте для пілоту/демо (поля, культури, ресурси тощо).</li>
        <li>Технічні дані, необхідні для роботи сайту (наприклад, cookie/логи у мінімальному обсязі).</li>
      </ul>

      <h2 className="mt-8 text-xl font-semibold">2. Як ми використовуємо дані</h2>
      <ul className="mt-3 list-disc space-y-2 pl-5 text-zinc-700">
        <li>Щоб зв’язатися з вами щодо демо або пілотної програми.</li>
        <li>Щоб сформувати аналітику та рекомендації в межах пілоту (за вашою згодою).</li>
        <li>Щоб покращувати Сервіс, його якість та безпеку.</li>
      </ul>

      <h2 className="mt-8 text-xl font-semibold">3. Конфіденційність даних господарства</h2>
      <p className="mt-3 text-zinc-700">
        Дані господарства, надані для пілоту, розглядаються як конфіденційні та не публікуються.
        Ми не передаємо їх третім сторонам, окрім випадків, коли це потрібно для виконання запиту
        користувача або вимагається законом.
      </p>

      <h2 className="mt-8 text-xl font-semibold">4. Зберігання та захист</h2>
      <p className="mt-3 text-zinc-700">
        Ми застосовуємо розумні організаційні та технічні заходи для захисту інформації від
        несанкціонованого доступу, втрати або зміни.
      </p>

      <h2 className="mt-8 text-xl font-semibold">5. Ваші права</h2>
      <p className="mt-3 text-zinc-700">
        Ви можете запросити доступ, уточнення або видалення ваших даних, звернувшись за контактами на сайті.
      </p>

      <h2 className="mt-8 text-xl font-semibold">6. Контакти</h2>
      <p className="mt-3 text-zinc-700">
        Для питань щодо конфіденційності звертайтеся на email, вказаний на сторінці «Контакти».
      </p>

      <p className="mt-10 text-sm text-zinc-500">Оновлено: {new Date().toLocaleDateString("uk-UA")}</p>
    </main>
  );
}
