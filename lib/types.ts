export type LoadStatus = 'idle' | 'loading' | 'succeeded' | 'failed' | 'retrying';

export interface INews {
    id: string;
    title: string;
    short_description: string;
    description: string;
    image: string;
    created_at: Date;
}