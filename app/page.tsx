import Image from "next/image";

const ctaLink =
  "mailto:lubitelg@gmail.com?subject=Pilot%20request%20%E2%80%94%20Gileya%20AI";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-zinc-900">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <div className="flex items-center gap-3">
            <Image src="/logo.png" alt="ФГ Гілея" width={40} height={40} />
            <div className="leading-tight">
              <div className="font-semibold">Gileya AI</div>
              <div className="text-sm text-zinc-600">by ФГ Гілея</div>
            </div>
          </div>

          <nav className="hidden gap-6 text-sm text-zinc-700 md:flex">
            <a href="#solution" className="hover:text-zinc-900">
              Рішення
            </a>
            <a href="#how" className="hover:text-zinc-900">
              Як працює
            </a>
            <a href="#pilot" className="hover:text-zinc-900">
              Пілот
            </a>
            <a href="#contact" className="hover:text-zinc-900">
              Контакти
            </a>
          </nav>

          <a
            href={ctaLink}
            className="rounded-xl bg-zinc-900 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-800"
          >
            Запросити демо
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
              AI-асистент керівника агропідприємства
            </h1>
            <p className="mt-4 text-lg text-zinc-600">
              Gileya AI — система підтримки рішень, що поєднує профіль господарства,
              агрономічні правила та ML-прогнози, щоб давати пояснювані рекомендації:
              що робити, коли і чому.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#pilot"
                className="rounded-xl bg-zinc-900 px-5 py-3 text-sm font-medium text-white hover:bg-zinc-800"
              >
                Стати пілотом
              </a>
              <a
                href="#solution"
                className="rounded-xl border px-5 py-3 text-sm font-medium hover:bg-zinc-50"
              >
                Дізнатися більше
              </a>
            </div>

            <div className="mt-8 grid gap-3 text-sm text-zinc-700 md:grid-cols-3">
              <div className="rounded-2xl border p-4">
                <div className="font-semibold">Пояснюваність</div>
                <div className="mt-1 text-zinc-600">
                  Рекомендації з причинами та ризиками.
                </div>
              </div>
              <div className="rounded-2xl border p-4">
                <div className="font-semibold">Економіка</div>
                <div className="mt-1 text-zinc-600">
                  Оцінка впливу на витрати та маржу.
                </div>
              </div>
              <div className="rounded-2xl border p-4">
                <div className="font-semibold">Сезонний план</div>
                <div className="mt-1 text-zinc-600">
                  Календар робіт і сценарії.
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border bg-zinc-50 p-8">
            <div className="text-sm font-medium text-zinc-700">
              Приклад виходу (MVP)
            </div>
            <div className="mt-3 space-y-3 text-sm text-zinc-700">
              <div className="rounded-2xl bg-white p-4">
                <div className="font-semibold">Ризик посухи</div>
                <div className="mt-1 text-zinc-600">
                  Зростає у вікні 10–20 днів. Рекомендуємо коригування строків та
                  норм.
                </div>
              </div>
              <div className="rounded-2xl bg-white p-4">
                <div className="font-semibold">Сівозміна</div>
                <div className="mt-1 text-zinc-600">
                  Оптимізація ротації під ґрунт і ресурси з поясненням
                  компромісів.
                </div>
              </div>
              <div className="rounded-2xl bg-white p-4">
                <div className="font-semibold">Економічний ефект</div>
                <div className="mt-1 text-zinc-600">
                  Оцінка впливу на витрати/маржу за сценаріями.
                </div>
              </div>
            </div>
            <div className="mt-6 text-xs text-zinc-500">
              *Демонстраційний приклад. Дані господарства — приватні.
            </div>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section id="solution" className="border-t bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-2xl font-semibold">Рішення</h2>
          <p className="mt-3 max-w-3xl text-zinc-600">
            Ми будуємо AI-ядро управлінських рішень: збір даних → аналітика →
            правила → ML → рекомендації, придатні для керівника і агронома.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              ["Профіль господарства", "Поля, ґрунти, техніка, ресурси, бюджет, персонал."],
              ["Аналітика та ризики", "Клімат/погода, ґрунтові ризики, сезонні сценарії."],
              ["Рекомендації", "Пояснювані рішення з пріоритетами та планом дій."],
            ].map(([t, d]) => (
              <div key={t} className="rounded-3xl border p-6">
                <div className="font-semibold">{t}</div>
                <div className="mt-2 text-sm text-zinc-600">{d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="border-t bg-zinc-50">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-2xl font-semibold">Як працює</h2>
          <ol className="mt-6 grid gap-4 md:grid-cols-5">
            {[
              "Профіль господарства",
              "Імпорт даних (за наявності)",
              "Аналіз + правила",
              "ML-прогнози",
              "План дій + звіт",
            ].map((s, i) => (
              <li key={s} className="rounded-3xl border bg-white p-5">
                <div className="text-xs text-zinc-500">Крок {i + 1}</div>
                <div className="mt-2 font-medium">{s}</div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Pilot */}
      <section id="pilot" className="border-t bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-2xl font-semibold">Пілотна програма</h2>
          <p className="mt-3 max-w-3xl text-zinc-600">
            Запрошуємо господарства (100–5000 га) для пілоту: налаштуємо профіль,
            сформуємо сезонний план, ризик-аналіз та рекомендації, а також
            порахуємо очікуваний ефект.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={ctaLink}
              className="rounded-xl bg-zinc-900 px-5 py-3 text-sm font-medium text-white hover:bg-zinc-800"
            >
              Подати заявку на пілот
            </a>
            <a
              href="#contact"
              className="rounded-xl border px-5 py-3 text-sm font-medium hover:bg-zinc-50"
            >
              Зв’язатися
            </a>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="border-t bg-zinc-50">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-2xl font-semibold">Контакти</h2>
          <p className="mt-3 text-zinc-600">
            Напишіть — надішлю демо-матеріали або узгодимо короткий дзвінок.
          </p>

          <div className="mt-6 rounded-3xl border bg-white p-6">
            <div className="text-sm text-zinc-700">
              Email:{" "}
              <a className="underline" href="mailto:lubitelg@gmail.com">
                lubitelg@gmail.com
              </a>
            </div>
            <div className="mt-2 text-sm text-zinc-700">
              Telegram: <span className="text-zinc-500">додайте за потреби</span>
            </div>
          </div>

          <footer className="mt-10 text-xs text-zinc-500">
            © {new Date().getFullYear()} Gileya AI by ФГ Гілея •{" "}
            <a className="underline" href="/privacy">Privacy</a> •{" "}
            <a className="underline" href="/terms">Terms</a>            
          </footer>
        </div>
      </section>
    </main>
  );
}
