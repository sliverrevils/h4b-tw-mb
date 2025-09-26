export type ISvg = React.FC<React.SVGProps<SVGSVGElement>>;

export interface IUserMenuItem {
    name: string;
    title: string;
    Ico: ISvg;
}

export interface IUserProfileMenuItem {
    title: string;
    name: string;
}

export interface IBranch {
    name: string;
    period: string;
    id_branch: string;
    adress: string;
    city: string;
    index: string;
    phone: string;
}
