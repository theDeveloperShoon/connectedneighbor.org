export default function Footer() {
    return (
        <footer className="w-full py-16 px-12">
            <div className="w-full mt-5 h-[1px] ui-bg-secondary"></div>
            <div className="grid grid-rows-2 py-4">
                <div>
                    <ul className="flex gap-4 py-4 text-sm text-gray-400">
                        <li>
                            <a href="/terms-and-conditions">Terms & Conditions</a>
                        </li>
                        <li>
                            <a href="/privacy-policy">Privacy Policy</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <p className="text-sm text-gray-400">&copy; 2026 Connected Neighbor. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}