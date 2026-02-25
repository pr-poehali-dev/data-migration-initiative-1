import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const MATERIALS = [
  { label: "MSD Classic (эконом)", value: "classic", prices: { matte: 450, satin: 500, gloss: 550 } },
  { label: "MSD Premium (премиум)", value: "premium", prices: { matte: 700, satin: 750, gloss: 800 } },
  { label: "MSD Evolution (люкс)", value: "evolution", prices: { matte: 900, satin: 950, gloss: 1000 } },
];

const FINISHES = [
  { label: "Матовый", value: "matte" },
  { label: "Сатиновый", value: "satin" },
  { label: "Глянцевый", value: "gloss" },
];

const PROFILES = [
  { label: "Обычный стеновой (включено)", value: 0 },
  { label: "Теневой профиль (+150 ₽/м²)", value: 150 },
  { label: "Двухуровневый (+200 ₽/м²)", value: 200 },
];

const LIGHTING = [
  { label: "Без светильников", value: 0 },
  { label: "Обычные встраиваемые (500 ₽/шт)", value: 500 },
  { label: "LED-споты (800 ₽/шт)", value: 800 },
  { label: "Световые линии (1200 ₽/м)", value: 1200 },
];

export function Calculator() {
  const [area, setArea] = useState("");
  const [material, setMaterial] = useState("premium");
  const [finish, setFinish] = useState("matte");
  const [profile, setProfile] = useState(0);
  const [lightingPrice, setLightingPrice] = useState(0);
  const [lightingCount, setLightingCount] = useState(0);
  const [comment, setComment] = useState("");
  const [result, setResult] = useState<number | null>(null);

  const calculate = () => {
    const sq = parseFloat(area);
    if (!sq || sq <= 0) return;
    const mat = MATERIALS.find((m) => m.value === material)!;
    const basePrice = mat.prices[finish as keyof typeof mat.prices];
    const total = sq * (basePrice + profile) + lightingPrice * lightingCount;
    setResult(total);
  };

  return (
    <div className="space-y-6">
      <div className="grid sm:grid-cols-2 gap-6">
        <div className="space-y-1">
          <label className="text-xs tracking-widest uppercase text-muted-foreground">Площадь (м²)</label>
          <Input
            type="number"
            placeholder="например, 20"
            value={area}
            onChange={(e) => { setArea(e.target.value); setResult(null); }}
            min="1"
            className="bg-card border-border text-foreground placeholder:text-muted-foreground focus:border-primary"
          />
        </div>
        <div className="space-y-1">
          <label className="text-xs tracking-widest uppercase text-muted-foreground">Материал</label>
          <select
            value={material}
            onChange={(e) => { setMaterial(e.target.value); setResult(null); }}
            className="w-full px-3 py-2 bg-card border border-border text-foreground focus:border-primary focus:outline-none text-sm h-10"
          >
            {MATERIALS.map((m) => (
              <option key={m.value} value={m.value}>{m.label}</option>
            ))}
          </select>
        </div>
        <div className="space-y-1">
          <label className="text-xs tracking-widest uppercase text-muted-foreground">Фактура</label>
          <select
            value={finish}
            onChange={(e) => { setFinish(e.target.value); setResult(null); }}
            className="w-full px-3 py-2 bg-card border border-border text-foreground focus:border-primary focus:outline-none text-sm h-10"
          >
            {FINISHES.map((f) => (
              <option key={f.value} value={f.value}>{f.label}</option>
            ))}
          </select>
        </div>
        <div className="space-y-1">
          <label className="text-xs tracking-widest uppercase text-muted-foreground">Тип профиля</label>
          <select
            value={profile}
            onChange={(e) => { setProfile(Number(e.target.value)); setResult(null); }}
            className="w-full px-3 py-2 bg-card border border-border text-foreground focus:border-primary focus:outline-none text-sm h-10"
          >
            {PROFILES.map((p) => (
              <option key={p.value} value={p.value}>{p.label}</option>
            ))}
          </select>
        </div>
        <div className="space-y-1">
          <label className="text-xs tracking-widest uppercase text-muted-foreground">Освещение</label>
          <select
            value={lightingPrice}
            onChange={(e) => { setLightingPrice(Number(e.target.value)); setLightingCount(0); setResult(null); }}
            className="w-full px-3 py-2 bg-card border border-border text-foreground focus:border-primary focus:outline-none text-sm h-10"
          >
            {LIGHTING.map((l) => (
              <option key={l.value} value={l.value}>{l.label}</option>
            ))}
          </select>
        </div>
        {lightingPrice > 0 && (
          <div className="space-y-1">
            <label className="text-xs tracking-widest uppercase text-muted-foreground">Количество</label>
            <Input
              type="number"
              placeholder="0"
              value={lightingCount || ""}
              onChange={(e) => { setLightingCount(Number(e.target.value)); setResult(null); }}
              min="0"
              className="bg-card border-border text-foreground placeholder:text-muted-foreground focus:border-primary"
            />
          </div>
        )}
      </div>

      <div className="space-y-1">
        <label className="text-xs tracking-widest uppercase text-muted-foreground">Дополнительные пожелания</label>
        <textarea
          placeholder="Ниша для штор, двухуровневый и т.д."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          rows={2}
          className="w-full px-3 py-2 bg-card border border-border text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none rounded-none resize-none text-sm"
        />
      </div>

      <Button
        onClick={calculate}
        className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-medium tracking-wider uppercase text-sm py-6 transition-all duration-300"
      >
        Рассчитать
      </Button>

      {result !== null && (
        <div className="border border-primary/50 p-6 text-center">
          <p className="text-xs tracking-widest uppercase text-muted-foreground mb-2">Примерная стоимость</p>
          <p className="font-serif text-4xl text-primary">
            {result.toLocaleString("ru-RU")} ₽
          </p>
          <p className="text-muted-foreground text-sm mt-3">
            Точная цена — после бесплатного замера. Оставьте заявку ниже.
          </p>
        </div>
      )}
    </div>
  );
}
