import { Schema, model, models, Types, Document, Model } from "mongoose";

export interface IAddress {
    userId: Types.ObjectId;
    country: string;
    deliveryType: string; // например: "express", "pickup"
    deliveryMethod: "warehouse" | "courier"; // до склада или до двери
    isBusiness: boolean;

    // для физлица
    recipientName?: string;
    recipientSurname?: string;
    recipientPatronymic?: string;
    recipientIdNumber?: string;
    passportSeriesNumber?: string;
    passportIssuedBy?: string;
    passportIssuedDate?: Date;
    recipientBirthDate?: Date;
    recipientEmail?: string;

    // для бизнеса
    companyName?: string;

    phone1: string;
    phone2?: string;
    addressLine: string;

    isDefault?: boolean;
    createdAt: Date;
}

export interface IAddressDocument extends IAddress, Document {}

//! ВСЯ ИНФА О ТОМ КТО ПОЛУЧАЕТ
const addressSchema = new Schema<IAddressDocument>(
    {
        userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
        country: { type: String, required: true },
        deliveryType: { type: String, required: true },
        deliveryMethod: { type: String, enum: ["warehouse", "courier"], required: true },
        isBusiness: { type: Boolean, required: true },

        // для физлица
        recipientName: { type: String },
        recipientSurname: { type: String },
        recipientPatronymic: { type: String },
        recipientIdNumber: { type: String }, // СЕРЙИНИК ПАСПОРТА
        passportSeriesNumber: { type: String }, // ИНН/ИИН/УНП получателя
        passportIssuedBy: { type: String }, //Кем выдан
        passportIssuedDate: { type: Date }, //Дата выдачи паспорта
        recipientBirthDate: { type: Date }, //Дата рождения получателя
        recipientEmail: { type: String }, //эл. почта (email)

        // для бизнеса
        companyName: { type: String },

        phone1: { type: String, required: true },
        phone2: { type: String },
        addressLine: { type: String, required: true },

        isDefault: { type: Boolean, default: false },
        createdAt: { type: Date, default: Date.now },
    },
    {
        versionKey: false,
        timestamps: true,
    }
);

//Валидация: физлицо vs бизнес

// addressSchema.pre("save", function (next) {
//     if (this.isBusiness) {
//         if (!this.companyName) {
//             return next(new Error("Для бизнеса нужно указать companyName"));
//         }
//     } else {
//         if (
//             !this.recipientName ||
//             !this.recipientSurname ||
//             !this.recipientIdNumber ||
//             !this.passportSeriesNumber ||
//             !this.passportIssuedBy ||
//             !this.passportIssuedDate ||
//             !this.recipientBirthDate ||
//             !this.recipientEmail
//         ) {
//             return next(
//                 new Error("Для физлица нужно заполнить все паспортные и контактные данные")
//             );
//         }
//     }
//     next();
// });

export const AddressModel: Model<IAddressDocument> =
    models.Address || model<IAddressDocument>("Address", addressSchema);
