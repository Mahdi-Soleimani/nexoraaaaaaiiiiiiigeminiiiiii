import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import Button from '../components/Button';

const Contact: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid md:grid-cols-2 gap-16">
        
        {/* Contact Info */}
        <div className="space-y-8">
          <div>
            <h1 className="text-4xl font-bold text-white mb-6">تماس با نکسورا</h1>
            <p className="text-slate-400 leading-relaxed">
              برای مشاوره رایگان یا شروع یک پروژه جدید، فرم روبرو را پر کنید یا از طریق راه‌های ارتباطی زیر با ما در تماس باشید.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-surface border border-slate-800 flex items-center justify-center text-primary shrink-0">
                <Phone size={24} />
              </div>
              <div>
                <h3 className="text-white font-bold mb-1">تلفن تماس</h3>
                <p className="text-slate-400 ltr text-right" dir="ltr">021 - 88 12 34 56</p>
                <p className="text-slate-500 text-sm">شنبه تا چهارشنبه، ۹ تا ۱۷</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-surface border border-slate-800 flex items-center justify-center text-cyan-400 shrink-0">
                <Mail size={24} />
              </div>
              <div>
                <h3 className="text-white font-bold mb-1">ایمیل</h3>
                <p className="text-slate-400 font-mono">hello@nexora.ai</p>
                <p className="text-slate-500 text-sm">پاسخگویی در کمتر از ۲ ساعت</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-surface border border-slate-800 flex items-center justify-center text-purple-400 shrink-0">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="text-white font-bold mb-1">دفتر مرکزی</h3>
                <p className="text-slate-400">تهران، خیابان ولیعصر، پارک علم و فناوری</p>
              </div>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="bg-surface p-8 rounded-3xl border border-slate-800 shadow-2xl">
          <h2 className="text-2xl font-bold text-white mb-6">فرم درخواست مشاوره</h2>
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-slate-400 text-sm mb-2">نام و نام خانوادگی</label>
                <input type="text" className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" />
              </div>
              <div>
                <label className="block text-slate-400 text-sm mb-2">شماره تماس</label>
                <input type="tel" className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" />
              </div>
            </div>
            
            <div>
              <label className="block text-slate-400 text-sm mb-2">نام سازمان / شرکت</label>
              <input type="text" className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" />
            </div>

            <div>
              <label className="block text-slate-400 text-sm mb-2">موضوع درخواست</label>
              <select className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors">
                <option>مشاوره عمومی AI</option>
                <option>سفارش ربات تلگرام</option>
                <option>اتوماسیون اداری</option>
                <option>سایر موارد</option>
              </select>
            </div>

            <div>
              <label className="block text-slate-400 text-sm mb-2">توضیحات تکمیلی</label>
              <textarea rows={4} className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"></textarea>
            </div>

            <Button className="w-full gap-2 text-lg">
              ارسال درخواست
              <Send size={18} />
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;