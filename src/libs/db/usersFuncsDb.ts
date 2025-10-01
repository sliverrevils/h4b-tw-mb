"use server";

import { connectDB } from "@/mongodb/connect";
import { IAddress } from "@/mongodb/models/adressModel";
import { IUser, UserModel } from "@/mongodb/models/userModel";
import { IActionResult } from "@/types/types";
import bcrypt from "bcryptjs";
import { parsePhoneNumberWithError } from "libphonenumber-js";

type IUserCreateProps = OnlyRequired<IUser>;
export const registerUser = async (user: IUserCreateProps): Promise<IActionResult> => {
    try {
        await connectDB();

        //clear mask phone
        const parsedPhone = parsePhoneNumberWithError(user.phone1).number;

        //check
        if (await UserModel.findOne({ phone1: parsedPhone }))
            throw new Error("Указанный телефон уже используется другим пользователем.");

        if (await UserModel.findOne({ email: user.email }))
            throw new Error("Указанный email уже используется другим пользователем.");

        //create user
        const newUser = new UserModel();
        Object.assign(newUser, user);
        newUser.phone1 = parsedPhone;

        //hash pass
        const hashedPassword = await bcrypt.hash(user.password, 10);
        newUser.password = hashedPassword;

        await newUser.save();
        return { type: "success", message: "Вы успешно зарегестрированы." };
    } catch (error) {
        if (error instanceof Error) {
            return { type: "warning", message: error.message };
        }
        return { type: "error", message: "Ошибка операции, повторите позже." };
    }
};

// export const loginUser = async ({
//     email,
//     password,
// }: {
//     email: string;
//     password: string;
// }): Promise<IActionResult | IUser> => {
//     try {
//         await connectDB();

//         const user = await UserModel.findOne({ email });
//         if (!user) throw new Error("Неверные данные для входа. Пожалуйста, попробуйте снова.");

//         const isPasswordCorrect = await bcrypt.compare(password, user.password);
//         if (!isPasswordCorrect)
//             throw new Error("Неверные данные для входа. Пожалуйста, попробуйте снова.");

//         return user.toObject<IUser>();
//     } catch (error) {
//         if (error instanceof Error) {
//             return { type: "warning", message: error.message };
//         }
//         return { type: "error", message: "Ошибка операции, повторите позже." };
//     }
// };

//! Пользователь со всеми адресами
export const getUserWithAdresses = async (userId: string) => {
    const user = await UserModel.findById(userId)
        .populate<{ addresses: IAddress[] }>("addresses")
        .lean<IUser>();
};

// export const createUserTEST = async (): Promise<string | string[]> => {
//     try {
//         connectDB();
//         const newUser = {
//             name: "Nik",
//             surname: "Saf",
//             email: "sliver@ya.ru",
//             notifications: true,
//             phone1: "+3243423423423",
//         };
//         const res = await UserModel.create(newUser);
//         return `Created`;
//     } catch (error: any) {
//         const errArr = Object.values(error.errors).map((e: any) => e.message as string);
//         return errArr;
//     }
// };

// export const getUsersTEST = async (): Promise<Array<IUser>> => {
//     try {
//         connectDB();
//         const users = JSON.parse(JSON.stringify(await UserModel.find().lean())) as IUser[];

//         return users;
//     } catch (error) {
//         return [];
//     }
// };
