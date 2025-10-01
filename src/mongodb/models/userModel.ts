import { model, models, Schema, Model, Document, Types } from "mongoose";
import { IAddress } from "./adressModel";

export type IUserRole = "user" | "admin" | "super";

export interface IUser {
    _id?: string;
    name: string;
    surname?: string;
    patronymic?: string;
    gender?: "male" | "female";
    password: string;
    role?: IUserRole;
    birthday?: Date;
    phone1: string;
    phone2?: string;
    email: string;
    adress?: string;
    city?: string;
    zip_code_eng?: string;
    notifications?: boolean;
    balance?: number;
    bonus?: number;
    level?: number;
    stripeCustomerId?: string;
    savedCards?: string[];

    fullData: boolean; // полностью заполненные данные
    is_blocked: boolean; //блокировка
    admin_description?: string; // пометки пдмина

    createdAt?: Date;

    adresses?: IAddress[]; // Виртуальное поле (Получатели)
}

export interface IUserDocument extends Omit<IUser, "_id">, Document {
    addresses?: Types.ObjectId[]; // виртуальное поле
}

const userSchema = new Schema<IUserDocument>(
    {
        name: { type: String, required: true },
        surname: { type: String, default: null },
        patronymic: { type: String, default: null },
        gender: { type: String, enum: ["male", "female"], default: null },
        password: { type: String, required: true },
        role: { type: String, enum: ["user", "admin", "super"], default: "user" },
        birthday: { type: Date, default: null },
        phone1: { type: String, required: true },
        phone2: { type: String, default: null },
        email: { type: String, required: [true, "Email обязательное поле"] },
        adress: { type: String, default: null },
        city: { type: String, default: null },
        zip_code_eng: { type: String, default: null },
        notifications: { type: Boolean, default: null },
        balance: { type: Number, default: 0 },
        bonus: { type: Number, default: 0 },
        level: { type: Number, default: 0 },
        stripeCustomerId: { type: String, default: null },
        savedCards: [{ type: String, default: [] }],

        fullData: { type: Boolean, default: false },
        is_blocked: { type: Boolean, default: false },
        admin_description: { type: String, default: null },

        createdAt: { type: Date, default: Date.now },
    },
    {
        versionKey: false,
        timestamps: true,
    }
);

// ✅ Виртуальное поле addresses с адресами на которые возможно отправка
userSchema.virtual("addresses", {
    ref: "Address", // имя модели Address
    localField: "_id", // поле в User
    foreignField: "userId", // поле в Address
});

// ✅ Включаем виртуальные поля в JSON и Object
userSchema.set("toJSON", { virtuals: true });
userSchema.set("toObject", { virtuals: true });

export const UserModel: Model<IUserDocument> =
    (models?.User as Model<IUserDocument>) || model<IUserDocument>("User", userSchema);
