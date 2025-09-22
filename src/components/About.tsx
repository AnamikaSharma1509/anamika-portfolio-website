import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, MapPin, Trophy } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* About Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg leading-relaxed text-muted-foreground">
              I'm a passionate third-year Computer Engineering student at Bharati Vidyapeeth's College of Engineering for Women, Pune, 
              with a strong foundation in Full-Stack Development, Blockchain technology, and AI/ML.
            </p>
            
            <p className="text-lg leading-relaxed text-muted-foreground">
              With expertise in Python, C++, Java, SQL/PostgreSQL, Node.js, and modern web technologies, I've successfully completed 
              multiple micro-internships with industry leaders including Accenture, Deloitte, AWS, JPMC, and Tata.
            </p>

            <p className="text-lg leading-relaxed text-muted-foreground">
              Currently pursuing AWS Cloud certifications and actively contributing to open-source projects, I'm committed to 
              leveraging technology for innovative solutions and continuous learning.
            </p>

            {/* Key Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span className="font-medium">CGPA: 9.30</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span className="font-medium">AWS Certified</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span className="font-medium">GSSoC Contributor 2024</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span className="font-medium">Vice-President at Sakal YIN</span>
              </div>
            </div>
          </motion.div>

          {/* Education & Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Education Card */}
            <Card className="shadow-medium hover:shadow-large transition-spring project-card">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">Education</h3>
                    <p className="font-medium text-primary mb-1">Bachelor of Engineering in Computer Engineering</p>
                    <p className="text-muted-foreground mb-2">Bharati Vidyapeeth's College of Engineering for Women, Pune</p>
                    <div className="flex items-center gap-4 text-sm">
                      <Badge variant="secondary">2023-2027</Badge>
                      <Badge variant="outline" className="bg-accent/10 text-accent border-accent/20">CGPA: 9.30</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Location Card */}
            <Card className="shadow-medium hover:shadow-large transition-spring project-card">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-secondary/10 rounded-lg">
                    <MapPin className="w-6 h-6 text-secondary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">Location</h3>
                    <p className="text-muted-foreground">Pune, Maharashtra, India</p>
                    <p className="text-sm text-muted-foreground mt-2">Open to remote opportunities and relocation</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Achievement Card */}
            <Card className="shadow-medium hover:shadow-large transition-spring project-card">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <Trophy className="w-6 h-6 text-accent" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">Recent Achievement</h3>
                    <p className="text-muted-foreground">Vice-President at Sakal YIN Pune</p>
                    <p className="text-sm text-muted-foreground mt-2">Leadership role in youth innovation network</p>
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

export default About;