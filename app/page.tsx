import { Timeline } from './components/Timeline';

export default function Page() {
  return (
    <main className="mx-auto flex min-h-dvh max-w-6xl flex-col gap-20 px-6 py-16 lg:px-10">
      <header className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="space-y-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/70 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-dusk/70">
            🕊️🌾 प्रेरक कथा
          </span>
          <h1 className="font-display text-5xl leading-tight text-dusk">
            नेकी कभी बेकार नहीं जाती
          </h1>
          <p className="font-serif text-xl leading-relaxed text-dusk/90">
            कभी-कभी एक छोटा-सा दयालु कदम जीवन की अप्रत्याशित घड़ियों में नया प्रकाश बन जाता है। किसान और कबूतर की यह कहानी बताती है कि कृतज्ञता के पंख कितने ऊँचे उड़ सकते हैं।
          </p>
        </div>
        <div className="relative isolate overflow-hidden rounded-3xl bg-gradient-to-br from-sky/50 via-white/80 to-harvest/40 p-8 shadow-[0_40px_80px_-60px_rgba(47,58,74,0.8)] backdrop-blur-xl">
          <div className="absolute inset-x-8 top-8 h-36 rounded-2xl bg-gradient-to-b from-white/40 to-transparent blur-2xl"></div>
          <div className="relative space-y-4 text-center font-serif text-lg text-dusk/90">
            <p>“जिस हाथ ने बंधन काटे, उसी हाथ को कबूतर ने सुरक्षा का आशीर्वाद दिया।”</p>
            <p>दयालुता का हर बीज, समय आने पर फल अवश्य देता है।</p>
            <span className="inline-flex items-center gap-2 rounded-full bg-dusk/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.28em] text-dusk/80">
              विश्वास • करुणा • कृतज्ञता
            </span>
          </div>
        </div>
      </header>

      <Timeline />

      <footer className="rounded-3xl border border-white/40 bg-white/80 p-8 text-center text-sm text-dusk/70 shadow-[0_30px_80px_-60px_rgba(47,58,74,0.6)] backdrop-blur-xl">
        <p>
          किसान की मुस्कान हमें सिखाती है — अच्छाई कभी खोती नहीं, वह हमेशा किसी न किसी रूप में लौटती है।
        </p>
      </footer>
    </main>
  );
}
