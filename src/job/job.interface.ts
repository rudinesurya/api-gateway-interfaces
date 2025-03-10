import { ILocation } from './location.interface';

export interface IJob {
    title: string;
    description: string;
    location: ILocation;
    salary: number;
    posted_by: string;
}