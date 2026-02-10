import { CiMail } from "react-icons/ci";
import { FaArrowRight, FaPhone } from "react-icons/fa";

export default function EStreets() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl font-bold">E-Streets</h1>
      <div className="flex items-center mt-4 rounded-xl shadow-sm gap-4 py-4 px-4">
        <FaPhone className="w-5 h-5"/>
        <p>973-382-2015</p>
        <FaArrowRight className="w-5 h-5"/>
      </div>
      <div className="flex items-center mt-4 rounded-xl shadow-sm gap-4 py-4 px-4">
        <CiMail className="w-5 h-5"/>
        <p>estreets@gmail.com</p>
        <FaArrowRight className="w-5 h-5"/>
      </div>
    </div>
  );
}