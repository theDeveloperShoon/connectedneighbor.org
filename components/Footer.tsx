import Image from "next/image";

export default function Footer() {
    return (
        <footer className="ui-bg-secondary relative w-full">
            <svg className="w-full h-full inset-0 z-0 absolute ">
                <defs>
                    <mask id="mask" maskUnits="userSpaceOnUse">
                        <rect width="100%" height="100%" fill="#fff" />
                        <rect width="100%" height="96px" fill="#000" rx="48px" ry="48px" y="-48px" x="0px"/>
                    </mask>
                    <radialGradient id="gradient" cx=".1" cy=".4" r="1.25">
                        <stop offset="0%" stopColor="#706767" />
                        <stop offset="100%" stopColor="#4c4747" />
                    </radialGradient>
                </defs>
                <rect 
                    width="100%" 
                    height="100%" 
                    fill="url(#gradient)" 
                    mask="url(#mask)" 
                />
            </svg>
            <div className="w-full py-16 px-12 relative z-10">
                <div className="flex items-center">
                    <Image
                        className="light:invert"
                        src="/logo.svg"
                        alt="Logo"
                        width={50}
                        height={50}
                    />
                    <p className="font-stretch tracking-wide ml-2">onnected Neighbor</p>
                </div>
                <div className="w-full mt-5 h-[1px] ui-bg-secondary"></div>
                <div className="grid grid-rows-2 py-4">
                    <div>
                        <ul className="flex gap-4 py-4 text-sm">
                            <li>
                                <a href="/terms-and-conditions">Terms & Conditions</a>
                            </li>
                            <li>
                                <a href="/privacy-policy">Privacy Policy</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <p className="text-sm">&copy; 2026 Connected Neighbor. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}