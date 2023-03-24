import { ExpenseDTO } from "../models/expense";

export function findAll() : ExpenseDTO[] {
    return expenses;
}

export function findById(id: number) : ExpenseDTO | undefined {
    return expenses.find(x => x.id === id);
}

let expenses : ExpenseDTO[] = [
    {
        "id": 1,
        "description": "Cinema",
        "amount": 90.0,
        "date": "2023-02-10"
    },
    {
        "id": 2,
        "description": "Mercado",
        "amount": 400.0,
        "date": "2023-02-14"
    },
    {
        "id": 3,
        "description": "Lavanderia",
        "amount": 100.0,
        "date": "2023-02-16"
    }
]