import ButtonAdd from '../../../components/ButtonAdd';
import SearchBar from '../../../components/SearchBar';
import TotalCard from '../../../components/TotalCard';
import './styles.css';
import GearIcon from '../../../assets/settings.png';
import { useEffect, useState } from 'react';
import { ExpenseDTO } from '../../../models/expense';
import axios from 'axios';

export default function ExpensesListing() {

    const [expenses, setExpenses] = useState<ExpenseDTO[]>([]);

    useEffect(() => {
        axios.get("http://localhost:8080/expenses")
            .then(response => {
                setExpenses(response.data.content);
            })
    }, [])

    return(
        <main>
            <section className="scg-container">
                <div className="scg-expense-container">
                    <div className="scg-title-list">
                        <h2>Despesas</h2>
                    </div>
                    <div>
                        <SearchBar />
                    </div>
                    <div>
                        <table className="scg-table">
                            <thead>
                                <th className="scg-padding">Data</th>
                                <th className="scg-txt-left scg-padding">Descrição</th>
                                <th className="scg-padding">Valor</th>
                                <th></th>
                            </thead>
                            <tbody>

                                {
                                    expenses.map(expense => (
                                        <tr key={expense.id}>
                                            <td className="scg-padding">{expense.date}</td>
                                            <td className="scg-txt-left scg-padding">{expense.description}</td>
                                            <td className="scg-padding">R$ {expense.amount.toFixed(2)}</td>
                                            <td><img className="scg-expense-card-btn" src={GearIcon} alt="Opções" /></td>
                                        </tr>
                                        )
                                    )
                                }

                            </tbody>
                        </table>
                    </div>
                    <div>
                        <TotalCard />
                    </div>
                    <div>
                        <ButtonAdd />
                    </div>
                </div>
            </section>
        </main>
    );
}