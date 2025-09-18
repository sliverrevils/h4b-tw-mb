import CircleProgress from "@/components/ui/CircleProgress/CircleProgress";

interface IUserInfoProps {
    name: string;
    userName: string;
    balance: number;
    status: number;
    className?: string;
}

export default function UserInfo(props: IUserInfoProps) {
    const { name, balance, userName, status, className = "" } = props;
    return (
        <div className={`flex flex-col ${className}`}>
            <CircleProgress value={status} strokeWidth={15} className="pb-4" />
            <div className="h5-accent text-f-blue-950 mb-2">Привет, {name}</div>
            <div className="flex gap-1 mb-2">
                <div className="body-2 text-f-blue-500">Пользователь:</div>
                <div className="body-2 text-f-blue-950">{userName}</div>
            </div>
            <div className="flex gap-1 mb-2">
                <div className="body-2 text-f-blue-500">Баланс:</div>
                <div className="body-2 text-f-blue-950">${balance.toFixed(2)}</div>
            </div>
        </div>
    );
}
