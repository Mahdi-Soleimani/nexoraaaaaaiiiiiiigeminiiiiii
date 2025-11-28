import React from 'react';
import { Briefcase, MapPin, Clock, UploadCloud } from 'lucide-react';
import Button from '../components/Button';

const Careers: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-6">به تیم نکسورا بپیوندید</h1>
        <p className="text-slate-400 max-w-2xl mx-auto">
          ما به دنبال افراد خلاق، پرشور و یادگیرنده هستیم. اگر عاشق هوش مصنوعی هستید و می‌خواهید روی لبه تکنولوژی حرکت کنید، جای شما اینجا خالیست.
        </p>
      </div>

      <div className="space-y-6">
        {[
          { title: "Senior Python Developer", type: "تمام وقت", location: "تهران / ریموت" },
          { title: "AI Research Engineer", type: "تمام وقت", location: "تهران" },
          { title: "Frontend Developer (React)", type: "پروژه‌ای", location: "ریموت" },
        ].map((job, i) => (
          <div key={i} className="bg-surface border border-slate-800 p-6 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 hover:border-slate-600 transition-colors">
            <div>
              <h3 className="text-xl font-bold text-white mb-2">{job.title}</h3>
              <div className="flex gap-4 text-sm text-slate-500">
                <span className="flex items-center gap-1"><Briefcase size={14} /> {job.type}</span>
                <span className="flex items-center gap-1"><MapPin size={14} /> {job.location}</span>
                <span className="flex items-center gap-1"><Clock size={14} /> فوری</span>
              </div>
            </div>
            <Button variant="secondary" size="sm">ارسال رزومه</Button>
          </div>
        ))}
      </div>

      {/* General Application */}
      <div className="bg-slate-900/50 border border-dashed border-slate-700 rounded-2xl p-8 text-center">
        <UploadCloud className="w-12 h-12 text-slate-500 mx-auto mb-4" />
        <h3 className="text-white font-bold mb-2">موقعیت شغلی مورد نظر خود را پیدا نکردید؟</h3>
        <p className="text-slate-400 text-sm mb-6">رزومه خود را برای ما بفرستید. ما همیشه به دنبال استعدادهای جدید هستیم.</p>
        <Button variant="outline">ارسال رزومه عمومی</Button>
      </div>
    </div>
  );
};

export default Careers;