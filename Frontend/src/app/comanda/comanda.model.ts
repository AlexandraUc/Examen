import { Produs } from "../produs/produs.model";

export interface Comanda {
    id: number;
    utilizatorId: number;
    produs: Produs[];
}

export interface PostComanda {
    utilizatorId: number;
}