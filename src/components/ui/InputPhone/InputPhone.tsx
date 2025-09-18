"use client";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

export default function PhoneField() {
    return (
        <div className="w-full max-w-md">
            <PhoneInput
                country={"ru"}
                enableSearch
                inputClass="!w-full !h-12 !text-sm !rounded-md !border !border-gray-300 !pl-14"
                buttonClass="!bg-white !border !border-gray-300 !rounded-l-md"
                containerClass="!w-full"
                dropdownClass="!z-50"
                placeholder="Введите номер"
            />
        </div>
    );
}
