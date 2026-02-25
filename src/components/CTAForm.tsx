import type React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function CTAForm() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", comment: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.name && form.phone) {
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <div className="text-center py-8">
        <p className="font-serif text-2xl text-primary mb-2">Заявка принята!</p>
        <p className="text-muted-foreground">
          Свяжусь с вами в ближайшее время для обсуждения деталей и замера.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-lg mx-auto">
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="space-y-1">
          <label className="text-xs tracking-widest uppercase text-muted-foreground">Ваше имя *</label>
          <Input
            type="text"
            placeholder="Иван"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
            className="bg-card border-border text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-primary"
          />
        </div>
        <div className="space-y-1">
          <label className="text-xs tracking-widest uppercase text-muted-foreground">Телефон *</label>
          <Input
            type="tel"
            placeholder="+7 (___) ___-__-__"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            required
            className="bg-card border-border text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-primary"
          />
        </div>
      </div>
      <div className="space-y-1">
        <label className="text-xs tracking-widest uppercase text-muted-foreground">Email (необязательно)</label>
        <Input
          type="email"
          placeholder="ivan@example.com"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="bg-card border-border text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-primary"
        />
      </div>
      <div className="space-y-1">
        <label className="text-xs tracking-widest uppercase text-muted-foreground">Что хотите установить?</label>
        <textarea
          placeholder="Тип потолка, освещение, ниша для штор..."
          value={form.comment}
          onChange={(e) => setForm({ ...form, comment: e.target.value })}
          rows={3}
          className="w-full px-3 py-2 bg-card border border-border text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none rounded-none resize-none text-sm"
        />
      </div>
      <Button
        type="submit"
        className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-medium tracking-wider uppercase text-sm py-6 transition-all duration-300"
      >
        Отправить заявку
      </Button>
    </form>
  );
}
