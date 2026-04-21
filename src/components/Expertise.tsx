import { useEffect, useRef, useState } from "react"
import { HighlightedText } from "./HighlightedText"
import Icon from "@/components/ui/icon"

const expertiseAreas = [
  {
    title: "Евроокна ПВХ",
    description: "Производим окна из профильных систем REHAU, VEKA и KBE. Однокамерные, двухкамерные и трёхкамерные стеклопакеты для любых условий.",
    icon: "AppWindow",
  },
  {
    title: "Балконы и лоджии",
    description:
      "Остекление балконов под ключ: холодное и тёплое остекление, обшивка, утепление, полы и потолки. Превращаем балкон в полноценную комнату.",
    icon: "Building2",
  },
  {
    title: "Входные группы",
    description:
      "Пластиковые входные двери и витражи для частных домов и коммерческих объектов. Надёжно, тепло, эстетично.",
    icon: "DoorOpen",
  },
  {
    title: "Монтаж и сервис",
    description:
      "Профессиональный монтаж с демонтажем старых окон, вывозом мусора и отделкой откосов. Гарантийное и послегарантийное обслуживание.",
    icon: "Wrench",
  },
]

export function Expertise() {
  const [visibleItems, setVisibleItems] = useState<number[]>([])
  const sectionRef = useRef<HTMLElement>(null)
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute("data-index"))
          if (entry.isIntersecting) {
            setVisibleItems((prev) => [...new Set([...prev, index])])
          }
        })
      },
      { threshold: 0.2 },
    )

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section id="services" ref={sectionRef} className="py-32 md:py-29">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mb-20">
          <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-6">Наши услуги</p>
          <h2 className="text-6xl font-medium leading-[1.15] tracking-tight mb-6 text-balance lg:text-8xl">
            <HighlightedText>Полный цикл</HighlightedText> —
            <br />
            от замера до монтажа
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Более 15 лет на рынке. Свыше 10 000 установленных окон и балконов по всему городу. Работаем быстро, чисто и с гарантией.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-16">
          {expertiseAreas.map((area, index) => {
            return (
              <div
                key={area.title}
                ref={(el) => {
                  itemRefs.current[index] = el
                }}
                data-index={index}
                className={`relative pl-8 border-l border-border transition-all duration-700 ${
                  visibleItems.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div
                  className={`transition-all duration-1000 ${
                    visibleItems.includes(index) ? "animate-draw-stroke" : ""
                  }`}
                  style={{
                    transitionDelay: `${index * 150}ms`,
                  }}
                >
                  <Icon name={area.icon} size={40} className="mb-4 text-foreground" />
                </div>
                <h3 className="text-xl font-medium mb-4">{area.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{area.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}