export interface IUserRating {
    _id: string;
    rater: string;
    rated_user: string;
    rating: number;
    comment?: string;
}