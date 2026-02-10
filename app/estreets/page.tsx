import { CiMail } from "react-icons/ci";
import { FaArrowRight, FaPhone } from "react-icons/fa";

export const metadata = {
    title: "E-Streets",
    description: "E-Streets contact information",
};

export default function EStreets() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl font-bold mb-6">E-Streets</h1>
        <a href="tel:973-382-2015" className="flex flex-wrap items-center mt-4 rounded-xl shadow-sm gap-4 py-4 px-4 w-7/8 sm:w-1/4 cursor-pointer hover:shadow-md transition-shadow justify-between">
            <FaPhone className="w-5 h-5"/>
            <div>
                <h3 className="text-sm font-bold">Phone</h3>
                <p className="text-center text-sm">973-382-2015</p>
            </div>
            <FaArrowRight className="w-5 h-5 ml-auto"/>
        </a>
        <a href="mailto:estreets@gmail.com" className="flex flex-wrap items-center mt-4 rounded-xl shadow-sm gap-4 py-4 px-4 w-7/8 sm:w-1/4 cursor-pointer hover:shadow-md transition-shadow justify-between">
            <CiMail className="w-5 h-5"/>
            <div>
                <h3 className="text-sm font-bold">Email</h3>
                <p className="text-center text-sm">estreets@gmail.com</p>
            </div>
            <FaArrowRight className="w-5 h-5 ml-auto"/>
        </a>
    </div>
  );
}