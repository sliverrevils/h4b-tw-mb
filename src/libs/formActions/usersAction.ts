"use server";

import { signIn } from "next-auth/react";
import { registerUser } from "../db/usersFuncsDb";
import { IActionResult } from "@/types/types";

export async function registerAction(formData: FormData): Promise<IActionResult> {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phone1 = formData.get("phone1") as string;
    const password = formData.get("password") as string;

    return registerUser({ name, email, phone1, password, fullData: false, is_blocked: false });
}
