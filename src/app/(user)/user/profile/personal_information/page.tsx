import BaseInput from "@/components/ui/BaseInput/BaseInput";
import PhoneField from "@/components/ui/InputPhone/InputPhone";
import { Caretdown } from "@/icons/icons";
import Link from "next/link";

export default function PersonalInformationPage() {
    return (
        <div className="w-full h-full py-8">
            <form
                className="flex flex-col gap-4
                            lg:gap-6 lg:max-w-[413px]
                            "
                action={async (fd) => {
                    "use server";
                    console.log("FORM", fd);
                }}
            >
                <div
                    className="columns-1 row-auto *:mb-4
                                md:columns-2 
                                lg:columns-1  
                                "
                >
                    <BaseInput
                        inputName="name"
                        name="Имя"
                        errMsg="Имя должно содержать от 2 до 10 букв без цифр и специальных символов."
                        inputType="name"
                    />
                    <BaseInput
                        inputName="surname"
                        name="Фамилия"
                        errMsg="Фамилия должна содержать от 2 до 10 букв без цифр и специальных символов."
                        inputType="name"
                    />
                    <BaseInput
                        inputName="patronymic"
                        name="Отчество"
                        errMsg="Отчество должно содержать от 2 до 15 букв без цифр и специальных символов."
                        inputType="name"
                        required={false}
                    />
                    <div className="flex flex-col gap-2">
                        <div className="body-3 text-f-blue-500">День рождения</div>
                        <input
                            required
                            name="bithday"
                            type="date"
                            className="body-3 text-f-blue-950 bg-f-gray-50 p-4 rounded-lg w-full "
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <div className="body-3 text-f-blue-500">Основной номер</div>
                        <PhoneField inputName="phone1" required />
                    </div>
                    <div className="flex flex-col gap-2">
                        <div className="body-3 text-f-blue-500">Дополнительный номер</div>
                        <PhoneField inputName="phone2" required={false} />
                    </div>
                    <BaseInput name="Email Address" inputName="email" inputType="email" />
                </div>
                <div
                    className="flex flex-col gap-4
                                lg:gap-6"
                >
                    <label className="flex items-center space-x-3 cursor-pointer select-none">
                        <input type="checkbox" name="notifications" className="peer hidden" />
                        <div className="w-5 h-5 rounded-md border border-gray-400 peer-checked:bg-f-accent peer-checked:border-blue-600 transition-colors duration-200 flex items-center justify-center">
                            <svg
                                className="w-3 h-3 text-white opacity-0 peer-checked:opacity-100 transition-opacity duration-200"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </div>
                        <span className="text-sm text-gray-800">Получать уведомления</span>
                    </label>

                    <div className="w-full relative">
                        <select
                            className="appearance-none body-3 text-f-blue-950 bg-f-gray-50 p-4 rounded-lg w-full outline-0"
                            name="gender"
                            defaultValue={"gender"}
                            required
                        >
                            <option disabled>Выберите пол</option>
                            <option value="male">Мужской</option>
                            <option value="female">Женский</option>
                        </select>
                        <Caretdown className="absolute right-2.5 top-1/2 -translate-y-1/2" />
                    </div>
                </div>
                <div
                    className="flex flex-col gap-4
                        md:flex-row
                        "
                >
                    <Link
                        href={"change_password"}
                        className="button-1 border-1 border-f-accent p-[11px] px-6 rounded-full text-center cursor-pointer text-f-accent"
                    >
                        Поменять пароль
                    </Link>
                    <button
                        type="submit"
                        className="button-1 border-1 border-f-accent p-[11px] px-6 rounded-full text-center cursor-pointer text-f-white-100 bg-f-accent"
                    >
                        Сохранить
                    </button>
                </div>
            </form>
        </div>
    );
}
