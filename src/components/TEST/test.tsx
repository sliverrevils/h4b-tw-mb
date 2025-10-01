"use client";

import { createUserTEST, getUsersTEST } from "@/libs/db/usersFuncsDb";

export function TestCreateBtn() {
    async function testHandle() {
        const res = await createUserTEST();
        console.log("✅", res);
    }
    return (
        <button
            onClick={testHandle}
            className="px-5 py-3 rounded-full bg-red-900 text-amber-50 cursor-pointer"
        >
            Test CREATE
        </button>
    );
}
export function TestGetBtn() {
    async function testHandle() {
        const res = await getUsersTEST();
        console.log("✅", res);
    }
    return (
        <button
            onClick={testHandle}
            className="px-5 py-3 rounded-full bg-blue-700 text-amber-50 cursor-pointer"
        >
            Test GET
        </button>
    );
}
