import { useState } from "react"
import { Plus } from "lucide-react"

const faqs = [
  {
    question: "Сколько времени занимает изготовление и монтаж окон?",
    answer:
      "Стандартные сроки — от 5 до 10 рабочих дней с момента замера до установки. В зависимости от объёма и загруженности производства сроки могут быть сокращены. Для больших объектов составляем индивидуальный график работ.",
  },
  {
    question: "Входит ли замер в стоимость?",
    answer:
      "Выезд замерщика абсолютно бесплатный. Наш специалист приедет в удобное для вас время, произведёт точные замеры и сразу рассчитает стоимость с учётом всех пожеланий.",
  },
  {
    question: "Какие профильные системы вы используете?",
    answer:
      "Работаем с профилями REHAU, VEKA и KBE — это немецкие системы с многолетней репутацией. Предложим оптимальный вариант под ваш бюджет и задачу: от экономичных однокамерных до энергосберегающих трёхкамерных стеклопакетов.",
  },
  {
    question: "Делаете ли вы откосы и подоконники?",
    answer:
      "Да, мы выполняем весь комплекс работ: установка пластиковых или каменных подоконников, отделка откосов сэндвич-панелями или штукатуркой, установка отливов. Вы получаете готовый результат без необходимости искать дополнительных мастеров.",
  },
  {
    question: "Есть ли гарантия на окна и монтаж?",
    answer:
      "Официальная гарантия — 5 лет на изделия и 3 года на монтажные работы. В гарантийный период выезжаем и устраняем любые замечания бесплатно в течение 48 часов.",
  },
  {
    question: "Как вызвать замерщика?",
    answer:
      "Позвоните нам или оставьте заявку на сайте — согласуем время визита в течение 15 минут. Замерщик приедет в день обращения или в любое удобное для вас время, включая выходные.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 md:py-29">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mb-16">
          <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-6">Вопросы</p>
          <h2 className="text-6xl font-medium leading-[1.15] tracking-tight mb-6 text-balance lg:text-7xl">
            Частые вопросы
          </h2>
        </div>

        <div>
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-border">
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full py-6 flex items-start justify-between gap-6 text-left group"
              >
                <span className="text-lg font-medium text-foreground transition-colors group-hover:text-foreground/70">
                  {faq.question}
                </span>
                <Plus
                  className={`w-6 h-6 text-foreground flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-45" : "rotate-0"
                  }`}
                  strokeWidth={1.5}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-muted-foreground leading-relaxed pb-6 pr-12">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}