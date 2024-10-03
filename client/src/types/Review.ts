export type Review = {
    id? :number;
    firstName: string | null;
    lastName: string | null;
    email: string;
    rating: number | null;
    comment: string;
    approved?: boolean;
};
