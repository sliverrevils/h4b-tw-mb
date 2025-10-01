"use client";
import BaseInput from "@/components/ui/BaseInput/BaseInput";
import { loginAction } from "@/libs/formActions/usersActionClient";

import { signIn } from "next-auth/react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useMemo } from "react";

export default function LoginForm() {
    const search = useSearchParams();

    const errorMemo = useMemo(() => {
        const error = search.get("error");
        if (error == "CredentialsSignin") {
            return <div className="text-f-error"> Ошибка логина или пароля</div>;
        }
        return false;
    }, [search]);

    return (
        <form
            className=" flex flex-col gap-4 
                            xl:gap-6
                            "
            action={loginAction}
        >
            {errorMemo}
            <BaseInput inputName="email" inputType="email" placeholder="E-mail" />

            <div className="w-full flex flex-col gap-2">
                <BaseInput
                    inputName="password"
                    placeholder="Введите ваш пароль"
                    inputType="password"
                    isCheckReg={false}
                />
                <Link href={"/recover"} className="body-3 text-f-blue-950 cursor-pointer">
                    Забыли пароль?
                </Link>
            </div>
            <button
                type="submit"
                className="button-1 py-[11px] px-[70px] text-f-white-100 bg-f-accent self-start  rounded-full cursor-pointer"
            >
                Войти
            </button>
        </form>
    );
}
