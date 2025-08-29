import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Star, Shield, Zap, CheckCircle, Sparkles, Crown } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  const quickFeatures = [
    { icon: Shield, text: "100% Secure & Reliable" },
    { icon: Zap, text: "Lightning Fast Development" },
    { icon: CheckCircle, text: "No Hidden Costs" },
    { icon: Star, text: "Lifetime Support" }
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&h=1080&fit=crop&q=80" 
          alt="Modern workspace with laptop and design tools" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/75 to-background/95"></div>
        <div className="absolute inset-0 bg-gradient-hero opacity-30"></div>
      </div>

      {/* Floating Background Elements */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-48 h-48 bg-gradient-to-r from-green-400/20 to-cyan-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 to-purple-500/10 rounded-full px-6 py-3 mb-8 border border-primary/20">
            <Sparkles className="w-5 h-5 text-primary" />
            <span className="text-sm font-semibold text-primary">Premium Web Development Services</span>
            <Crown className="w-5 h-5 text-primary" />
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-primary via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Transform Your Business
            </span>
            <br />
            <span className="text-4xl md:text-5xl lg:text-6xl text-foreground">Into Digital Success</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed">
            We're digital architects who craft stunning websites and powerful applications that 
            drive real business growth. From concept to launch - we handle everything while you focus on what you do best.
          </p>

          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm mb-12">
            <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full font-medium">✨ 200+ Projects Delivered</span>
            <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-medium">🚀 2 Hour Response Time</span>
            <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full font-medium">🏆 98% Client Satisfaction</span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button 
              size="lg" 
              className="group h-16 px-8 text-lg font-semibold bg-gradient-to-r from-primary via-purple-600 to-pink-600 hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Star className="mr-3 h-6 w-6" />
              Start Your Project Today
              <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="group h-16 px-8 text-lg font-semibold border-2 hover:bg-primary hover:text-white"
              onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Play className="mr-3 h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
              View Our Work
            </Button>
          </div>

          {/* Quick Features */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {quickFeatures.map((feature, index) => (
              <div 
                key={index} 
                className="flex items-center justify-center space-x-3 p-4 bg-background/50 backdrop-blur-sm rounded-2xl border border-primary/10 hover:bg-background/80 transition-colors duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="w-10 h-10 bg-gradient-to-r from-primary to-purple-600 rounded-xl flex items-center justify-center">
                  <feature.icon className="w-5 h-5 text-white" />
                </div>
                <span className="text-sm font-medium text-foreground">{feature.text}</span>
              </div>
            ))}
          </div>

          {/* Enhanced Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 animate-slide-up">
            {[
              { number: "150+", label: "Happy Businesses", icon: "🏢" },
              { number: "200+", label: "Projects Completed", icon: "🚀" },
              { number: "98%", label: "Satisfaction Rate", icon: "⭐" },
              { number: "24/7", label: "Support Available", icon: "🛟" },
            ].map((stat, index) => (
              <div key={index} className="text-center p-6 bg-background/30 backdrop-blur-sm rounded-2xl border border-primary/10 hover:bg-background/60 transition-colors duration-300">
                <div className="text-2xl mb-2">{stat.icon}</div>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground text-sm font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced Floating Elements */}
      <div className="absolute top-1/4 left-10 w-20 h-20 bg-gradient-to-r from-primary to-purple-600 rounded-full opacity-20 animate-float"></div>
      <div className="absolute bottom-1/4 right-10 w-16 h-16 bg-gradient-to-r from-green-500 to-cyan-500 rounded-full opacity-30 animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/3 right-1/4 w-12 h-12 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full opacity-25 animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-1/3 left-1/4 w-14 h-14 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full opacity-20 animate-float" style={{ animationDelay: '0.5s' }}></div>
    </section>
  );
};

export default Hero;