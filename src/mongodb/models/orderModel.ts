import { model, Model, models, Schema, Types } from "mongoose";
import { IProduct } from "./productModel";
import { IAdress } from "./adressModel";
import { IUser } from "./userModel";

export interface IOrder {
    _id?: string;

    userId: Types.ObjectId; // ID  отправитель
    adressId: Types.ObjectId; // ID адресс

    products_total_cost: number; //Общая стоимость товаров

    description: string; // Описание

    order_coast: number; // Стоимость посылки

    //Размеры общей  посылки - админ вносит
    width_x: number; // Ширина
    height_y: number; //Высота
    depth_z: number; // Глубина

    createdAt?: Date;
    //! Виртуальные поля
    user: IUser;
    adress: IAdress; //Куда доставка
    products: IProduct[]; // Товары
}

export interface IOrderDocument
    extends Omit<IOrder, "_id" | "user" | "adress" | "products">,
        Document {}
const orderSchema = new Schema<IOrderDocument>(
    {
        userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
        adressId: { type: Schema.Types.ObjectId, ref: "Adress", required: true },

        description: { type: String, required: true },
        order_coast: { type: Number, default: null },
        width_x: { type: Number, default: null },
        height_y: { type: Number, default: null },
        depth_z: { type: Number, default: null },
        createdAt: { type: Date, default: Date.now },
    },
    {
        versionKey: false,
        timestamps: true,
    }
);

orderSchema.virtual("user", {
    ref: "User",
    localField: "userId",
    foreignField: "_id",
    justOne: true,
});

orderSchema.virtual("adress", {
    ref: "Adress",
    localField: "adressId",
    foreignField: "_id",
    justOne: true,
});

orderSchema.virtual("products", {
    ref: "Product",
    localField: "products",
    foreignField: "_id",
    justOne: false,
});

// ✅ Включаем виртуальные поля в JSON и Object
orderSchema.set("toJSON", { virtuals: true });
orderSchema.set("toObject", { virtuals: true });

export const OrderModel =
    (models.Order as Model<IOrderDocument>) || model<IOrderDocument>("Order", orderSchema);
