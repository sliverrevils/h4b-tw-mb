"use client";

import { ErrorIco } from "@/icons/icons";
import { useMemo, useState } from "react";

const INPUT_VALIDATE = {
    name: {
        reg: /^[A-Za-zА-Яа-яЁё ]{2,15}$/,
        defErrorMsg: "Имя должно содержать от 2 до 15 букв без цифр и специальных символов.",
    },
    email: {
        reg: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/i,
        defErrorMsg: "Пожалуйста, укажите действительный адрес электронной почты.",
    },
    password: {
        reg: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/,
        defErrorMsg:
            "Пароль должен содержать минимум 8 символов, включая заглавную и строчную букву, а также цифру.",
    },
} as const;

type IInputValidateType = keyof typeof INPUT_VALIDATE | undefined;

export default function BaseInput({
    name,
    inputName,
    checkInput,
    errMsg,
}: {
    name?: string;
    inputName: string;
    checkInput?: IInputValidateType;
    errMsg?: string;
}) {
    const [inputValue, setInputValue] = useState<string>("");
    const [error, setError] = useState<string>("");

    const isError = useMemo<boolean>(() => !!error, [error]);

    const onChangeHandle = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setInputValue(() => value.trim());
        if (checkInput) {
            setError(() =>
                INPUT_VALIDATE[checkInput].reg.test(value)
                    ? ""
                    : errMsg || INPUT_VALIDATE[checkInput].defErrorMsg
            );
        }
    };

    return (
        <div className="flex flex-col gap-2 ">
            {name && <div className="body-3 text-f-blue-500">{name}</div>}
            <div className="w-full relative">
                <input
                    name={inputName}
                    className={`body-3 text-f-blue-950 bg-f-gray-50  p-4 rounded-lg w-full 
                               
                                ${isError ? "outline-1 outline-[#FF3737]" : ""}
                                `}
                    value={inputValue}
                    onChange={onChangeHandle}
                />
                {isError && <ErrorIco className="absolute right-2 top-1/2 -translate-y-1/2" />}
            </div>
            {error && <div className="body-3 text-[#FF3737] ">{error}</div>}
        </div>
    );
}
