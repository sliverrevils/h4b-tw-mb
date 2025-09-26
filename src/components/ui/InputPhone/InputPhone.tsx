"use client";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

export default function PhoneField({
    name,
    required = false,
}: {
    name: string;
    required?: boolean;
}) {
    return (
        <div className="w-full">
            <PhoneInput
                country={"ru"}
                enableSearch
                inputClass="!w-full !py-2 !pl-12 !pr-4  !rounded-md !focus:outline-none !focus:ring-2 !focus:ring-blue-500 !text-sm !border-none !bg-f-gray-50 "
                buttonClass="!bg-gray-100  !rounded-l-md !border-none !bg-f-gray-50 "
                containerClass="!w-full !border-none !bg-f-gray-50 !rounded-[8px] !p-2"
                dropdownClass="!absolute !z-50 !bg-white  !shadow-lg !text-sm !max-h-60 !overflow-y-auto !border-none !bg-f-gray-50"
                placeholder="Введите номер"
                inputProps={{
                    name,
                    required,
                    autoComplete: "tel",
                }}
            />
        </div>
    );
}
