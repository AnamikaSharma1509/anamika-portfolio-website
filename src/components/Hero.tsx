import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 hero-gradient opacity-90" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Name and Title */}
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-primary-light"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Anamika Sharma
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl mb-4 text-primary-light font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            B.E. Computer Engineering Undergrad
          </motion.p>
          
          <motion.p 
            className="text-lg md:text-xl mb-8 text-gray-200 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Full-Stack Developer | Blockchain Enthusiast | AI/ML Specialist
            <br />
            Building innovative solutions with cutting-edge technologies
          </motion.p>

          {/* Contact Info */}
          <motion.div 
            className="flex flex-wrap justify-center gap-6 mb-8 text-sm md:text-base"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <a href="tel:+91-8668428984" className="flex items-center gap-2 hover:text-primary-light transition-colors">
              <span>📞 +91-8668428984</span>
            </a>
            <a href="mailto:anamikasharmamgahv@gmail.com" className="flex items-center gap-2 hover:text-primary-light transition-colors">
              <Mail className="w-4 h-4" />
              <span>anamikasharmamgahv@gmail.com</span>
            </a>
          </motion.div>

          {/* Action Buttons */}
          <motion.div 
            className="flex flex-wrap justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <Button size="lg" className="bg-white text-primary hover:bg-primary-light hover:text-white transition-spring shadow-large">
              <Download className="w-5 h-5 mr-2" />
              Download Resume
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary transition-spring">
              View Projects
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            className="flex justify-center gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            <a 
              href="#" 
              className="p-3 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-spring shadow-medium hover:scale-110"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a 
              href="#" 
              className="p-3 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-spring shadow-medium hover:scale-110"
              aria-label="GitHub Profile"
            >
              <Github className="w-6 h-6" />
            </a>
            <a 
              href="mailto:anamikasharmamgahv@gmail.com" 
              className="p-3 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-spring shadow-medium hover:scale-110"
              aria-label="Email Contact"
            >
              <Mail className="w-6 h-6" />
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.5 }}
        >
          <div className="animate-bounce">
            <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;