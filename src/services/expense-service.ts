import { ExpenseDTO } from "../models/expense";
import { BASE_URL } from "../utils/system";
import axios, { AxiosRequestConfig } from "axios";

export function findExpensesRequest(description: string, sort = "date") {
    const config : AxiosRequestConfig = {
        method: "GET",
        baseURL: BASE_URL,
        url: "/expenses",
        params: {
            description,
            sort
        }
    }
    
    return axios(config);
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