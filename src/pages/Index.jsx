
import React, { useState, useEffect } from 'react';
import { Search, Bot, ArrowLeft, Code, Calculator, PenTool, Cpu, Zap, CircuitBoard, MessageCircle, Brain, Layers, Shield, Globe, Database, Sparkles, Eye, Network, Star, Flag, Heart, Rocket } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Index = () => {
  const [chatOpen, setChatOpen] = useState(false);
  const [chatMessage, setChatMessage] = useState('');
  const [messages, setMessages] = useState([
    { type: 'bot', text: 'Hello! I am Indresh 2.0. Ready to assist you with Digital India initiatives!' }
  ]);

  const handleBackToWebsite = () => {
    window.open('https://indservices.site', '_blank');
  };

  const handleAIService = (service) => {
    console.log(`Accessing ${service} service`);
    if (service === 'ai-agent') {
      window.open('https://indreshdangi.github.io/Ai', '_blank');
    }
  };

  const handleSendMessage = () => {
    if (chatMessage.trim()) {
      setMessages([...messages, 
        { type: 'user', text: chatMessage },
        { type: 'bot', text: 'I understand your request. Ready to assist you under Digital India initiative. Use the AI Agent link for complete features.' }
      ]);
      setChatMessage('');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-slate-900 to-black text-white relative overflow-hidden font-inter">
      {/* Enhanced Background with "भारत" */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large "भारत" Background Text */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[20rem] font-bold text-white opacity-[0.02] select-none pointer-events-none font-hindi">
          भारत
        </div>
        
        {/* Indian Flag Colors Particles */}
        <div className="absolute top-10 left-10 w-3 h-3 bg-orange-500 rounded-full opacity-80 animate-ping"></div>
        <div className="absolute top-32 right-20 w-2 h-2 bg-green-500 rounded-full opacity-90 animate-pulse"></div>
        <div className="absolute bottom-40 left-1/3 w-2.5 h-2.5 bg-blue-600 rounded-full opacity-70 animate-bounce"></div>
        <div className="absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-orange-400 rounded-full opacity-60 animate-pulse"></div>
        <div className="absolute bottom-20 right-1/4 w-2 h-2 bg-green-400 rounded-full opacity-80 animate-ping"></div>
        
        {/* Tricolor Gradient Orbs */}
        <div className="absolute top-20 left-20 w-40 h-40 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full opacity-10 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-gradient-to-r from-green-500 to-green-600 rounded-full opacity-10 blur-3xl animate-bounce"></div>
        <div className="absolute top-1/2 left-1/2 w-44 h-44 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full opacity-10 blur-3xl animate-ping"></div>
        
        {/* Large tech elements with Indian colors */}
        <CircuitBoard className="absolute top-5 right-1/4 text-orange-400 opacity-5 animate-pulse" size={350} />
        <Cpu className="absolute bottom-10 left-10 text-green-400 opacity-5 animate-bounce" size={250} />
        <Network className="absolute top-1/3 left-1/4 text-blue-400 opacity-5 animate-pulse" size={180} />
        <Brain className="absolute bottom-1/3 right-10 text-orange-400 opacity-5 animate-bounce" size={220} />
        <Flag className="absolute top-1/4 right-1/3 text-green-400 opacity-5 animate-pulse" size={160} />
        
        {/* Enhanced Grid with Tricolor */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,153,51,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(19,136,8,0.03)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
        
        {/* Floating Ashoka Chakra */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 border-4 border-blue-600 rounded-full opacity-20 animate-spin-slow">
          <div className="absolute inset-4 border-2 border-blue-500 rounded-full">
            <div className="absolute inset-2 border border-blue-400 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Header with Indian Branding */}
      <header className="relative z-10 bg-black/60 backdrop-blur-xl border-b border-orange-500/30 shadow-2xl">
        <div className="container mx-auto flex justify-between items-center py-6">
          <div className="flex items-center space-x-6">
            <Button 
              onClick={handleBackToWebsite}
              variant="outline" 
              className="border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-white transition-all duration-300 backdrop-blur-sm bg-black/20 font-semibold tracking-wide"
            >
              <ArrowLeft size={18} className="mr-2" />
              Back to IND SERVICES
            </Button>
            <div className="flex items-center space-x-4">
              <div className="text-3xl font-bold bg-gradient-to-r from-orange-400 via-white to-green-400 bg-clip-text text-transparent tracking-wider">
                🇮🇳 INDRESH 2.0 
              </div>
              <div className="text-lg font-semibold text-blue-400 tracking-wide">
                India's AI
              </div>
            </div>
            <div className="flex items-center space-x-3 text-green-400">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-bold tracking-wide">DIGITAL INDIA ONLINE</span>
            </div>
          </div>
          <nav>
            <ul className="flex space-x-8">
              {['Neural India', 'Digital India', 'Make in India AI', 'Support'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-300 hover:text-orange-400 transition-all duration-300 relative group font-medium tracking-wide">
                    {item}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-400 to-green-400 transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="relative">
            <Input 
              type="text" 
              placeholder="Search Indian AI..." 
              className="pl-12 pr-4 py-3 rounded-full bg-black/70 border-orange-500/40 text-white placeholder:text-gray-400 backdrop-blur-sm focus:border-orange-400 transition-all duration-300 w-64 font-medium" 
            />
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-orange-400" size={20} />
          </div>
        </div>
      </header>

      {/* Hero Section with Indian Theme */}
      <section className="relative z-10 py-24 text-center">
        <div className="container mx-auto">
          {/* Indian Flag Animation */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-white to-green-400 rounded-full blur-2xl opacity-40 animate-pulse"></div>
              <div className="relative bg-gradient-to-r from-orange-500 via-white to-green-500 p-1 rounded-full">
                <div className="bg-black rounded-full p-6">
                  <Bot size={120} className="relative text-blue-400 animate-bounce" />
                  <Zap className="absolute -top-4 -right-4 text-orange-400 animate-ping" size={32} />
                  <Eye className="absolute -bottom-3 -left-3 text-green-400 animate-pulse" size={24} />
                  <Star className="absolute top-0 left-0 text-blue-400 animate-spin" size={20} />
                </div>
              </div>
            </div>
          </div>
          
          <div className="mb-6">
            <h1 className="text-8xl font-extrabold mb-4 bg-gradient-to-r from-orange-400 via-white to-green-400 bg-clip-text text-transparent animate-pulse tracking-wider">
              INDRESH 2.0
            </h1>
            <div className="text-3xl font-bold bg-gradient-to-r from-orange-500 to-green-500 bg-clip-text text-transparent mb-4 tracking-wider">
              🚀 DIGITAL INDIA AI REVOLUTION 🚀
            </div>
          </div>
          
          <p className="text-xl mb-4 text-gray-300 max-w-4xl mx-auto leading-relaxed font-medium tracking-wide">
            Indigenous Artificial Intelligence | Quantum Computing | Deep Learning Solutions
            <br />
            <span className="text-orange-400 font-bold">Make in India AI Technology</span>
          </p>
          <p className="text-lg mb-8 text-green-400 font-mono bg-black/30 inline-block px-6 py-2 rounded-full tracking-wider">
            {'>'} Indian AI Systems Initializing... Ready for Digital India Interface
          </p>
          
          {/* Enhanced Chat Interface */}
          <div className="flex justify-center space-x-6 mb-10">
            <Button 
              onClick={() => setChatOpen(!chatOpen)}
              className="bg-gradient-to-r from-orange-500 via-white to-green-500 hover:from-orange-600 hover:to-green-600 text-black font-bold py-5 px-10 rounded-full transform hover:scale-105 transition-all duration-300 shadow-2xl border-2 border-blue-400 tracking-wide"
            >
              <MessageCircle className="mr-3" size={28} />
              Chat with INDRESH 2.0
            </Button>
            <Button 
              onClick={() => handleAIService('ai-agent')}
              variant="outline"
              className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-bold py-5 px-10 rounded-full transform hover:scale-105 transition-all duration-300 backdrop-blur-sm bg-black/20 tracking-wide"
            >
              <Rocket className="mr-3" size={28} />
              Full AI Interface
            </Button>
          </div>

          {/* Enhanced Chat Window */}
          {chatOpen && (
            <div className="max-w-lg mx-auto bg-gradient-to-br from-black/80 to-gray-900/80 backdrop-blur-2xl rounded-3xl border-2 border-orange-500/40 p-8 shadow-2xl animate-fade-in">
              <div className="flex items-center justify-center mb-6">
                <div className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-green-400 bg-clip-text text-transparent tracking-wide">
                  🇮🇳 India's AI Assistant
                </div>
              </div>
              <div className="h-80 overflow-y-auto mb-6 space-y-4 scrollbar-thin scrollbar-thumb-orange-500">
                {messages.map((msg, index) => (
                  <div key={index} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-xs p-4 rounded-2xl font-medium ${
                      msg.type === 'user' 
                        ? 'bg-gradient-to-r from-orange-500 to-green-500 text-white' 
                        : 'bg-gray-800/80 text-orange-400 border-2 border-orange-500/30'
                    }`}>
                      {msg.text}
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex space-x-3">
                <Input
                  value={chatMessage}
                  onChange={(e) => setChatMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Type your message..."
                  className="flex-1 bg-black/60 border-orange-500/40 text-white placeholder:text-gray-400 rounded-xl py-3 font-medium"
                />
                <Button onClick={handleSendMessage} className="bg-gradient-to-r from-orange-500 to-green-500 hover:from-orange-600 hover:to-green-600 px-6 rounded-xl">
                  <MessageCircle size={20} />
                </Button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* AI Services Section with Indian Theme */}
      <section className="relative z-10 py-20">
        <div className="container mx-auto">
          <h2 className="text-6xl font-bold mb-6 text-center bg-gradient-to-r from-orange-400 via-white to-green-400 bg-clip-text text-transparent tracking-wider">
            Indian AI Services
          </h2>
          <p className="text-center text-gray-400 mb-16 font-mono text-lg tracking-wider">
            {'>'} Indigenous AI-Powered Solutions for Digital India Future
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <Card className="bg-gradient-to-br from-black/80 to-gray-900/60 backdrop-blur-2xl border-2 border-orange-500/40 hover:border-orange-400/80 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl group">
              <CardHeader>
                <div className="flex items-center space-x-4 mb-6">
                  <div className="relative">
                    <PenTool className="text-orange-400 group-hover:animate-bounce" size={56} />
                    <Sparkles className="absolute -top-2 -right-2 text-green-400 animate-pulse" size={24} />
                  </div>
                  <Heart className="text-blue-400 animate-pulse" size={28} />
                </div>
                <CardTitle className="text-white text-2xl font-bold tracking-wide">Write with INDRESH 2.0</CardTitle>
                <CardDescription className="text-gray-400 text-base font-medium">
                  Advanced neural language processing, creative content, technical documentation and AI-powered writing in multiple Indian languages.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button 
                  onClick={() => handleAIService('writing')}
                  variant="outline" 
                  className="w-full border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-black transition-all duration-300 py-3 text-lg font-bold tracking-wide"
                >
                  <Brain className="mr-3" size={20} />
                  Indigenous Writing
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-black/80 to-gray-900/60 backdrop-blur-2xl border-2 border-green-500/40 hover:border-green-400/80 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl group">
              <CardHeader>
                <div className="flex items-center space-x-4 mb-6">
                  <div className="relative">
                    <Code className="text-green-400 group-hover:animate-bounce" size={56} />
                    <Layers className="absolute -top-2 -right-2 text-blue-400 animate-pulse" size={24} />
                  </div>
                  <Flag className="text-orange-400 animate-pulse" size={28} />
                </div>
                <CardTitle className="text-white text-2xl font-bold tracking-wide">Coding Assistant</CardTitle>
                <CardDescription className="text-gray-400 text-base font-medium">
                  Advanced code generation, debugging, optimization with quantum algorithms for Digital India development initiatives.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button 
                  onClick={() => handleAIService('coding')}
                  variant="outline" 
                  className="w-full border-green-400 text-green-400 hover:bg-green-400 hover:text-black transition-all duration-300 py-3 text-lg font-bold tracking-wide"
                >
                  <Cpu className="mr-3" size={20} />
                  Indian Quantum Coding
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-black/80 to-gray-900/60 backdrop-blur-2xl border-2 border-blue-500/40 hover:border-blue-400/80 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl group">
              <CardHeader>
                <div className="flex items-center space-x-4 mb-6">
                  <div className="relative">
                    <Calculator className="text-blue-400 group-hover:animate-bounce" size={56} />
                    <Database className="absolute -top-2 -right-2 text-orange-400 animate-pulse" size={24} />
                  </div>
                  <Rocket className="text-green-400 animate-pulse" size={28} />
                </div>
                <CardTitle className="text-white text-2xl font-bold tracking-wide">Math with MATLAB</CardTitle>
                <CardDescription className="text-gray-400 text-base font-medium">
                  Advanced mathematical computations, data analysis, neural networks, and sophisticated MATLAB integration for research.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button 
                  onClick={() => handleAIService('matlab')}
                  variant="outline" 
                  className="w-full border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-black transition-all duration-300 py-3 text-lg font-bold tracking-wide"
                >
                  <Calculator className="mr-3" size={20} />
                  Indigenous Neural Math
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Advanced Features with Indian Pride */}
      <section className="relative z-10 py-20 bg-gradient-to-r from-black/40 via-gray-900/40 to-black/40 backdrop-blur-2xl border-y-2 border-orange-500/30">
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold mb-12 text-center text-white tracking-wider">
            🇮🇳 Advanced Indian AI Capabilities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                icon: <Zap className="text-orange-400" size={48} />,
                title: "Indigenous Speed",
                description: "Lightning-fast neural processing with Indian quantum optimization algorithms and advanced computation."
              },
              {
                icon: <Brain className="text-green-400" size={48} />,
                title: "Deep Learning",
                description: "Advanced neural networks with self-learning and Digital India adaptation capabilities for growth."
              },
              {
                icon: <Shield className="text-blue-400" size={48} />,
                title: "Secure India AI",
                description: "Enterprise-grade security with encrypted neural pathways designed specifically for Digital India."
              },
              {
                icon: <Globe className="text-orange-400" size={48} />,
                title: "Make in India Network",
                description: "Distributed AI processing across Indian quantum data centers nationwide for optimal performance."
              }
            ].map((feature, index) => (
              <div key={index} className="text-center p-8 rounded-2xl bg-gradient-to-br from-black/60 to-gray-900/40 backdrop-blur-md border-2 border-gray-700/50 hover:border-orange-400/60 transition-all duration-300 group">
                <div className="flex justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-white tracking-wide">{feature.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed font-medium">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section with Indian Achievement */}
      <section className="relative z-10 py-20">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-orange-400 to-green-400 bg-clip-text text-transparent tracking-wider">
            🚀 Digital India AI Achievements
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-center">
            {[
              { number: "99.9%", label: "Indian AI Accuracy", color: "text-orange-400" },
              { number: "24/7", label: "Neural Uptime", color: "text-green-400" },
              { number: "∞", label: "Learning Capacity", color: "text-blue-400" },
              { number: "< 1ms", label: "Response Time", color: "text-orange-400" }
            ].map((stat, index) => (
              <div key={index} className="p-8 rounded-2xl bg-gradient-to-br from-black/60 to-gray-900/40 backdrop-blur-md border-2 border-gray-700/40 hover:border-orange-400/60 transition-all duration-300">
                <div className={`text-5xl font-bold mb-4 ${stat.color} font-mono animate-pulse tracking-wider`}>{stat.number}</div>
                <div className="text-gray-400 text-sm uppercase tracking-wider font-bold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer with Digital India Pride */}
      <footer className="relative z-10 bg-gradient-to-r from-black/80 via-gray-900/60 to-black/80 backdrop-blur-2xl py-12 border-t-2 border-orange-500/30">
        <div className="container mx-auto text-center">
          <div className="text-3xl font-bold mb-6 bg-gradient-to-r from-orange-400 via-white to-green-400 bg-clip-text text-transparent tracking-wider">
            🇮🇳 INDRESH 2.0 - India's AI Solution
          </div>
          <p className="text-gray-400 mb-6 font-mono text-lg leading-relaxed tracking-wide">
            {'>'} Empowering Digital India with artificial intelligence and quantum computing
            <br />
            <span className="text-orange-400 font-bold">Make in India | Atmanirbhar Bharat | Indigenous Technology</span>
          </p>
          <div className="flex justify-center space-x-10 mb-6">
            <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors duration-300 font-medium tracking-wide">Neural Privacy</a>
            <a href="#" className="text-gray-400 hover:text-green-400 transition-colors duration-300 font-medium tracking-wide">AI Ethics</a>
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 font-medium tracking-wide">Digital India Support</a>
          </div>
          <div className="text-sm text-gray-500 font-mono bg-black/40 inline-block px-6 py-3 rounded-full tracking-wider">
            SYSTEM STATUS: ONLINE | INDIAN NEURAL NETWORKS: ACTIVE | QUANTUM CORES: OPERATIONAL
          </div>
        </div>
      </footer>
      
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Noto+Sans+Devanagari:wght@400;700&display=swap');
        .font-hindi {
          font-family: 'Noto Sans Devanagari', sans-serif;
        }
        .font-inter {
          font-family: 'Inter', sans-serif;
        }
        .animate-spin-slow {
          animation: spin 8s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default Index;
