import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Users, 
  Award, 
  Coffee, 
  Heart,
  Target,
  Lightbulb,
  Star,
  ArrowRight,
  Sparkles,
  TrendingUp
} from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Passion-Driven Development",
      description: "We don't just code websites - we craft digital experiences that connect with your audience and tell your unique story.",
      color: "from-pink-500 to-rose-500"
    },
    {
      icon: Lightbulb,
      title: "Innovation & Creativity", 
      description: "Fresh thinking and creative solutions for every project. We stay ahead of trends to give you a competitive edge.",
      color: "from-amber-500 to-yellow-500"
    },
    {
      icon: Target,
      title: "Results That Matter",
      description: "Beautiful designs are just the beginning. We focus on creating websites that convert visitors into customers.",
      color: "from-green-500 to-emerald-500"
    }
  ];

  const stats = [
    { icon: Users, number: "150+", label: "Happy Clients Worldwide", color: "from-blue-500 to-cyan-500" },
    { icon: Award, number: "200+", label: "Successful Projects", color: "from-purple-500 to-violet-500" },
    { icon: Coffee, number: "98%", label: "Client Satisfaction Rate", color: "from-green-500 to-teal-500" },
    { icon: Star, number: "24/7", label: "Support & Maintenance", color: "from-orange-500 to-red-500" }
  ];

  return (
    <section id="about" className="relative py-24 overflow-hidden">
      {/* Background Design */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary/10 to-primary/5"></div>
      <div className="absolute top-20 left-20 w-48 h-48 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-64 h-64 bg-gradient-to-r from-green-400/20 to-cyan-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 to-purple-500/10 rounded-full px-6 py-3 mb-6 border border-primary/20">
            <Sparkles className="w-5 h-5 text-primary" />
            <span className="text-sm font-semibold text-primary">About Our Journey</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-primary via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Building Digital Dreams
            </span>
            <br />
            <span className="text-3xl md:text-4xl text-foreground">Into Reality</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            We're a passionate team of digital creators who believe every business deserves 
            a powerful online presence that drives real growth and success.
          </p>
        </div>

        {/* Mission Statement */}
        <div className="mb-20">
          <Card className="border-0 shadow-2xl bg-gradient-to-br from-primary/5 via-purple-500/5 to-pink-500/5 overflow-hidden animate-fade-in">
            <CardContent className="p-12 md:p-16 text-center relative">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary via-purple-500 to-pink-500"></div>
              <div className="w-20 h-20 mx-auto mb-8 bg-gradient-to-r from-primary to-purple-600 rounded-3xl flex items-center justify-center">
                <TrendingUp className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                Our Mission: Your Digital Success
              </h3>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                Whether you're a startup with big dreams or an established business ready to grow, 
                we combine cutting-edge technology with creative design to build solutions that 
                don't just look amazing - they deliver measurable results that help your business thrive.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Core Values */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                What Drives Us Every Day
              </span>
            </h3>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our core values shape every project and every interaction with our clients.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card 
                key={index}
                className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-6 animate-slide-up overflow-hidden group"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CardContent className="p-8 relative">
                  <div className="relative z-10">
                    <div className={`w-20 h-20 mx-auto mb-6 bg-gradient-to-r ${value.color} rounded-3xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg`}>
                      <value.icon className="h-10 w-10 text-white" />
                    </div>
                    <h4 className="text-2xl font-bold mb-4 text-center group-hover:text-primary transition-colors duration-300">{value.title}</h4>
                    <p className="text-muted-foreground leading-relaxed text-center">{value.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                Numbers That Tell Our Story
              </span>
            </h3>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our track record speaks for itself - here's the impact we've created with our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card 
                key={index} 
                className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 animate-slide-up text-center overflow-hidden group"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardContent className="p-8 relative">
                  <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                  <div className="relative z-10">
                    <div className={`w-20 h-20 mx-auto mb-6 bg-gradient-to-r ${stat.color} rounded-3xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg`}>
                      <stat.icon className="h-10 w-10 text-white" />
                    </div>
                    <div className="text-4xl md:text-5xl font-bold text-primary mb-3 group-hover:scale-110 transition-transform duration-300">
                      {stat.number}
                    </div>
                    <div className="text-lg font-semibold mb-2">
                      {stat.label}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center animate-fade-in">
          <Card className="border-0 shadow-2xl bg-gradient-to-r from-primary via-purple-600 to-pink-600 text-white overflow-hidden">
            <CardContent className="p-12 md:p-16 relative">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-24 -translate-x-24"></div>
              <div className="relative z-10">
                <Sparkles className="w-16 h-16 mx-auto mb-6 opacity-90" />
                <h3 className="text-3xl md:text-4xl font-bold mb-6">Ready to Join Our Success Story?</h3>
                <p className="text-xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed">
                  Be part of our growing family of successful businesses. Let's discuss your project 
                  and create something extraordinary together!
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Button 
                    variant="ghost" 
                    size="lg" 
                    className="text-white hover:bg-white/20 border-white/30 border-2 group h-14 px-8 text-lg"
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    <Coffee className="mr-3 h-6 w-6" />
                    Let's Chat About Your Project
                    <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="lg" 
                    className="text-white hover:bg-white/20 border-white/30 border-2 group h-14 px-8 text-lg"
                    onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    <Star className="mr-3 h-6 w-6" />
                    Explore Our Services
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

export default About;