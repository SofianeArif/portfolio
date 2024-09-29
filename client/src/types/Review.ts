export type Review = {
    id? :number;
    firstName: string;
    lastName: string;
    rating: number | null;
    comment: string;
    approved?: boolean;
};
