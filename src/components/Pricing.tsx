import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Star, Rocket, Crown, Zap } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      id: "starter",
      name: "Starter Package",
      icon: <Rocket className="w-8 h-8" />,
      price: "₹9,200",
      originalPrice: "₹13,500",
      setup: "One-time payment",
      maintenance: "₹3,800/year",
      description: "Launch your business online with a professional presence",
      features: [
        "Custom 6-8 page website design",
        "Free domain registration (1 year)",
        "Professional business email (3 accounts)",
        "Mobile & tablet responsive design",
        "Basic search engine optimization",
        "Contact forms & Google Maps",
        "Social media integration",
        "WhatsApp chat integration",
        "2 months post-launch support",
        "Fast & secure hosting included"
      ],
      popular: false,
      theme: "blue"
    },
    {
      id: "growth",
      name: "Growth Package",
      icon: <Zap className="w-8 h-8" />,
      price: "₹17,800",
      originalPrice: "₹24,000",
      setup: "One-time payment",
      maintenance: "₹6,200/year",
      description: "Scale your business with advanced features & functionality",
      features: [
        "Everything in Starter Package",
        "Up to 12-15 custom pages",
        "Professional blog/news section",
        "Advanced SEO & Google Analytics",
        "SSL certificate & security features",
        "Online appointment booking",
        "Payment gateway integration",
        "Live chat support widget",
        "Professional email (5 accounts)",
        "4 months premium support",
        "Monthly performance reports"
      ],
      popular: true,
      theme: "purple"
    },
    {
      id: "enterprise",
      name: "Enterprise Package",
      icon: <Crown className="w-8 h-8" />,
      price: "₹31,500",
      originalPrice: "₹42,000",
      setup: "One-time payment", 
      maintenance: "₹9,800/year",
      description: "Complete digital solution for serious businesses",
      features: [
        "Everything in Growth Package",
        "Unlimited pages & custom features",
        "Full e-commerce store capabilities",
        "Advanced SEO & marketing tools",
        "Custom admin dashboard",
        "Multi-language support options",
        "Advanced analytics & reporting",
        "Priority technical support",
        "Unlimited business emails",
        "6 months dedicated support",
        "Monthly updates & maintenance",
        "Custom API integrations"
      ],
      popular: false,
      theme: "gold"
    }
  ];

  const getThemeClasses = (theme: string, isPopular: boolean) => {
    const themes = {
      blue: {
        gradient: "from-blue-500 to-cyan-500",
        ring: isPopular ? "ring-blue-500" : "",
        badge: "bg-blue-500"
      },
      purple: {
        gradient: "from-purple-500 to-pink-500", 
        ring: isPopular ? "ring-purple-500" : "",
        badge: "bg-purple-500"
      },
      gold: {
        gradient: "from-amber-500 to-orange-500",
        ring: isPopular ? "ring-amber-500" : "",
        badge: "bg-amber-500"
      }
    };
    return themes[theme as keyof typeof themes];
  };

  return (
    <section id="pricing" className="py-24 bg-gradient-to-br from-background via-secondary/10 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Investment Plans for Your Success
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Transform your business with our comprehensive web solutions. 
            Choose the package that fits your vision and budget perfectly.
          </p>
          <div className="mt-8 flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full">✨ No Hidden Costs</span>
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">🔒 Secure Payments</span>
            <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full">🚀 Quick Launch</span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => {
            const themeClasses = getThemeClasses(plan.theme, plan.popular);
            return (
              <Card 
                key={plan.id}
                className={`relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 animate-slide-up ${
                  plan.popular ? `ring-2 ${themeClasses.ring} ring-opacity-50 scale-105` : ''
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-0 right-0">
                    <div className={`${themeClasses.badge} text-white text-center py-2 text-sm font-semibold`}>
                      ⭐ MOST CHOSEN PACKAGE ⭐
                    </div>
                  </div>
                )}

                <CardHeader className={`text-center ${plan.popular ? 'pt-12' : 'pt-8'} pb-6`}>
                  <div className={`w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r ${themeClasses.gradient} flex items-center justify-center text-white shadow-lg`}>
                    {plan.icon}
                  </div>
                  <CardTitle className="text-2xl font-bold mb-2">{plan.name}</CardTitle>
                  <p className="text-muted-foreground text-sm leading-relaxed">{plan.description}</p>
                </CardHeader>

                <CardContent className="pt-0">
                  {/* Price */}
                  <div className="text-center mb-8 p-6 bg-gradient-to-r from-secondary/50 to-secondary/20 rounded-lg">
                    <div className="flex items-center justify-center gap-3 mb-2">
                      <span className="text-4xl font-bold text-primary">{plan.price}</span>
                      <div className="text-left">
                        <div className="text-sm text-muted-foreground line-through">{plan.originalPrice}</div>
                        <div className="text-xs text-green-600 font-medium">SAVE 30%</div>
                      </div>
                    </div>
                    <div className="text-sm text-muted-foreground mb-1">{plan.setup}</div>
                    <div className="text-sm font-medium text-primary">+ {plan.maintenance} maintenance</div>
                  </div>

                  {/* Features */}
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-0.5">
                          <Check className="w-3 h-3 text-green-600" />
                        </div>
                        <span className="text-sm leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <Button 
                    className={`w-full h-12 text-base font-semibold ${
                      plan.popular 
                        ? `bg-gradient-to-r ${themeClasses.gradient} hover:shadow-lg transform hover:scale-105` 
                        : 'border-2 hover:bg-primary hover:text-white'
                    } transition-all duration-300`}
                    variant={plan.popular ? "default" : "outline"}
                    size="lg"
                  >
                    {plan.popular ? "🚀 Choose This Package" : "Select Package"}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Value Proposition */}
        <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-8 mb-12 animate-fade-in">
          <h3 className="text-2xl font-bold text-center mb-8">What Makes Us Different?</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">⚡</span>
              </div>
              <h4 className="font-semibold mb-1">Lightning Fast</h4>
              <p className="text-sm text-muted-foreground">Optimized for speed & performance</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">🛡️</span>
              </div>
              <h4 className="font-semibold mb-1">Secure & Reliable</h4>
              <p className="text-sm text-muted-foreground">Bank-level security features</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">📱</span>
              </div>
              <h4 className="font-semibold mb-1">Mobile First</h4>
              <p className="text-sm text-muted-foreground">Perfect on all devices</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">🎯</span>
              </div>
              <h4 className="font-semibold mb-1">Results Driven</h4>
              <p className="text-sm text-muted-foreground">Built to convert visitors</p>
            </div>
          </div>
        </div>

        {/* Payment Info */}
        <div className="text-center bg-card/50 rounded-xl p-8 animate-fade-in">
          <h3 className="text-xl font-bold mb-4">💳 Payment & Terms</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
            <div className="p-4 bg-secondary/30 rounded-lg">
              <h4 className="font-semibold mb-2">💰 Flexible Payments</h4>
              <p className="text-muted-foreground">UPI, Bank Transfer, Credit/Debit Cards accepted</p>
            </div>
            <div className="p-4 bg-secondary/30 rounded-lg">
              <h4 className="font-semibold mb-2">📄 Transparent Billing</h4>
              <p className="text-muted-foreground">GST @18% will be added. No surprise charges</p>
            </div>
            <div className="p-4 bg-secondary/30 rounded-lg">
              <h4 className="font-semibold mb-2">🔄 Easy Renewals</h4>
              <p className="text-muted-foreground">Simple annual maintenance with advance notice</p>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-6">
            Need something custom? Let's create the perfect solution for your business!
          </p>
          <Button variant="hero" size="lg" className="group bg-gradient-to-r from-primary to-primary/80 hover:shadow-lg transform hover:scale-105 transition-all duration-300">
            💬 Discuss Custom Requirements
            <Star className="ml-2 h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
