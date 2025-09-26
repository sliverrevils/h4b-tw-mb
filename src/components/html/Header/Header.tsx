import Link from "next/link";

export default function Header({ className = "" }: { className?: string }) {
    return (
        <header
            className={`flex py-2 justify-between items-center  
                                xl:py-4.5 ${className}
                                `}
        >
            <Link href={"/"}>
                <img
                    src={"/logo.svg"}
                    alt="Hotel4Box logo"
                    className="
                    w-[124px] h-auto
                    sm:w-[144px] sm:h-auto
                    md:w-[180px] md:h-auto
                    xl:w-[213.12px] xl:h-auto
                    cursor-pointer
                    "
                />
            </Link>
            <div className="flex gap-4 items-center">
                <Link
                    href={"/user/track"}
                    className="link text-f-accent hidden
                                    md:block
                                    cursor-pointer
                                    "
                >
                    Отследить посылку
                </Link>
                <Link
                    href={"/login"}
                    className="link text-f-accent hidden
                                    md:block
                                    cursor-pointer
                                    "
                >
                    Войти
                </Link>
                <Link
                    href={"/register"}
                    className="button-1 text-center bg-f-accent text-f-white-100 py-2 px-4   rounded-full
                                   md:self-start md:py-2.5 md:px-8
                                   cursor-pointer
                                    "
                >
                    Регистрация
                </Link>
            </div>
        </header>
    );
}
