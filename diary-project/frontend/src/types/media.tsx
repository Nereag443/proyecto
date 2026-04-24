export interface Media {
    id?: number;
    title: string;
    type: string;
    review: string | null;
    rating: number;
    date_added?: string;
    user_id?: number;
}