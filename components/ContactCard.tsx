import { CiMail } from "react-icons/ci";
import { FaArrowRight, FaPhone, FaAddressCard } from "react-icons/fa6"; 
import Image from "next/image";
import { notFound } from "next/navigation";
import { getContact } from "@/lib/data";

interface ContactCardProps {
    slug: string;
}

export default function ContactCard({ slug }: ContactCardProps) {
  const contact = getContact(slug);
  
  if (!contact) {
    return notFound();
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      {contact.imageUrl ? (
        <div>
            <Image
            src={contact.imageUrl}
            alt={contact.name}
            width={400}
            height={400}
            className="w-[200px] h-[200px] md:w-[300px] md:h-[300px] w-[250px] h-[250px] rounded-full mb-6 object-cover shadow-lg"
            />
            <h1 className="text-4xl font-bold mb-6 text-center">{contact.name}</h1>
        </div>
      ) : (
        <h1 className="text-4xl font-bold mb-6">{contact.name}</h1>
      )}

      {/* Phone Link */}
      <a href={`tel:${contact.phone}`} className="flex flex-wrap items-center mt-4 rounded-xl shadow-sm gap-4 py-4 px-4 w-7/8 sm:w-1/4 cursor-pointer hover:shadow-md transition-shadow justify-between">
        <FaPhone className="w-5 h-5"/>
        <div>
          <h3 className="text-sm font-bold">Phone</h3>
          <p className="text-center text-sm">{contact.phone}</p>
        </div>
        <FaArrowRight className="w-5 h-5 ml-auto"/>
      </a>

      {/* Email Link */}
      <a href={`mailto:${contact.email}`} className="flex flex-wrap items-center mt-4 rounded-xl shadow-sm gap-4 py-4 px-4 w-7/8 sm:w-1/4 cursor-pointer hover:shadow-md transition-shadow justify-between">
        <CiMail className="w-5 h-5"/>
        <div>
          <h3 className="text-sm font-bold">Email</h3>
          <p className="text-center text-sm">{contact.email}</p>
        </div>
        <FaArrowRight className="w-5 h-5 ml-auto"/>
      </a>

      {/* Download VCF Link */}
      <a href={`/api/vcf/${contact.slug}`} className="flex flex-wrap items-center mt-4 rounded-xl shadow-sm gap-4 py-4 px-4 w-7/8 sm:w-1/4 cursor-pointer hover:shadow-md transition-shadow justify-between border-2 border-blue-500 bg-blue-50">
        <FaAddressCard className="w-5 h-5 text-blue-600"/>
        <div>
          <h3 className="text-sm font-bold text-blue-900">Save Contact</h3>
          <p className="text-center text-sm text-blue-700">Download Virtual Contact</p>
        </div>
        <FaArrowRight className="w-5 h-5 ml-auto text-blue-600"/>
      </a>
    </div>
  );
}
