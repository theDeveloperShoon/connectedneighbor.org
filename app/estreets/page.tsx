import { CiMail } from "react-icons/ci";
import { FaArrowRight, FaPhone } from "react-icons/fa";

export default function EStreets() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl font-bold mb-6">E-Streets</h1>
        <a href="tel:973-382-2015" className="grid grid-cols-3 items-center mt-4 rounded-xl shadow-sm gap-4 py-4 px-4 w-1/4 cursor-pointer hover:shadow-md transition-shadow">
            <FaPhone className="w-5 h-5"/>
            <p className="text-center">973-382-2015</p>
            <FaArrowRight className="w-5 h-5 ml-auto"/>
        </a>
        <a href="mailto:estreets@gmail.com" className="grid grid-cols-3 items-center mt-4 rounded-xl shadow-sm gap-4 py-4 px-4 w-1/4 cursor-pointer hover:shadow-md transition-shadow">
            <CiMail className="w-5 h-5"/>
            <p className="text-center">estreets@gmail.com</p>
            <FaArrowRight className="w-5 h-5 ml-auto"/>
        </a>
    </div>
  );
}