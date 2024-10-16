import Link from 'next/link';

export default function Header() {
    const menuList = [
        {
            name: "Home",
            link: "/home",
        },
        {
            name: "About Us",
            link: "/about",
        },
        {
            name: "Contact Us",
            link: "/contact",
        },
    ];

    return (
        <nav className="py-3 px-10 border-b flex items-center justify-between">
            <img className="h-9" src="/dlogo.png" alt="logo" />
            <div className="flex-grow flex justify-center gap-4 items-center font-semibold">
                {menuList?.map((item) => {
                    return (
                        <Link href={item.link} key={item.name}>
                            <button>{item.name}</button>
                        </Link>
                    );
                })}
            </div>
            <Link href={"/login"}>
            <button className="bg-orange-600 text-white py-2 px-6 rounded-full font-medium shadow-md hover:bg-orange-650 transition duration-300 ease-in-out hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-orange-500">
             Login
            </button>

            </Link>
        </nav>
    );
}
