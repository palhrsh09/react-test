import {
  FaHeart,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import { FiArrowRightCircle } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-800">
    {/* Top Section with logos */}
  
    {/* Main Content */}
    <div>
      <div className="flex px-[10%] py-4 justify-between w-full border flex-wrap">
        <div className="flex mb-4 w-full md:w-auto">
          <img src=" " />
          <img src=" " />
          <img src=" " />
        </div>
  
        <div className="flex w-full justify-center md:justify-start mb-4 md:mb-0">
          <FaLinkedin className="text-xl mx-2" />
          <FaFacebook className="text-xl mx-2" />
          <FaInstagram className="text-xl mx-2" />
          <FaTwitter className="text-xl mx-2" />
        </div>
      </div>
    </div>
  
    <div className="flex px-[10%] flex-wrap">
      <div className="w-full md:w-1/4 mb-4 md:mb-0">
        <img src="/path/to/logo.png" alt="Codersbay Technologies" className="mb-4" />
        <p>WeWork Forum, DLF Cyber City, Gurugram, Haryana</p>
        <p>ISO 9001:2015 Certified Company</p>
      </div>
  
      {/* 2nd div */}
      <div className="w-full md:w-3/4">
        <div className="flex flex-wrap justify-between w-full">
          <div className="w-full md:w-1/3 flex flex-col justify-start text-left mb-4 md:mb-0">
            <h4 className="font-semibold">Our Offices</h4>
            <p className="flex flex-col">
              <span>Gurugram</span>
              <span>Noida</span>
              <span>Varanasi</span>
              <span>Abu Dhabi</span>
            </p>
          </div>
  
          <div className="w-full md:w-1/3 flex flex-col justify-start text-left mb-4 md:mb-0">
            <h4 className="font-semibold">Reach Us</h4>
            <p>Phone: </p>
            <p>+91 7428867890</p>
            <p>Email:</p>
            <p>info@codersbaytech.com</p>
          </div>
  
          <div className="w-full md:w-1/3 flex flex-col justify-start text-left mb-4 md:mb-0">
            <h4 className="font-semibold">Subscribe</h4>
            <span>
              Keep up to date with the latest blog, industry trends, and technical announcements.
            </span>
            <div className="w-full flex items-center">
              <input
                type="email"
                placeholder="Email Address"
                className="p-2 border rounded"
              />
              <FiArrowRightCircle />
            </div>
          </div>
        </div>
  
        <div className="container mx-auto py-10 px-4 w-full">
          <div className="flex flex-wrap justify-between">
            {/* Industries */}
            <div className="w-full md:w-1/3 flex flex-col justify-start text-left mb-4 md:mb-0">
              <h2 className="text-2xl font-bold mb-4">Industries</h2>
              <ul className="space-y-2">
                <li>Energy & Utility</li>
                <li>Retail & E-Commerce</li>
                <li>Hospitality & Transportation</li>
                <li>Public Sector</li>
                <li>Health Care & Life Science</li>
                <li>Media & Entertainment</li>
                <li>Banking & Finance Service</li>
                <li>Education</li>
                <li>Manufacturing</li>
              </ul>
            </div>
  
            {/* Services */}
            <div className="w-full md:w-1/3 flex flex-col justify-start text-left mb-4 md:mb-0">
              <h2 className="text-2xl font-bold mb-4">Services</h2>
              <ul className="space-y-2">
                <li>Software Development</li>
                <li>Mobile App Development</li>
                <li>Website Development</li>
                <li>AI & ML</li>
                <li>eCommerce</li>
                <li>ERP & CRM</li>
                <li>Blockchain</li>
                <li>Marketing</li>
                <li>Emerging Tech</li>
                <li>Cloud Engineering</li>
                <li>Hire developers</li>
                <li>Game Development</li>
              </ul>
            </div>
  
            {/* Company */}
            <div className="w-full md:w-1/3 flex flex-col justify-start text-left mb-4 md:mb-0">
              <h2 className="text-2xl font-bold mb-4">Company</h2>
              <ul className="space-y-2">
                <li>Home</li>
                <li>About Us</li>
                <li>Careers</li>
                <li>Contact Us</li>
              </ul>
              <h2 className="text-2xl font-bold mt-6 mb-4">Legal</h2>
              <ul className="space-y-2">
                <li>Disclaimer</li>
                <li>Terms and Conditions</li>
                <li>Privacy Policy</li>
                <li>Cookie Policy</li>
                <li>Refund Policy</li>
              </ul>
            </div>
          </div>
        </div>
  
        <div className="flex flex-wrap justify-between w-full items-center">
          <div className="mt-1 w-full md:w-[20%]">
            <h2 className="text-2xl font-bold mb-4">Resources</h2>
            <ul className="space-y-2">
              <li>Partner Program</li>
            </ul>
          </div>
  
          <div className="mt-8 w-full md:w-[20%]">
            <h2 className="text-2xl font-bold mb-4">Account</h2>
            <ul className="space-y-2">
              <li>Payment</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  
    <div className="bg-purple-800 text-white p-4 text-center flex justify-between mt-4 flex-wrap">
      <p>Crafted with <FaHeart className="inline text-red-500" /> in India. &copy; 2023 Codersbay Technologies.</p>
      <div className="flex justify-center space-x-4 mt-2 w-full md:w-auto">
        {/* Social icons here */}
      </div>
    </div>
  </footer>
  
  );
};

export default Footer;
