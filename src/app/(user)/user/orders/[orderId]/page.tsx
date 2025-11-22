import OrderForm from "@/components/forms/orderForm";
import { getUserWithAdresses } from "@/libs/db/usersService";

export default async function OrderPage({ params }: { params: Promise<{ orderId: string }> }) {
    const { orderId } = await params;

    const user = await getUserWithAdresses();
    console.log("USER ❤️", user);
    return <OrderForm user={user} order={null} />;
}
