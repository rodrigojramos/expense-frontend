import ButtonAdd from '../../../components/ButtonAdd';
import SearchBar from '../../../components/SearchBar';
import TotalCard from '../../../components/TotalCard';
import './styles.css';
import GearIcon from '../../../assets/settings.png';
import { useEffect, useState } from 'react';
import { ExpenseDTO } from '../../../models/expense';
import * as expenseService from "../../../services/expense-service";
import { Link } from 'react-router-dom';

export default function ExpensesListing() {

    const [expenses, setExpenses] = useState<ExpenseDTO[]>([]);

    const [expenseDescription, setExpenseDescription] = useState("");

    useEffect(() => {
        expenseService.findExpensesRequest(expenseDescription)
            .then(response => {
                setExpenses(response.data.content);
            })
    }, [expenseDescription])

    function handleSearch(searchText: string) {
        setExpenseDescription(searchText);
    }

    return(
        <main>
            <section className="scg-container">
                <div className="scg-expense-container">
                    <div className="scg-title-list">
                        <h2>Despesas</h2>
                    </div>
                    <div>
                        <SearchBar onSearch={handleSearch} />
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
                        <Link to="/expenses/form">
                            <ButtonAdd />
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}