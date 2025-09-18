"use client";

import Eye from "@/assets/svg/eye.svg";
import EyeClose from "@/assets/svg/eyeClose.svg";
import { useState } from "react";

export default function InputPassword({
    name,
    placeholder,
}: {
    name: string;
    placeholder: string;
}) {
    const [isShow, setIsShow] = useState(false);
    const eyeToggle = () => setIsShow((state) => !state);
    return (
        <div className="w-full relative">
            <input
                name={name}
                type={isShow ? "text" : "password"}
                placeholder={placeholder}
                className="body-3 p-4 bg-f-gray-50 rounded-[8px] w-full"
            />
            <div className="absolute right-2 top-1/2 -translate-y-1/2" onClick={eyeToggle}>
                {!isShow ? <Eye /> : <EyeClose />}
            </div>
        </div>
    );
}
