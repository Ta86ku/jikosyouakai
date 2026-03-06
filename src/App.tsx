import React from 'react';
import { motion } from 'motion/react';
import { User, Calendar, Trophy, MapPin, Github, Twitter, Mail, ExternalLink } from 'lucide-react';

export default function App() {
  const profile = {
    name: "酒本 拓真",
    nameEn: "Takuma Sakamoto",
    age: 23,
    hobby: "サッカー",
    origin: "日本",
    bio: "こんにちは！酒本拓真です。23歳で、日本出身です。趣味はサッカーで、チームプレイと戦略的な動きが大好きです。現在は営業職として、お客様の課題解決に真摯に向き合い、最適な提案を行うことに情熱を注いでいます。"
  };

  return (
    <div className="min-h-screen bg-[#fafaf9] text-[#1c1917] font-sans selection:bg-emerald-100 selection:text-emerald-900">
      {/* Hero Section */}
      <header className="relative h-[70vh] flex items-center justify-center overflow-hidden border-b border-stone-200">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.05),transparent_70%)]" />
          <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none" 
               style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 30 L30 0 M30 30 L60 30 M30 30 L30 60 M30 30 L0 30' stroke='%23000' fill='none' /%3E%3C/svg%3E")` }} />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center"
          >
            <span className="inline-block px-3 py-1 mb-6 text-xs font-semibold tracking-widest uppercase border border-stone-300 rounded-full text-stone-500">
              Personal Profile
            </span>
            <h1 className="text-7xl md:text-9xl font-bold tracking-tighter mb-4">
              {profile.name}
            </h1>
            <p className="text-xl md:text-2xl font-light text-stone-500 tracking-tight">
              {profile.nameEn}
            </p>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <div className="w-px h-12 bg-stone-300 animate-bounce" />
        </motion.div>
      </header>

      {/* Content Section */}
      <main className="container mx-auto px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Left Column: Info Cards */}
          <div className="lg:col-span-5 space-y-8">
            <motion.div 
              whileHover={{ y: -5 }}
              className="p-8 bg-white border border-stone-200 rounded-2xl shadow-sm"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl">
                  <User size={24} />
                </div>
                <h2 className="text-xl font-semibold">基本情報</h2>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-center justify-between border-b border-stone-100 pb-4">
                  <div className="flex items-center gap-3 text-stone-500">
                    <Calendar size={18} />
                    <span>年齢</span>
                  </div>
                  <span className="font-medium">{profile.age} 歳</span>
                </div>
                
                <div className="flex items-center justify-between border-b border-stone-100 pb-4">
                  <div className="flex items-center gap-3 text-stone-500">
                    <Trophy size={18} />
                    <span>趣味</span>
                  </div>
                  <span className="font-medium">{profile.hobby}</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3 text-stone-500">
                    <MapPin size={18} />
                    <span>出身</span>
                  </div>
                  <span className="font-medium">{profile.origin}</span>
                </div>
              </div>
            </motion.div>

            <div className="grid grid-cols-2 gap-4">
              <a href="#" className="flex items-center justify-center gap-2 p-4 bg-stone-900 text-white rounded-xl hover:bg-stone-800 transition-colors">
                <Github size={20} />
                <span className="text-sm font-medium">GitHub</span>
              </a>
              <a href="#" className="flex items-center justify-center gap-2 p-4 border border-stone-200 rounded-xl hover:bg-stone-50 transition-colors">
                <Twitter size={20} className="text-sky-500" />
                <span className="text-sm font-medium">Twitter</span>
              </a>
            </div>
          </div>

          {/* Right Column: Bio & Details */}
          <div className="lg:col-span-7">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-12"
            >
              <section>
                <h3 className="text-sm font-bold uppercase tracking-widest text-emerald-600 mb-6">About Me</h3>
                <p className="text-2xl md:text-3xl font-light leading-relaxed text-stone-700">
                  {profile.bio}
                </p>
              </section>

              <section className="pt-8 border-t border-stone-200">
                <h3 className="text-sm font-bold uppercase tracking-widest text-stone-400 mb-8">Skills & Interests</h3>
                <div className="flex flex-wrap gap-3">
                  {['Sales Strategy', 'Communication', 'Negotiation', 'Soccer Strategy', 'Team Building', 'Client Relations'].map((skill) => (
                    <span key={skill} className="px-4 py-2 bg-stone-100 text-stone-600 rounded-full text-sm font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </section>

              <div className="pt-8">
                <button className="group flex items-center gap-3 text-lg font-semibold hover:text-emerald-600 transition-colors">
                  <Mail size={20} />
                  <span>お問い合わせはこちら</span>
                  <ExternalLink size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-12 border-t border-stone-200 bg-white">
        <div className="container mx-auto px-6 flex flex-col md:row items-center justify-between gap-6">
          <p className="text-stone-400 text-sm">
            © 2024 {profile.nameEn}. Built with React & Tailwind.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-stone-400 hover:text-stone-900 transition-colors text-sm font-medium">Privacy</a>
            <a href="#" className="text-stone-400 hover:text-stone-900 transition-colors text-sm font-medium">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
