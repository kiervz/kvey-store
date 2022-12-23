export interface ICategory {
    id: number;
    name: string;
    slug: string;
    handleSelectedCategory: (e: React.ChangeEvent<HTMLInputElement>) => void,
}