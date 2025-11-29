import React from 'react';
import { Bot, Zap, Cpu, Globe, Rocket, Shield, Brain, ArrowRight, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const Index = () => {
  return (
    <div className="relative min-h-[100dvh] w-full overflow-x-hidden bg-[#030305] text-white font-sans selection:bg-orange-500/30">
      
      {/* --- BACKGROUND EFFECTS (SMOKE & PARTICLES) --- */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* Tricolor Glows */}
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-orange-600/20 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute top-[40%] right-[-10%] w-[40vw] h-[40vw] bg-white/10 rounded-full blur-[100px] animate-pulse delay-700" />
        <div className="absolute bottom-[-10%] left-[20%] w-[50vw] h-[50vw] bg-green-600/20 rounded-full blur-[100px] animate-pulse delay-1000" />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]"></div>
      </div>

      {/* --- MAIN CONTENT --- */}
      <div className="relative z-10 flex flex-col min-h-[100dvh]">
        
        {/* HEADER / NAVBAR */}
        <header className="w-full p-5 flex justify-between items-center backdrop-blur-sm border-b border-white/5">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-orange-500 via-white to-green-500 rounded-lg p-[2px]">
              <div className="w-full h-full bg-black rounded-md flex items-center justify-center">
                <Bot className="text-white" size={24} />
              </div>
            </div>
            <div>
              <h1 className="font-['Rajdhani'] text-2xl font-bold tracking-wider leading-none">
                INDRESH <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">2.0</span>
              </h1>
              <p className="text-[10px] text-gray-400 tracking-[0.2em] font-bold">MADE IN BHARAT 🇮🇳</p>
            </div>
          </div>
          
          <div className="hidden md:flex gap-6 text-sm font-medium text-gray-300">
             <span className="hover:text-orange-400 cursor-pointer transition">Home</span>
             <span className="hover:text-white cursor-pointer transition">About</span>
             <span className="hover:text-green-400 cursor-pointer transition">Contact</span>
          </div>
        </header>

        {/* HERO SECTION */}
        <main className="flex-1 flex flex-col items-center justify-center text-center px-4 py-10">
          
          {/* Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-xs font-semibold tracking-wider uppercase text-gray-300 font-['Hind']">
              आत्मनिर्भर भारत का अपना AI
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-5xl md:text-8xl font-bold font-['Rajdhani'] leading-tight mb-6"
          >
            THE FUTURE IS <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-white to-green-500 drop-shadow-[0_0_15px_rgba(255,153,51,0.5)]">
              DIGITAL INDIA
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg md:text-xl max-w-2xl mb-10 font-['Hind'] font-light"
          >
            स्वदेशी तकनीक और आधुनिक AI का संगम। <br className="hidden md:block"/>
            Experience the power of <span className="text-white font-semibold">Gemini 2.5 Pro</span> & <span className="text-white font-semibold">Llama 3.1</span> integrated into one powerful platform.
          </motion.p>

          {/* --- MAIN ACTION BUTTON --- */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="relative group"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-orange-600 via-white to-green-600 rounded-full blur opacity-40 group-hover:opacity-75 transition duration-500"></div>
            <a href="https://api.indservices.site" className="relative">
              <Button className="h-16 px-10 rounded-full bg-black border border-white/20 text-xl font-bold tracking-wide hover:bg-white/10 transition-all duration-300 gap-3">
                CHAT WITH AI <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
          </motion.div>

          {/* Stats / Features Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 w-full max-w-4xl">
            {[
              { icon: <Brain className="text-orange-400"/>, label: "Smart AI", sub: "2.5 Pro Brain" },
              { icon: <Zap className="text-yellow-400"/>, label: "Super Fast", sub: "Groq Engine" },
              { icon: <Shield className="text-green-400"/>, label: "Secure", sub: "Digital Safety" },
              { icon: <Globe className="text-blue-400"/>, label: "Indian", sub: "Made for Bharat" },
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + (i * 0.1) }}
                className="p-4 rounded-2xl bg-white/5 border border-white/5 backdrop-blur-sm hover:bg-white/10 transition-all"
              >
                <div className="flex justify-center mb-3">{item.icon}</div>
                <div className="font-bold text-gray-200">{item.label}</div>
                <div className="text-xs text-gray-500 uppercase tracking-wider">{item.sub}</div>
              </motion.div>
            ))}
          </div>

        </main>

        {/* FOOTER BRANDING */}
        <footer className="w-full py-6 text-center relative z-20 border-t border-white/5 bg-black/40 backdrop-blur-md">
          <a 
            href="https://indreshdangi.github.io/indservices" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors group"
          >
            <span>Designed & Developed by</span>
            <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-green-400 group-hover:opacity-80">
              IND SERVICES
            </span>
            <ChevronRight size={14} className="text-gray-600 group-hover:text-white" />
          </a>
        </footer>

      </div>
    </div>
  );
};

export default Index;
