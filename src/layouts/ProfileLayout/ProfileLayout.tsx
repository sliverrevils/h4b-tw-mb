import UserInfo from "@/components/common/UserInfo/UserInfo";
import UserProfileMenu from "@/components/html/UserProfileMenu/UserProfileMenu";
import { ArrowLEftIco, ExitIco } from "@/icons/icons";
import Link from "next/link";

export default function ProfileLayout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <div className="flex justify-between items-center pb-[23px]">
                <Link
                    href={"/user/profile/personal_information"}
                    className="flex gap-2 items-center"
                >
                    <ArrowLEftIco className="cursor-pointer" />
                    <div
                        className="body-2 text-f-blue-500 cursor-pointer hidden
                                    lg:block
                                    "
                    >
                        Назад к профилю
                    </div>
                </Link>

                <div className="h3 text-f-blue-950 lg:hidden">Мой профиль</div>
                <Link href={"/"} className="lg:hidden">
                    <ExitIco />
                </Link>
            </div>
            <UserInfo
                name="AndreiGorsikh1"
                userName="mailbox#35640"
                balance={12}
                status={55}
                className="box items-center bg-f-gray-30 mx-4 my-5
                            md:mx-6
                            lg:hidden                            
                            "
            />

            <UserProfileMenu />

            {children}
        </div>
    );
}
