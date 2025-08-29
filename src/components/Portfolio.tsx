import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "Restaurant & Food Demo",
      category: "Restaurant Template",
      description: "Modern restaurant website template with online menu, ordering system, and reservation booking.",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=400&fit=crop",
      tech: ["Responsive Design", "Online Menu", "Order System"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 2,
      title: "Fitness & Wellness Demo",
      category: "Health & Fitness Template",
      description: "Clean fitness studio website with class scheduling, trainer profiles, and membership plans.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
      tech: ["Class Booking", "Payment Integration", "Mobile Responsive"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 3,
      title: "E-commerce Store Demo",
      category: "Online Store Template",
      description: "Beautiful e-commerce template with product galleries, shopping cart, and secure checkout.",
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&h=400&fit=crop",
      tech: ["Shopping Cart", "Product Catalog", "Secure Payments"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 4,
      title: "Service Business Demo",
      category: "Service Provider Template",
      description: "Professional service business template with appointment booking and service showcases.",
      image: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=600&h=400&fit=crop",
      tech: ["Appointment System", "Service Gallery", "Contact Forms"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 5,
      title: "Construction Company Demo",
      category: "Corporate Template",
      description: "Professional corporate website template with project portfolios and client testimonials.",
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&h=400&fit=crop",
      tech: ["Project Gallery", "Team Profiles", "Quote System"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 6,
      title: "Education & Childcare Demo",
      category: "Education Template",
      description: "Warm and welcoming education website with parent portals and activity galleries.",
      image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600&h=400&fit=crop",
      tech: ["Parent Portal", "Photo Gallery", "Event Calendar"],
      liveUrl: "#",
      githubUrl: "#"
    }
  ];

  const categories = ["All", "Restaurant Template", "Health & Fitness Template", "Online Store Template", "Service Provider Template", "Corporate Template", "Education Template"];

  return (
    <section id="portfolio" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Demo Website Designs
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our collection of stunning website templates and design concepts. 
            These demo designs showcase different styles and functionalities for various business types.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={category === "All" ? "default" : "outline"}
              className="hover:shadow-soft transition-all duration-300"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.id}
              className="group overflow-hidden border-0 shadow-soft hover:shadow-hover transition-all duration-500 transform hover:-translate-y-2 animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex space-x-4">
                    <Button
                      size="sm"
                      variant="ghost"
                      className="text-white hover:bg-white/20"
                      asChild
                    >
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="text-white hover:bg-white/20"
                      asChild
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="text-sm text-primary font-medium mb-2">
                  {project.category}
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-16">
          <Button variant="outline" size="lg" className="group">
            View More Demo Designs
            <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;