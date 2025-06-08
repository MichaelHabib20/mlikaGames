export interface Game {
    id: number;
    title: string;
    description: string;
    price: number;
    churchPrice: number;
    images: string[];
    category?: string;
    rating?: number;
    area?: string;
    height?: number;
} 