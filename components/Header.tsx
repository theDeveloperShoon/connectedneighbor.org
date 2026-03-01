'use client';
import Image from "next/image";
import { ImBubble } from "react-icons/im";
import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { useState } from "react";

export default function Header() {
    const { scrollY } = useScroll();
    const [hidden, setHidden] = useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious() ?? 0;
        if (latest > previous && latest > 150) {
            setHidden(true);
        } else {
            setHidden(false);
        }
    });

    return (
        <motion.header 
            animate={{y: hidden ? "-100%" : "0%" }}
            // transition={{ duration: 0.3, ease: "easeInOut" }}
            transition={{ type: "spring", stiffness: 300, damping: 30}}
            className={`w-full top-5 z-50 sticky`}
            >
            <nav>
                <div className="flex items-center justify-between ui-bg-blur px-4 py-4 shadow-md rounded-lg mx-4">
                    <a href="/">
                        <Image
                            className="light:invert"
                            src="/logo.svg"
                            alt="Logo"
                            width={50}
                            height={50}
                        />
                    </a>
                    <a href="/contact">
                        <div className="flex gap-8 text-center items-center rounded-lg border-2 border-white-300 px-4 py-2 light:invert">
                            <p className="font-sans">Request a Quote</p>  
                            <ImBubble className="w-6 h-6" />
                        </div>
                    </a>

                </div>

            </nav>
        </motion.header>
    );
}