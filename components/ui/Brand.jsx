import Link from "next/link";

const Brand = () => (
    <Link href="/" className="flex items-center gap-2">
        <svg className="w-8 h-8" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="40" height="40" rx="8" fill="url(#gradient)" />
            <path d="M12 20C12 15.5817 15.5817 12 20 12C24.4183 12 28 15.5817 28 20" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M14 24H26" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
            <circle cx="16" cy="24" r="2" fill="white" />
            <circle cx="24" cy="24" r="2" fill="white" />
            <path d="M18 17H22" stroke="white" strokeWidth="2" strokeLinecap="round" />
            <defs>
                <linearGradient id="gradient" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#6366f1" />
                    <stop offset="1" stopColor="#22c55e" />
                </linearGradient>
            </defs>
        </svg>
        <span className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-green-500 bg-clip-text text-transparent">
            Carvohub
        </span>
    </Link>
)

export default Brand
