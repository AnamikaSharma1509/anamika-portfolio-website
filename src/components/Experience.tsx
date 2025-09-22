import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, Award, Calendar, CheckCircle } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      company: "Accenture",
      role: "Developer & Technology Job Simulation",
      period: "2025",
      type: "Micro-Internship",
      skills: ["SDLC", "Agile", "STLC", "Debugging"],
      description: "Gained hands-on experience in software development lifecycle, agile methodologies, and testing practices.",
      status: "Completed"
    },
    {
      company: "Deloitte",
      role: "Technology Job Simulation",
      period: "2025",
      type: "Micro-Internship",
      skills: ["Technology Development", "Innovation", "Digital Solutions"],
      description: "Explored cutting-edge technology development and digital transformation strategies.",
      status: "Completed"
    },
    {
      company: "AWS",
      role: "Solutions Architecture Job Simulation",
      period: "2025",
      type: "Micro-Internship",
      skills: ["Solutions Architecture", "Cloud Computing", "AWS Services"],
      description: "Designed scalable cloud solutions and learned best practices for AWS architecture.",
      status: "Completed"
    },
    {
      company: "JPMorgan Chase & Co.",
      role: "Quantitative Research Job Simulation",
      period: "2025",
      type: "Micro-Internship",
      skills: ["Quantitative Research", "Financial Analysis", "Data Modeling"],
      description: "Applied quantitative methods to financial research and data analysis.",
      status: "Completed"
    },
    {
      company: "Tata",
      role: "ESG Job Simulation",
      period: "2025",
      type: "Micro-Internship",
      skills: ["ESG", "Sustainability", "Environmental Technology"],
      description: "Focused on Environmental, Social, and Governance (ESG) technology solutions.",
      status: "Completed"
    }
  ];

  const certifications = [
    {
      title: "AWS Academy AI & ML Certification",
      issuer: "AWS Academy",
      date: "2024",
      status: "Completed"
    },
    {
      title: "AWS Cloud Computing",
      issuer: "AWS",
      date: "Ongoing",
      status: "In Progress"
    },
    {
      title: "Blockchain & Ethereum Development",
      issuer: "Self-Study",
      date: "2024",
      status: "Completed"
    },
    {
      title: "BNY Career Catalyst",
      issuer: "BNY Mellon",
      date: "Feb 2025",
      status: "Upcoming"
    }
  ];

  const achievements = [
    {
      title: "Vice-President",
      organization: "Sakal YIN Pune",
      description: "Leadership role in youth innovation network",
      icon: Award
    },
    {
      title: "GSSoC Contributor 2024",
      organization: "GirlScript Summer of Code",
      description: "Open source contributor",
      icon: CheckCircle
    },
    {
      title: "Flipkart Grid Participant",
      organization: "Flipkart",
      description: "2024 & 2025 editions",
      icon: Building
    }
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">Experience & Achievements</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8"></div>
        </motion.div>

        {/* Professional Experience */}
        <div className="mb-20">
          <h3 className="text-2xl font-semibold mb-8 text-primary flex items-center gap-3">
            <Building className="w-6 h-6" />
            Professional Experience
          </h3>
          
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={`${exp.company}-${exp.period}`}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="shadow-medium hover:shadow-large transition-spring project-card">
                  <CardHeader className="pb-4">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div>
                        <CardTitle className="text-xl text-primary mb-1">{exp.company}</CardTitle>
                        <p className="text-lg font-medium text-muted-foreground">{exp.role}</p>
                      </div>
                      <div className="flex flex-col md:items-end gap-2">
                        <Badge className="bg-primary/10 text-primary border-primary/20 w-fit">
                          {exp.type}
                        </Badge>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="w-4 h-4" />
                          {exp.period}
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
                        <Badge key={skill} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mb-20">
          <h3 className="text-2xl font-semibold mb-8 text-primary flex items-center gap-3">
            <Award className="w-6 h-6" />
            Certifications
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="shadow-medium hover:shadow-large transition-spring project-card h-full">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h4 className="font-semibold text-lg">{cert.title}</h4>
                      <Badge 
                        className={cert.status === "Completed" ? "bg-green-100 text-green-800 border-green-200" : 
                                  cert.status === "In Progress" ? "bg-yellow-100 text-yellow-800 border-yellow-200" :
                                  "bg-blue-100 text-blue-800 border-blue-200"}
                      >
                        {cert.status}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground mb-2">{cert.issuer}</p>
                    <p className="text-sm text-muted-foreground">{cert.date}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Key Achievements */}
        <div>
          <h3 className="text-2xl font-semibold mb-8 text-primary flex items-center gap-3">
            <CheckCircle className="w-6 h-6" />
            Key Achievements
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon;
              
              return (
                <motion.div
                  key={achievement.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="shadow-medium hover:shadow-large transition-spring project-card h-full text-center">
                    <CardContent className="p-6">
                      <div className="p-4 bg-accent/10 rounded-full w-fit mx-auto mb-4">
                        <IconComponent className="w-8 h-8 text-accent" />
                      </div>
                      <h4 className="font-semibold text-lg mb-2">{achievement.title}</h4>
                      <p className="text-muted-foreground text-sm mb-2">{achievement.organization}</p>
                      <p className="text-xs text-muted-foreground">{achievement.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;