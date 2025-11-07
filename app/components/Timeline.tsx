'use client';

import { useState } from 'react';
import { timelineEvents } from './timeline-data';

const shimmer =
  'before:absolute before:inset-0 before:rounded-3xl before:bg-gradient-to-br before:from-white/50 before:via-transparent before:to-white/40 before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-100';

const dotGradient = 'bg-gradient-to-br from-harvest to-dusk shadow-lg shadow-harvest/30';

export function Timeline() {
  const [activeId, setActiveId] = useState<number>(timelineEvents[0]?.id ?? 1);
  const activeEvent = timelineEvents.find((evt) => evt.id === activeId) ?? timelineEvents[0];

  return (
    <section className="grid gap-10 lg:grid-cols-[320px_1fr]">
      <aside className="relative rounded-3xl bg-white/70 p-6 shadow-2xl shadow-dusk/5 backdrop-blur-lg ring-1 ring-dusk/10">
        <div className="sticky top-6 space-y-6">
          <header>
            <p className="text-sm uppercase tracking-widest text-dusk/70">अध्याय</p>
            <h2 className="mt-1 font-display text-3xl text-dusk">दयालुता की परंपरा</h2>
            <p className="mt-3 text-sm leading-relaxed text-dusk/80">
              कहानी को क्रम से पढ़ें, या किसी भी दृश्य पर क्लिक करके उस पल में उतरें।
            </p>
          </header>
          <ol className="space-y-3 text-dusk/90">
            {timelineEvents.map((event) => {
              const isActive = event.id === activeId;
              return (
                <li key={event.id}>
                  <button
                    type="button"
                    onClick={() => setActiveId(event.id)}
                    className={`group relative flex w-full items-center gap-4 rounded-2xl border bg-white/80 px-4 py-3 text-left transition-all duration-300 ${
                      isActive
                        ? `${event.atmosphere.accent} border-2 shadow-[0_20px_40px_-24px_rgba(47,58,74,0.5)]`
                        : 'border-transparent hover:border-dusk/20 hover:shadow-lg'
                    } ${shimmer}`}
                  >
                    <span className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl text-2xl ${dotGradient}`}>
                      {event.icon}
                    </span>
                    <span>
                      <span className="font-semibold text-dusk">{event.title}</span>
                      <span className="block text-xs text-dusk/70">पल #{event.id}</span>
                    </span>
                  </button>
                </li>
              );
            })}
          </ol>
        </div>
      </aside>

      <article className="relative overflow-hidden rounded-3xl border border-white/40 bg-white/80 p-10 shadow-[0_40px_80px_-40px_rgba(47,58,74,0.35)] backdrop-blur-xl">
        <div
          className={`pointer-events-none absolute -left-24 top-20 h-96 w-96 rounded-full opacity-60 blur-3xl transition-colors duration-500 ${
            activeEvent.atmosphere.sky
          }`}
        ></div>
        <div
          className={`pointer-events-none absolute -bottom-28 -right-20 h-96 w-96 rounded-full opacity-40 blur-3xl transition-colors duration-500 ${
            activeEvent.atmosphere.ground
          }`}
        ></div>
        <div className="relative flex flex-col gap-6">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-dusk/20 bg-dusk/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-dusk/70">
            {activeEvent.icon} पृष्ठ {activeEvent.id}
          </span>
          <h3 className="font-display text-4xl text-dusk">{activeEvent.title}</h3>
          <p className="font-serif text-xl leading-relaxed text-dusk/90">{activeEvent.description}</p>
          <div className="mt-6 grid gap-4 rounded-2xl bg-gradient-to-br from-white/80 to-white/30 p-6 text-sm text-dusk/80">
            <p>
              यह दृश्य हमें याद दिलाता है कि करुणा का हर छोटा काम जीवन की राह में किसी न किसी मोड़ पर लौटकर आता है।
            </p>
            <p>एक पल ठहरकर सोचें—आज आप किस पर सद्भावना की बौछार बरसाएँगे?</p>
          </div>
        </div>
      </article>
    </section>
  );
}
