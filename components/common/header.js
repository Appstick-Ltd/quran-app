import Link from "next/link";

const Header = () => {
    return (
        <div className="bg-white h-16 border-b">
            <div className="container py-4">
                <div className="flex justify-between">
                    <Link href="/">
                        <h4 className="text-lg font-medium text-gray-700">Quran</h4>
                    </Link>
                </div>

            </div>
        </div>
    )
}

export default Header