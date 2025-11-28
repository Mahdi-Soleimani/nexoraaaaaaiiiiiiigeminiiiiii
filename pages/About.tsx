import React from 'react';
import { Linkedin, Twitter } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-24">
      
      {/* Story Section */}
      <section className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">داستان نکسورا</h1>
          <div className="space-y-4 text-slate-400 leading-relaxed text-lg text-justify">
            <p>
              نکسورا در سال ۱۴۰۱ با یک هدف ساده اما بلندپروازانه متولد شد: 
              <span className="text-white font-bold px-1">آوردن هوش مصنوعی از آزمایشگاه‌ها به قلب کسب‌وکارهای ایرانی.</span>
            </p>
            <p>
              ما تیمی از متخصصان داده، توسعه‌دهندگان نرم‌افزار و استراتژیست‌های کسب‌وکار هستیم که معتقدیم تکنولوژی باید در خدمت انسان باشد، نه جایگزین آن. در دنیایی که هر روز پیچیده‌تر می‌شود، ما سادگی و کارآمدی را برای سازمان شما به ارمغان می‌آوریم.
            </p>
            <p>
              امروز، نکسورا افتخار همکاری با بیش از ۵۰ شرکت بزرگ و استارتاپ پیشرو را دارد و در تلاش است تا زیرساخت‌های هوشمند فردا را بسازد.
            </p>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-to-r from-primary to-cyan-400 rounded-3xl opacity-20 blur-2xl"></div>
          <img src="https://picsum.photos/800/800?random=30" alt="Office" className="relative rounded-3xl border border-slate-700 shadow-2xl" />
        </div>
      </section>

      {/* Values */}
      <section className="grid md:grid-cols-3 gap-8 text-center">
        {[
          { title: "نوآوری مداوم", desc: "ما هرگز به وضع موجود راضی نیستیم و همیشه به دنبال راهکارهای جدیدتر هستیم." },
          { title: "شفافیت و اعتماد", desc: "با مشتریانمان مثل شرکای تجاری رفتار می‌کنیم. هیچ هزینه پنهانی وجود ندارد." },
          { title: "کیفیت جهانی", desc: "استانداردهای ما فراتر از مرزهاست. ما محصولاتی در کلاس جهانی می‌سازیم." },
        ].map((val, i) => (
          <div key={i} className="bg-surface p-8 rounded-2xl border border-slate-800 hover:border-primary/50 transition-colors">
            <h3 className="text-xl font-bold text-white mb-3">{val.title}</h3>
            <p className="text-slate-400">{val.desc}</p>
          </div>
        ))}
      </section>

      {/* Team */}
      <section>
        <h2 className="text-3xl font-bold text-white mb-12 text-center">تیم متخصص ما</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {[
            { name: "آرش کمانگیر", role: "مدیرعامل", img: 31 },
            { name: "سارا راد", role: "مدیر فنی AI", img: 32 },
            { name: "کاوه آهنگر", role: "توسعه‌دهنده ارشد", img: 33 },
            { name: "مریم نوری", role: "مدیر محصول", img: 34 },
          ].map((member, i) => (
            <div key={i} className="group relative">
              <div className="relative overflow-hidden rounded-2xl aspect-[3/4] mb-4">
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>
                <img src={`https://picsum.photos/400/500?random=${member.img}`} alt={member.name} className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-500" />
                
                {/* Social Overlay */}
                <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-3 translate-y-10 group-hover:translate-y-0 transition-transform duration-300 z-20">
                  <button className="bg-white/20 backdrop-blur-md p-2 rounded-full text-white hover:bg-primary transition-colors"><Linkedin size={18} /></button>
                  <button className="bg-white/20 backdrop-blur-md p-2 rounded-full text-white hover:bg-cyan-500 transition-colors"><Twitter size={18} /></button>
                </div>
              </div>
              <h3 className="text-lg font-bold text-white text-center">{member.name}</h3>
              <p className="text-primary text-sm text-center font-medium">{member.role}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;