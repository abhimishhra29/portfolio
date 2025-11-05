
import { motion } from "framer-motion";
import { ArrowDown, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import data from "@/data.json";

const Freelancing = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const phone = data.personalInfo.phone?.replace(/[^+\d]/g, "");

  return (
    <section className="bg-primary/5 py-20">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Need to build a smart scalable website?</h2>
          <p className="text-lg mb-8">Get in touch.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              onClick={scrollToContact}
              className="bg-primary hover:bg-primary/90 text-white px-8 py-6 rounded-full text-base font-medium flex items-center"
            >
              Get in Touch
              <ArrowDown className="ml-2 h-5 w-5" />
            </Button>
            {phone && (
              <a
                href={`tel:${phone}`}
                className="inline-flex items-center justify-center px-8 py-6 rounded-full border border-primary/40 text-primary font-medium hover:bg-primary/10"
              >
                <PhoneCall className="mr-2 h-5 w-5" />
                Call Abhijeet
              </a>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Freelancing;
