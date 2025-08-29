import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  MessageSquare,
  Clock,
  Globe,
  Star,
  CheckCircle,
  Calendar,
  Coffee,
  Zap,
  ArrowRight,
  Users,
  Heart
} from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    budget: "",
    timeline: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "🚀 Message sent successfully!",
      description: "We'll respond within 2 hours with next steps. Check your email soon!",
    });
    setFormData({ 
      name: "", 
      email: "", 
      phone: "", 
      projectType: "", 
      budget: "", 
      timeline: "", 
      message: "" 
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactMethods = [
    {
      icon: MessageSquare,
      title: "WhatsApp Chat",
      subtitle: "Instant messaging",
      content: "+91 98765 43210",
      description: "Quick questions & immediate support",
      color: "from-green-500 to-green-600",
      action: () => window.open("https://wa.me/919876543210?text=Hi! I'm interested in your web development services."),
      popular: true
    },
    {
      icon: Mail,
      title: "Email Us",
      subtitle: "Detailed inquiries",
      content: "hello@freelanceweb.dev",
      description: "For project details & proposals",
      color: "from-blue-500 to-blue-600",
      action: () => window.open("mailto:hello@freelanceweb.dev?subject=Website Development Inquiry")
    },
    {
      icon: Phone,
      title: "Call Directly", 
      subtitle: "Voice consultation",
      content: "+91 98765 43210",
      description: "Mon-Sat: 10AM - 8PM IST",
      color: "from-purple-500 to-purple-600",
      action: () => window.open("tel:+919876543210")
    },
    {
      icon: Calendar,
      title: "Book Meeting",
      subtitle: "Free consultation",
      content: "Schedule 30-min call",
      description: "Perfect for discussing your project",
      color: "from-amber-500 to-orange-500",
      action: () => window.open("https://calendly.com/freelanceweb")
    }
  ];

  const projectTypes = [
    "Business Website",
    "E-commerce Store", 
    "Portfolio Website",
    "Blog/News Website",
    "Landing Page",
    "Web Application",
    "Other"
  ];

  const budgetRanges = [
    "₹5,000 - ₹15,000",
    "₹15,000 - ₹30,000", 
    "₹30,000 - ₹50,000",
    "₹50,000+"
  ];

  const timelines = [
    "ASAP (Rush job)",
    "1-2 weeks",
    "2-4 weeks", 
    "1-2 months",
    "Flexible"
  ];

  const whyChooseUs = [
    {
      icon: Zap,
      title: "Lightning Fast Response",
      description: "We reply within 2 hours, often much sooner"
    },
    {
      icon: Users,
      title: "Personal Attention",
      description: "Direct communication with your developer"
    },
    {
      icon: CheckCircle,
      title: "100% Satisfaction",
      description: "We don't stop until you're completely happy"
    },
    {
      icon: Heart,
      title: "Transparent Process",
      description: "Regular updates and clear communication"
    }
  ];

  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      {/* Background Design */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary/5 to-primary/5"></div>
      <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-primary via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Ready to Get Started?
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-8">
            Transform your business idea into a stunning reality. Let's discuss your project 
            and create something amazing together!
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
            <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full font-medium">✨ Free Consultation</span>
            <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-medium">🚀 Quick Turnaround</span>
            <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full font-medium">💯 Satisfaction Guaranteed</span>
          </div>
        </div>

        {/* Contact Methods */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {contactMethods.map((method, index) => (
            <Card 
              key={index}
              className={`relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 cursor-pointer animate-slide-up group ${
                method.popular ? 'ring-2 ring-green-500 ring-opacity-50 scale-105' : ''
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
              onClick={method.action}
            >
              {method.popular && (
                <div className="absolute top-0 left-0 right-0 bg-green-500 text-white text-center py-1 text-xs font-semibold">
                  ⭐ MOST POPULAR
                </div>
              )}
              
              <CardContent className={`p-6 ${method.popular ? 'pt-8' : 'pt-6'}`}>
                <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${method.color} flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300`}>
                  <method.icon className="w-8 h-8 text-white" />
                </div>
                
                <div className="text-center">
                  <h3 className="text-lg font-bold mb-1">{method.title}</h3>
                  <p className="text-sm text-primary font-medium mb-2">{method.subtitle}</p>
                  <p className="text-base font-semibold text-foreground mb-2">{method.content}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{method.description}</p>
                </div>

                <div className="mt-4 flex items-center justify-center text-primary group-hover:text-primary/80 transition-colors">
                  <span className="text-sm font-medium mr-1">Contact Now</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Enhanced Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-0 shadow-xl bg-card/80 backdrop-blur-sm animate-fade-in">
              <CardHeader className="pb-6">
                <CardTitle className="text-3xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                  Let's Discuss Your Project
                </CardTitle>
                <p className="text-muted-foreground text-lg">Fill out the form below and we'll get back to you with a custom proposal within 2 hours!</p>
              </CardHeader>
              <CardContent className="space-y-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Info */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="block text-sm font-semibold text-foreground">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your full name"
                        required
                        className="h-14 text-base border-2 focus:border-primary transition-colors"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="block text-sm font-semibold text-foreground">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
                        required
                        className="h-14 text-base border-2 focus:border-primary transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="phone" className="block text-sm font-semibold text-foreground">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+91 98765 43210"
                      className="h-14 text-base border-2 focus:border-primary transition-colors"
                    />
                  </div>

                  {/* Project Details */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="projectType" className="block text-sm font-semibold text-foreground">
                        Project Type *
                      </label>
                      <select
                        id="projectType"
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleInputChange}
                        required
                        className="w-full h-14 px-4 text-base border-2 border-input bg-background rounded-md focus:border-primary transition-colors"
                      >
                        <option value="">Select your project type</option>
                        {projectTypes.map((type) => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="budget" className="block text-sm font-semibold text-foreground">
                        Budget Range
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        className="w-full h-14 px-4 text-base border-2 border-input bg-background rounded-md focus:border-primary transition-colors"
                      >
                        <option value="">Select budget range</option>
                        {budgetRanges.map((range) => (
                          <option key={range} value={range}>{range}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="timeline" className="block text-sm font-semibold text-foreground">
                      Project Timeline
                    </label>
                    <select
                      id="timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleInputChange}
                      className="w-full h-14 px-4 text-base border-2 border-input bg-background rounded-md focus:border-primary transition-colors"
                    >
                      <option value="">When do you need this completed?</option>
                      {timelines.map((time) => (
                        <option key={time} value={time}>{time}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="block text-sm font-semibold text-foreground">
                      Project Details *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us about your vision, goals, specific features you need, target audience, design preferences, and any other important details..."
                      required
                      rows={6}
                      className="resize-none text-base border-2 focus:border-primary transition-colors"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full h-16 text-lg font-semibold bg-gradient-to-r from-primary via-purple-600 to-pink-600 hover:shadow-xl transform hover:scale-105 transition-all duration-300 group"
                  >
                    <Send className="mr-3 h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
                    Send My Project Details
                    <Star className="ml-3 h-6 w-6 group-hover:rotate-12 transition-transform duration-300" />
                  </Button>

                  <p className="text-sm text-muted-foreground text-center mt-4">
                    🔒 Your information is completely secure and will never be shared with third parties.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Enhanced Sidebar */}
          <div className="space-y-8">
            {/* Why Choose Us */}
            <Card className="border-0 shadow-xl bg-gradient-to-br from-primary/5 to-purple-500/5 animate-fade-in">
              <CardHeader>
                <CardTitle className="text-2xl font-bold flex items-center">
                  <Coffee className="mr-3 h-6 w-6 text-primary" />
                  Why Work With Us?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {whyChooseUs.map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <item.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">{item.title}</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card className="border-0 shadow-xl bg-gradient-to-r from-green-500 to-emerald-600 text-white animate-fade-in">
              <CardContent className="p-8 text-center">
                <Globe className="w-16 h-16 mx-auto mb-4 opacity-90" />
                <h3 className="text-2xl font-bold mb-2">Ready to Launch?</h3>
                <p className="mb-6 text-green-50">
                  Join 100+ happy businesses who've transformed their online presence with us!
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold">2 Hours</div>
                    <div className="text-sm text-green-100">Response Time</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold">100%</div>
                    <div className="text-sm text-green-100">Satisfaction</div>
                  </div>
                </div>
                <Button 
                  variant="ghost" 
                  className="w-full text-white hover:bg-white/20 border-white/30 border-2"
                  onClick={() => window.open("https://wa.me/919876543210?text=Hi! I'm ready to start my project. Let's chat!")}
                >
                  <MessageSquare className="mr-2 h-5 w-5" />
                  Start Project Now
                </Button>
              </CardContent>
            </Card>

            {/* Emergency Contact */}
            <Card className="border-0 shadow-xl bg-gradient-to-r from-amber-500 to-orange-500 text-white animate-fade-in">
              <CardContent className="p-6 text-center">
                <Clock className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Urgent Project?</h3>
                <p className="mb-4 text-orange-50 text-sm">
                  Need it done ASAP? Call us directly for rush jobs and emergency support.
                </p>
                <Button 
                  variant="ghost" 
                  className="w-full text-white hover:bg-white/20 border-white/30 border-2"
                  onClick={() => window.open("tel:+919876543210")}
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now: +91 98765 43210
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;