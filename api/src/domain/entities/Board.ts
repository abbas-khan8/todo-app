import { Item } from './Item';

export type Board = {
    id: number;
    userId: number;
    title: string;
    description: string;
    boardColumns: BoardColumn[];
    createdAt: Date;
};

export type BoardColumn = {
    id: number;
    title: string;
    position: number;
    items: Item[];
};
