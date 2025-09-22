import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Brain, Plane, Link, Calendar } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Moodscape",
      description: "Movie recommendation website using a unique Q&A approach with ML integration. Built with HTML, CSS, JavaScript, Node.js, and PostgreSQL.",
      longDescription: "An innovative movie recommendation system that uses a question-and-answer approach to understand user preferences and provide personalized movie suggestions through machine learning algorithms.",
      icon: Brain,
      technologies: ["HTML", "CSS", "JavaScript", "Node.js", "PostgreSQL", "Machine Learning"],
      category: "Full-Stack + ML",
      status: "Completed",
      github: "#",
      demo: "#"
    },
    {
      title: "Travel XP",
      description: "Full-stack flight booking and travel guide platform with itinerary generation and destination decision support.",
      longDescription: "A comprehensive travel platform that combines flight booking capabilities with intelligent travel guides, featuring automated itinerary generation and AI-powered destination recommendations.",
      icon: Plane,
      technologies: ["React", "Node.js", "Express.js", "PostgreSQL", "Travel APIs", "AI Integration"],
      category: "Full-Stack",
      status: "Completed",
      github: "#",
      demo: "#"
    },
    {
      title: "Supply Chain Management System",
      description: "Blockchain-based tracking and transparency solution developed in 2nd year PBL. Features complete supply chain visibility.",
      longDescription: "A blockchain-powered supply chain management system that provides end-to-end tracking, transparency, and verification throughout the entire supply chain process.",
      icon: Link,
      technologies: ["HTML", "CSS", "Node.js", "Express.js", "Blockchain", "Ethereum", "Solidity"],
      category: "Blockchain",
      status: "Completed",
      github: "#",
      demo: "#"
    },
    {
      title: "Nivora Smart Scheduler",
      description: "AI-assisted task arrangement and scheduling system (mini-series prototype) combining AI reasoning with full-stack implementation.",
      longDescription: "An intelligent scheduling system that uses AI to optimize task arrangements and time management, featuring smart recommendations and automated scheduling capabilities.",
      icon: Calendar,
      technologies: ["React", "Python", "AI/ML", "Node.js", "PostgreSQL", "Natural Language Processing"],
      category: "AI/ML + Full-Stack",
      status: "Prototype",
      github: "#",
      demo: "#"
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Full-Stack + ML":
        return "bg-purple-100 text-purple-800 border-purple-200";
      case "Full-Stack":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "Blockchain":
        return "bg-green-100 text-green-800 border-green-200";
      case "AI/ML + Full-Stack":
        return "bg-orange-100 text-orange-800 border-orange-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "bg-green-100 text-green-800 border-green-200";
      case "Prototype":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">Featured Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Showcasing innovative solutions across full-stack development, blockchain, and AI/ML
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="h-full"
              >
                <Card className="h-full shadow-medium hover:shadow-large transition-spring project-card group">
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                          <IconComponent className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <CardTitle className="text-xl group-hover:text-primary transition-colors">
                            {project.title}
                          </CardTitle>
                          <div className="flex gap-2 mt-2">
                            <Badge className={getCategoryColor(project.category)}>
                              {project.category}
                            </Badge>
                            <Badge className={getStatusColor(project.status)}>
                              {project.status}
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </div>
                    <CardDescription className="text-base leading-relaxed">
                      {project.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-6">
                    {/* Detailed Description */}
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {project.longDescription}
                    </p>

                    {/* Technologies */}
                    <div>
                      <h4 className="font-semibold mb-3 text-sm text-primary">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <Badge
                            key={tech}
                            variant="outline"
                            className="text-xs hover:bg-primary/10 transition-colors"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3 pt-4">
                      <Button 
                        size="sm" 
                        className="flex-1 hover:scale-105 transition-spring"
                        asChild
                      >
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-2" />
                          GitHub
                        </a>
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="flex-1 hover:scale-105 transition-spring"
                        asChild
                      >
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Demo
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-lg text-muted-foreground mb-6">
            Interested in seeing more of my work?
          </p>
          <Button size="lg" className="hover:scale-105 transition-spring shadow-medium">
            <Github className="w-5 h-5 mr-2" />
            View All Projects on GitHub
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;