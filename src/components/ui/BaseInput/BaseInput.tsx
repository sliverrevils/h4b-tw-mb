"use client";

import { ErrorIco } from "@/icons/icons";
import { useMemo, useState } from "react";
import Eye from "@/assets/svg/eye.svg";
import EyeClose from "@/assets/svg/eyeClose.svg";
import { INPUT_VALIDATE } from "@/data/constants/inputValidate";

type IInputValidateType = keyof typeof INPUT_VALIDATE | undefined;

export default function BaseInput({
    name,
    inputName,
    inputType,
    errMsg,
    placeholder = "",
    isCheckReg = true,
    required = true,
}: {
    name?: string;
    inputName: string;
    inputType?: IInputValidateType;
    errMsg?: string;
    placeholder?: string;
    isCheckReg?: boolean;
    required?: boolean;
}) {
    const [inputValue, setInputValue] = useState<string>("");
    const [error, setError] = useState<string>("");
    const [isShowPass, setIsShowPass] = useState(false);
    const eyeToggle = () => setIsShowPass((state) => !state);

    const isError = useMemo<boolean>(() => !!error, [error]);

    const onChangeHandle = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setInputValue(() => value.trim());

        if (inputType) {
            if (!isCheckReg) return;
            setError(() => {
                return INPUT_VALIDATE[inputType].reg.test(value)
                    ? ""
                    : errMsg || INPUT_VALIDATE[inputType].defErrorMsg;
            });
        }
    };

    const inputTypeMemo: React.HTMLInputTypeAttribute = useMemo(() => {
        if (inputType === "password") {
            return isShowPass ? "text" : "password";
        }
        if (inputType === "email") {
            return "email";
        }

        return "text";
    }, [isShowPass]);

    return (
        <div className="flex flex-col gap-2 ">
            {name && <div className="body-3 text-f-blue-500">{name}</div>}
            <div className="w-full relative">
                <input
                    name={inputName}
                    className={`body-3 text-f-blue-950 bg-f-gray-50  p-4 rounded-lg w-full 
                               
                                ${isError ? "outline-1 outline-f-error" : ""}
                                `}
                    value={inputValue}
                    onChange={onChangeHandle}
                    placeholder={placeholder}
                    type={inputTypeMemo}
                    required={required}
                />
                <div className="absolute right-2 top-1/2 -translate-y-1/2 flex gap-1">
                    {isError && <ErrorIco />}
                    {inputType === "password" && (
                        <div className="cursor-pointer" onClick={eyeToggle}>
                            {!isShowPass ? <Eye /> : <EyeClose />}
                        </div>
                    )}
                </div>
            </div>
            {error && <div className="body-3 text-f-error ">{error}</div>}
        </div>
    );
}
