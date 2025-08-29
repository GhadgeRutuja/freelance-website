import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Code, 
  Palette, 
  Smartphone, 
  Globe, 
  Search, 
  ShoppingCart,
  Zap,
  Users,
  CheckCircle,
  ArrowRight,
  Star,
  Shield,
  TrendingUp,
  Sparkles,
  Crown,
  Heart
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: "Website Development",
      description: "Custom websites that perfectly represent your brand and convert visitors into customers with modern design and functionality.",
      features: ["Responsive Design", "SEO Optimized", "Fast Loading", "Mobile-First"],
      color: "from-blue-500 to-indigo-500",
      price: "Starting ₹9,200"
    },
    {
      icon: ShoppingCart,
      title: "E-commerce Solutions", 
      description: "Complete online stores with payment integration, inventory management, and customer analytics to grow your sales.",
      features: ["Payment Gateway", "Inventory System", "Admin Dashboard", "Order Management"],
      color: "from-green-500 to-emerald-500",
      price: "Starting ₹17,800"
    },
    {
      icon: Code,
      title: "Custom Development",
      description: "Tailored web applications and unique features that give you a competitive advantage in your market.",
      features: ["Custom Features", "API Integration", "Database Design", "Scalable Architecture"],
      color: "from-purple-500 to-pink-500",
      price: "Starting ₹31,500"
    },
    {
      icon: Smartphone,
      title: "Mobile Optimization",
      description: "Ensure your website works perfectly on all devices with responsive design and mobile-first approach.",
      features: ["iPhone & Android", "Touch Optimized", "Fast Loading", "App-like Experience"],
      color: "from-orange-500 to-red-500",
      price: "Included in all packages"
    },
    {
      icon: Search,
      title: "SEO & Marketing",
      description: "Get found online with comprehensive SEO optimization and digital marketing strategies that drive traffic.",
      features: ["Google Ranking", "Content Strategy", "Social Media", "Analytics Setup"],
      color: "from-cyan-500 to-blue-500",
      price: "Starting ₹5,000/month"
    },
    {
      icon: Shield,
      title: "Maintenance & Support",
      description: "24/7 technical support, regular updates, security monitoring, and performance optimization for peace of mind.",
      features: ["24/7 Support", "Regular Updates", "Security Monitoring", "Performance Boost"],
      color: "from-amber-500 to-yellow-500",
      price: "Starting ₹3,800/year"
    }
  ];

  const whyChooseUs = [
    {
      icon: Zap,
      title: "Lightning Fast Development",
      description: "Streamlined process that delivers your project on time, every time"
    },
    {
      icon: Shield,
      title: "100% Secure & Reliable", 
      description: "Bank-level security, SSL certificates, and robust hosting infrastructure"
    },
    {
      icon: Heart,
      title: "No Hidden Costs",
      description: "Transparent pricing with detailed proposals and no surprise charges"
    },
    {
      icon: Star,
      title: "Lifetime Support",
      description: "Ongoing maintenance, updates, and technical support for peace of mind"
    }
  ];

  return (
    <section id="services" className="relative py-24 overflow-hidden">
      {/* Background Design */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary/5 to-primary/5"></div>
      <div className="absolute top-20 left-20 w-48 h-48 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-64 h-64 bg-gradient-to-r from-green-400/20 to-cyan-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 to-purple-500/10 rounded-full px-6 py-3 mb-6 border border-primary/20">
            <Sparkles className="w-5 h-5 text-primary" />
            <span className="text-sm font-semibold text-primary">Our Complete Service Portfolio</span>
            <Crown className="w-5 h-5 text-primary" />
          </div>
          
          <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-primary via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Services That Drive
            </span>
            <br />
            <span className="text-4xl md:text-5xl text-foreground">Real Business Growth</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-8">
            From concept to launch, we handle every aspect of your digital transformation. 
            Choose from our comprehensive services designed to grow your business online.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
            <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full font-medium">✨ Expert Development</span>
            <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-medium">🚀 Fast Delivery</span>
            <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full font-medium">🛡️ Lifetime Support</span>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 animate-slide-up group overflow-hidden"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardContent className="p-8 relative">
                <div className={`w-20 h-20 mx-auto mb-6 bg-gradient-to-r ${service.color} rounded-3xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg`}>
                  <service.icon className="h-10 w-10 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold mb-3 text-center group-hover:text-primary transition-colors duration-300">{service.title}</h3>
                <p className="text-muted-foreground mb-6 text-center leading-relaxed">{service.description}</p>
                
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="text-center mb-4">
                  <div className="text-lg font-bold text-primary">{service.price}</div>
                </div>

                <Button 
                  variant="outline" 
                  className="w-full group-hover:bg-primary group-hover:text-white transition-colors duration-300"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Why Choose Us */}
        <div className="mb-20">
          <Card className="border-0 shadow-2xl bg-gradient-to-br from-primary/10 via-purple-500/10 to-pink-500/10 animate-fade-in">
            <CardContent className="p-12">
              <h3 className="text-3xl md:text-4xl font-bold text-center mb-12">
                <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                  Why 150+ Businesses Choose Our Services
                </span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {whyChooseUs.map((item, index) => (
                  <div key={index} className="flex items-start space-x-6 p-6 bg-background/50 rounded-2xl backdrop-blur-sm hover:bg-background/80 transition-colors duration-300">
                    <div className="w-16 h-16 bg-gradient-to-r from-primary to-purple-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <item.icon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-xl mb-2">{item.title}</h4>
                      <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Enhanced CTA */}
        <div className="text-center animate-fade-in">
          <Card className="border-0 shadow-2xl bg-gradient-to-r from-primary via-purple-600 to-pink-600 text-white overflow-hidden">
            <CardContent className="p-12 md:p-16 relative">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-24 -translate-x-24"></div>
              <div className="relative z-10">
                <TrendingUp className="w-16 h-16 mx-auto mb-6 opacity-90" />
                <h3 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Business?</h3>
                <p className="text-xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed">
                  Don't let your competitors get ahead. Start your digital transformation today 
                  with our expert team and proven process that delivers results.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Button 
                    variant="ghost" 
                    size="lg" 
                    className="text-white hover:bg-white/20 border-white/30 border-2 group h-14 px-8 text-lg"
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    <Star className="mr-3 h-6 w-6" />
                    Start Your Project
                    <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="lg" 
                    className="text-white hover:bg-white/20 border-white/30 border-2 group h-14 px-8 text-lg"
                    onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    <Sparkles className="mr-3 h-6 w-6" />
                    View Pricing Plans
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Services;