import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Cloud, Cpu, Wrench, Users } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: [
        { name: "Python", level: 90 },
        { name: "C++", level: 85 },
        { name: "JavaScript", level: 88 },
        { name: "Java", level: 80 },
        { name: "HTML/CSS", level: 95 },
        { name: "Node.js", level: 85 }
      ],
      color: "primary"
    },
    {
      title: "Databases & Backend",
      icon: Database,
      skills: [
        { name: "PostgreSQL", level: 80 },
        { name: "SQL", level: 85 },
        { name: "Express.js", level: 85 },
        { name: "RESTful APIs", level: 88 }
      ],
      color: "secondary"
    },
    {
      title: "Cloud & DevOps",
      icon: Cloud,
      skills: [
        { name: "AWS", level: 85 },
        { name: "Cloud Architecture", level: 80 },
        { name: "Solutions Design", level: 82 }
      ],
      color: "accent"
    },
    {
      title: "Emerging Technologies",
      icon: Cpu,
      skills: [
        { name: "Blockchain", level: 85 },
        { name: "Ethereum", level: 80 },
        { name: "Solidity", level: 75 },
        { name: "AI/ML", level: 85 },
        { name: "Generative AI", level: 80 }
      ],
      color: "primary"
    },
    {
      title: "Tools & Technologies",
      icon: Wrench,
      skills: [
        { name: "GitHub", level: 90 },
        { name: "Canva", level: 85 },
        { name: "Photoshop", level: 75 },
        { name: "DSA", level: 85 }
      ],
      color: "secondary"
    },
    {
      title: "Professional Skills",
      icon: Users,
      skills: [
        { name: "Leadership", level: 90 },
        { name: "Problem Solving", level: 95 },
        { name: "Time Management", level: 88 },
        { name: "Public Speaking", level: 85 },
        { name: "Event Management", level: 82 }
      ],
      color: "accent"
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case "primary":
        return {
          iconBg: "bg-primary/10",
          iconColor: "text-primary",
          progressBg: "from-primary to-primary-dark"
        };
      case "secondary":
        return {
          iconBg: "bg-secondary/10",
          iconColor: "text-secondary",
          progressBg: "from-secondary to-purple-600"
        };
      case "accent":
        return {
          iconBg: "bg-accent/10",
          iconColor: "text-accent",
          progressBg: "from-accent to-green-600"
        };
      default:
        return {
          iconBg: "bg-primary/10",
          iconColor: "text-primary",
          progressBg: "from-primary to-primary-dark"
        };
    }
  };

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">Technical Skills</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive expertise across modern technologies and frameworks
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => {
            const colorClasses = getColorClasses(category.color);
            const IconComponent = category.icon;
            
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full shadow-medium hover:shadow-large transition-spring project-card">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`p-3 rounded-lg ${colorClasses.iconBg}`}>
                        <IconComponent className={`w-6 h-6 ${colorClasses.iconColor}`} />
                      </div>
                      <CardTitle className="text-lg">{category.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                        viewport={{ once: true }}
                        className="space-y-2"
                      >
                        <div className="flex justify-between items-center">
                          <span className="font-medium text-sm">{skill.name}</span>
                          <Badge variant="outline" className="text-xs">{skill.level}%</Badge>
                        </div>
                        <div className="skill-bar">
                          <motion.div
                            className={`skill-progress bg-gradient-to-r ${colorClasses.progressBg}`}
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, delay: (categoryIndex * 0.2) + (skillIndex * 0.1) }}
                            viewport={{ once: true }}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-semibold mb-8 text-primary">Additional Expertise</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Full-Stack Development",
              "Blockchain Development", 
              "Machine Learning",
              "Data Structures & Algorithms",
              "Software Development Life Cycle",
              "Agile Methodology",
              "Software Testing Life Cycle",
              "Debugging",
              "Solutions Architecture",
              "Quantitative Research",
              "ESG Technology"
            ].map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <Badge 
                  variant="secondary" 
                  className="px-4 py-2 text-sm font-medium hover:scale-105 transition-spring"
                >
                  {skill}
                </Badge>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;