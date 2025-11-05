
import SocialLinks from "./SocialLinks";
import data from "@/data.json";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer id="contact" className="bg-gray-50 pt-16 pb-8">
      <div className="container px-4 mx-auto">
        <div className="flex justify-center mb-12">
          <div className="text-center max-w-md">
            <h2 className="text-3xl font-bold mb-4">Need to build a smart scalable website?</h2>
            <p className="text-gray-700 mb-6">Get in touch.</p>
            
            <div className="space-y-3">
              {data.personalInfo.email && (
                <div className="flex flex-col items-center">
                  <span className="font-medium mb-1">Email:</span>
                  <a href={`mailto:${data.personalInfo.email}`} className="text-primary hover:underline">
                    {data.personalInfo.email}
                  </a>
                </div>
              )}
              <div className="flex flex-col items-center">
                <span className="font-medium mb-1">Location:</span>
                <span className="text-gray-700">{data.personalInfo.location}</span>
              </div>
              {data.personalInfo.phone && (
                <div className="flex flex-col items-center">
                  <span className="font-medium mb-1">Phone:</span>
                  <a href={`tel:${data.personalInfo.phone.replace(/[^+\d]/g, "")}`} className="text-primary hover:underline">
                    {data.personalInfo.phone}
                  </a>
                </div>
              )}
            </div>
            
            <div className="mt-6 flex justify-center">
              <SocialLinks size={22} />
            </div>
          </div>
        </div>
        
        <div className="section-divider mb-8"></div>
        
        <div className="flex flex-col items-center text-sm text-gray-600">
          <p>© {currentYear} {data.personalInfo.name}. All rights reserved.</p>
          <p className="mt-2">
            Designed by Myself
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
