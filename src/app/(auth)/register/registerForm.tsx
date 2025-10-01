"use client";
import BaseInput from "@/components/ui/BaseInput/BaseInput";
import PhoneField from "@/components/ui/InputPhone/InputPhone";
import { toastShowResult } from "@/helpers/toast/toastHelpers";
import { registerAction } from "@/libs/formActions/usersAction";
import { redirect } from "next/navigation";
import { toast } from "react-toastify";

export default function RegisterForm() {
    const handleAction = async (event: FormData) => {
        const res = toastShowResult(await registerAction(event));
        if (res.type === "success") {
            redirect("/login");
        }
    };
    return (
        <form
            className=" flex flex-col gap-4 
                                            xl:gap-6
                                            "
            action={handleAction}
        >
            <BaseInput inputName="name" inputType="name" placeholder="Имя" />
            <BaseInput inputName="email" inputType="email" placeholder="E-mail" />
            <PhoneField inputName="phone1" />
            <div className="w-full flex flex-col gap-4">
                <BaseInput inputName="password" placeholder="Введите пароль" inputType="password" />
                <BaseInput
                    inputName="password_confirm"
                    placeholder="Повторите пароль"
                    inputType="password"
                />
            </div>
            <button
                type="submit"
                className="button-1 py-[11px] px-[70px] text-f-white-100 bg-f-accent self-start  rounded-full cursor-pointer"
            >
                Войти
            </button>
            <button
                className="bg-cyan-500 rounded-full cursor-pointer self-center px-3 text-white"
                onClick={() => {
                    toast("HELLOW");
                }}
            >
                Toast test
            </button>
        </form>
    );
}
