"use client";

import { useMemo, useState } from "react";
import { Input } from "../ui/FormElements/Input";
import { IProduct } from "@/mongodb/models/productModel";
import Select from "../ui/FormElements/Select";
import { CATEGORIES } from "@/data/constants/categories";
import { CLOTHINGSIZES } from "@/data/constants/clothingSizes";
import { IUser } from "@/mongodb/models/userModel";
import { IOrder } from "@/mongodb/models/orderModel";
import ProductForm, { Product } from "./productForm";
import { PlusIco } from "@/icons/icons";
import { toast } from "react-toastify";

export default function OrderForm({ order = null, user }: { user: IUser; order: IOrder | null }) {
    const [products, setProducts] = useState<Product[]>([]);
    const [isAddProduct, setIsAddProduct] = useState(false);
    const [updatedProductIdx, setUpdatedProductIDx] = useState<number | null>(null);

    const isAddProductToggle = () => setIsAddProduct((state) => !state);
    const addProduct = (product: Product) => {
        setProducts((state) => [...state, product]);
        setIsAddProduct(false);
    };
    const updateProduct = (idx: number, product: Product) => {
        const tempProducts = [...products];
        tempProducts[idx] = product;
        setProducts(tempProducts);
        setUpdatedProductIDx(null);
        toast.success("Товар успешно обновлен");
    };

    //TODO ОТОБРАЗИТЬ СПИСОК ДОБАВЛЕННЫХ ПРОДУКТОВ

    const productsListHTML = useMemo(() => {
        return products.map((product, idx) => {
            const { name, price, width_x, height_y, depth_z, weight } = product;
            if (updatedProductIdx !== null && idx === updatedProductIdx) {
                const updateFn = updateProduct.bind(null, idx);
                return (
                    <ProductForm
                        key={name}
                        addOrUpdateProductFn={updateFn}
                        product={product}
                        closeFn={() => setUpdatedProductIDx(null)}
                    />
                );
            }
            return (
                <div
                    className="relative box bg-f-gray-30 cursor-pointer"
                    key={name}
                    onClick={() => setUpdatedProductIDx(idx)}
                >
                    <div className="absolute text-f-blue-950 number-3 left-0 top-0">{idx + 1}</div>
                    <div className=" flex justify-between text-f-blue-950">
                        <div className="body-2">{name}</div>
                        <div className="number-3 text-f-accent">{price}$</div>
                    </div>
                    <div className="flex body-4">
                        <div>{`${width_x}X${height_y}X${depth_z} см, Вес: ${weight}`}</div>
                    </div>
                </div>
            );
        });
    }, [products, updatedProductIdx]);

    const totalPriceHTML = useMemo(() => {
        let total = 0.0;
        products.forEach(({ price, quantity }) => (total += price * quantity));
        return (
            <div className="flex flex-col gap-2">
                <div className="number-1 text-f-accent">${total.toFixed(2)}</div>
                <div className="body-3 text-f-blue-950">Общая стоимость декларации </div>
            </div>
        );
    }, [products]);

    return (
        <div
            className=" flex flex-col gap-4 py-6 w-full
                    lg:w-202
                    xl:gap-6 xl:w-219
                    "
        >
            <div className="h2 text-f-blue-950 mb-6 border-b-1 border-f-gray-200 pb-6">
                {!order ? "ШагШаг 1. Декларация" : "Обновление заказа"}
            </div>
            <div className="border-b-1 border-f-gray-200 pb-6">
                {!!user.adresses?.length && (
                    <Select
                        options={user.adresses?.map((adress) => ({
                            value: adress._id!,
                            title: `${adress.city}`,
                        }))}
                        title="Выберете получателя"
                        disabledOption="выбор получателя"
                        defaultValue={""}
                    />
                )}
                <Input title="Описание" type="textarea" />
            </div>

            <div>Products : {products.length}</div>

            {productsListHTML}

            {isAddProduct ? (
                <ProductForm addOrUpdateProductFn={addProduct} closeFn={isAddProductToggle} />
            ) : (
                <div
                    className="flex gap-2 items-center cursor-pointer"
                    onClick={isAddProductToggle}
                >
                    <PlusIco className="*:fill-f-accent" />
                    <span className="button-2 text-f-accent">Добавить посылку</span>
                </div>
            )}

            {totalPriceHTML}
            <button
                className="button-1 btn   text-f-white-100 bg-f-accent
                                disabled:bg-f-blue-disabled disabled:cursor-not-allowed
                                "
            >
                Следующий шаг
            </button>
        </div>
    );
}
