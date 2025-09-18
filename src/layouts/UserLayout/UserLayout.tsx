import Image from "next/image";
import Link from "next/link";

import Order from "@/assets/svg/order.svg";
import Accounts from "@/assets/svg/accounts.svg";
import Branches from "@/assets/svg/branches.svg";
import Track from "@/assets/svg/track.svg";
import Header from "@/components/html/Header/Header";
import CircleProgress from "@/components/ui/CircleProgress/CircleProgress";
import UserInfo from "@/components/common/UserInfo/UserInfo";

export default function UserLayout({ children }: { children: React.ReactNode }) {
    return (
        <div
            className="mycontainer_admin  flex flex-col bg-f-white-100
                        md:flex-col
                        lg:flex-row lg:bg-f-gray-50 
                       
                        "
        >
            <Header className="lg:hidden bg-f-white-100" />
            <header>
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

                <div
                    className="w-[320px] hidden
                                    min-lg:block                                    
                                    xl:w-[345px]
                                    "
                >
                    <div
                        className="px-6 py-10
                                xl:px-8 xl:py-12
                                "
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
                                    mb-10
                    "
                            />
                        </Link>

                        <UserInfo
                            name="AndreiGorsikh1"
                            userName="mailbox#35640"
                            balance={12}
                            status={55}
                        />
                    </div>

                    <aside>
                        <div className="bg-f-white-100 rounded-[16px] flex gap-4 py-6 px-8">
                            <div>
                                <Order className="**:fill-f-accent" />
                            </div>
                            <div className="button-2 text-f-accent w-full">Мои заказы</div>
                        </div>
                        <div className="bg-transparent rounded-[16px] flex gap-4 py-6 px-8">
                            <div>
                                <Accounts className="**:fill-f-blue-500" />
                            </div>
                            <div className="button-2 text-f-blue-950 w-full">Счета</div>
                        </div>
                        <div className="bg-transparent rounded-[16px] flex gap-4 py-6 px-8">
                            <div>
                                <Branches className="**:fill-f-blue-500" />
                            </div>
                            <div className="button-2 text-f-blue-950 w-full">Отделения</div>
                        </div>
                        <div className="bg-transparent rounded-[16px] flex gap-4 py-6 px-8">
                            <div>
                                <Track className="**:fill-f-blue-500" />
                            </div>
                            <div className="button-2 text-f-blue-950 w-full">
                                Отследить посылку{" "}
                            </div>
                        </div>
                        <div className="bg-transparent rounded-[16px] flex gap-4 py-6 px-8">
                            <div>
                                <Order className="**:fill-f-blue-500" />
                            </div>
                            <div className="button-2 text-f-blue-950 w-full">Мой профиль </div>
                        </div>
                        <div className="bg-transparent rounded-[16px] flex gap-4 py-6 px-8">
                            <div>
                                <Order className="**:fill-f-blue-500" />
                            </div>
                            <div className="button-2 text-f-blue-950 w-full">Выйти</div>
                        </div>
                    </aside>
                </div>
            </header>
            <main className="box bg-f-white-100 w-full shrink-1 grow-1 basis-0 relative">
                {children}
            </main>
            <footer
                className="flex justify-around bg-f-gray-50 p-2 
                            md:flex 
                            lg:hidden
                            "
            >
                <div className="flex flex-col items-center gap-0.5">
                    <div>
                        <Order className="**:fill-f-blue-500" />
                    </div>
                    <div className="button-2 text-f-gray-500">Мои заказы</div>
                </div>
                <div className="flex flex-col items-center gap-0.5">
                    <div>
                        <Accounts className="**:fill-f-blue-500" />
                    </div>
                    <div className="button-2 text-f-gray-500">Cчета</div>
                </div>
                <div className="flex flex-col items-center gap-0.5">
                    <div>
                        <Branches className="**:fill-f-blue-500" />
                    </div>
                    <div className="button-2 text-f-gray-500">Отделения</div>
                </div>
                <div className="flex flex-col items-center gap-0.5">
                    <div>
                        <Track className="**:fill-f-blue-500" />
                    </div>
                    <div className="button-2 text-f-gray-500">Отследить</div>
                </div>
            </footer>
        </div>
    );
}
