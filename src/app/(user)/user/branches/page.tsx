import { FAKE_BRANCHES } from "@/data/fake/fake_branches";
import { TimerIco, USAIco } from "@/icons/icons";

export default function BranchesPage() {
    return (
        <div className="flex flex-col w-full h-full gap-[30px]">
            <div
                className="flex flex-col gap-8 border-b border-b-f-gray-200 pb-4
                lg:gap-10
            "
            >
                <div className="flex flex-col gap-[60px]  justify-between items-start">
                    <div className="h3 text-f-blue-950">Наши отделения </div>
                    <div className="">
                        <div className="tag text-f-blue-950 bg-f-gray-50 py-3 px-4 rounded-xl flex gap-2">
                            <USAIco />
                            <div>Соединенные Штаты</div>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className="columns-1  gap-4 h-full
                            md:columns-2
                            xl:columns-3
                            "
            >
                {FAKE_BRANCHES.map(({ adress, city, id_branch, index, name, period, phone }) => (
                    <div
                        key={index}
                        className="box w-full bg-f-gray-30 flex flex-col gap-4 mb-4 break-inside-avoid
                                    md:gap-5
                                    lg:gap-6
                                    xl:gap-8
                                    "
                    >
                        <div className="flex justify-between items-center">
                            <div className="h4-accent text-f-blue-950">{name}</div>
                            <div className="flex items-center gap-2">
                                <TimerIco />
                                <div className="tag text-f-accent">{period}</div>
                            </div>
                        </div>

                        <div className=" border-t-1 border-t-f-gray-200 ">
                            <div
                                className="flex flex-col gap-1 py-2 border-b-1 border-b-f-gray-200 
                                            md:flex-row md:py-2.5
                                            lg:py-3
                                            "
                            >
                                <div className="body-3 text-f-blue-500 w-[40%]">ID для склада</div>
                                <div className="body-3 text-f-blue-950">{id_branch}</div>
                            </div>
                            <div
                                className="flex flex-col gap-1 py-2 border-b-1 border-b-f-gray-200 
                                            md:flex-row md:py-2.5
                                            lg:py-3
                                            "
                            >
                                <div className="body-3 text-f-blue-500 w-[40%]">Адрес:</div>
                                <div className="body-3 text-f-blue-950">{adress}</div>
                            </div>
                            <div
                                className="flex flex-col gap-1 py-2 border-b-1 border-b-f-gray-200 
                                            md:flex-row md:py-2.5
                                            lg:py-3
                                            "
                            >
                                <div className="body-3 text-f-blue-500 w-[40%]">Город:</div>
                                <div className="body-3 text-f-blue-950">{city}</div>
                            </div>
                            <div
                                className="flex flex-col gap-1 py-2 border-b-1 border-b-f-gray-200 
                                            md:flex-row md:py-2.5
                                            lg:py-3
                                            "
                            >
                                <div className="body-3 text-f-blue-500 w-[40%]">Индекс:</div>
                                <div className="body-3 text-f-blue-950">{index}</div>
                            </div>
                            <div
                                className="flex flex-col gap-1 py-2 border-b-1 border-b-f-gray-200 
                                            md:flex-row md:py-2.5
                                            lg:py-3
                                            "
                            >
                                <div className="body-3 text-f-blue-500 w-[40%]">Телефон:</div>
                                <div className="body-3 text-f-blue-950">{phone}</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
