import ButtonAdd from '../../../components/ButtonAdd';
import ExpenseCard from '../../../components/ExpenseCard';
import SearchBar from '../../../components/SearchBar';
import TotalCard from '../../../components/TotalCard';
import './styles.css';

export default function ExpensesListing() {
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
                        <ExpenseCard />
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