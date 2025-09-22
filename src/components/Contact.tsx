import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Linkedin, Github, Download } from "lucide-react";
import techPattern from "@/assets/tech-pattern.jpg";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "+91-8668428984",
      href: "tel:+91-8668428984",
      color: "primary"
    },
    {
      icon: Mail,
      label: "Email",
      value: "anamikasharmamgahv@gmail.com",
      href: "mailto:anamikasharmamgahv@gmail.com",
      color: "secondary"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Pune, Maharashtra, India",
      href: "#",
      color: "accent"
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "#",
      color: "bg-blue-600 hover:bg-blue-700"
    },
    {
      icon: Github,
      label: "GitHub", 
      href: "#",
      color: "bg-gray-800 hover:bg-gray-900"
    },
    {
      icon: Mail,
      label: "Email",
      href: "mailto:anamikasharmamgahv@gmail.com",
      color: "bg-red-600 hover:bg-red-700"
    }
  ];

  const getIconColorClasses = (color: string) => {
    switch (color) {
      case "primary":
        return {
          bg: "bg-primary/10",
          text: "text-primary"
        };
      case "secondary":
        return {
          bg: "bg-secondary/10", 
          text: "text-secondary"
        };
      case "accent":
        return {
          bg: "bg-accent/10",
          text: "text-accent"
        };
      default:
        return {
          bg: "bg-primary/10",
          text: "text-primary"
        };
    }
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-5 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${techPattern})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">Get In Touch</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to collaborate on innovative projects? Let's discuss opportunities and create something amazing together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-primary">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  const colorClasses = getIconColorClasses(info.color);
                  
                  return (
                    <motion.div
                      key={info.label}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.1 * index }}
                      viewport={{ once: true }}
                    >
                      <Card className="shadow-soft hover:shadow-medium transition-spring project-card">
                        <CardContent className="p-4">
                          <a 
                            href={info.href}
                            className="flex items-center gap-4 group"
                          >
                            <div className={`p-3 rounded-lg ${colorClasses.bg} group-hover:scale-110 transition-spring`}>
                              <IconComponent className={`w-5 h-5 ${colorClasses.text}`} />
                            </div>
                            <div>
                              <p className="font-medium text-sm text-muted-foreground">{info.label}</p>
                              <p className="text-foreground group-hover:text-primary transition-colors">
                                {info.value}
                              </p>
                            </div>
                          </a>
                        </CardContent>
                      </Card>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-primary">Connect With Me</h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  
                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.1 * index }}
                      viewport={{ once: true }}
                      className={`p-4 rounded-lg text-white transition-spring hover:scale-110 shadow-medium ${social.color}`}
                      aria-label={social.label}
                    >
                      <IconComponent className="w-6 h-6" />
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <Card className="shadow-large p-8 text-center card-gradient">
              <CardContent className="space-y-6 p-0">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-primary">Ready to Collaborate?</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    I'm always excited to work on innovative projects and contribute to meaningful solutions. 
                    Whether you're looking for a developer, collaborator, or team member, let's connect!
                  </p>
                </div>

                <div className="space-y-4">
                  <Button 
                    size="lg" 
                    className="w-full hover:scale-105 transition-spring shadow-medium"
                    asChild
                  >
                    <a href="mailto:anamikasharmamgahv@gmail.com">
                      <Mail className="w-5 h-5 mr-2" />
                      Send Email
                    </a>
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="w-full hover:scale-105 transition-spring"
                    asChild
                  >
                    <a href="#" download>
                      <Download className="w-5 h-5 mr-2" />
                      Download Resume
                    </a>
                  </Button>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border/50">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-primary">9.30</p>
                    <p className="text-xs text-muted-foreground">CGPA</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-secondary">4+</p>
                    <p className="text-xs text-muted-foreground">Projects</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-accent">5</p>
                    <p className="text-xs text-muted-foreground">Internships</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;