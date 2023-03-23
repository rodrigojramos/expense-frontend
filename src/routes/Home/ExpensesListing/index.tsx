import ExpenseCard from '../../../components/ExpenseCard';
import SearchBar from '../../../components/SearchBar';
import TotalCard from '../../../components/TotalCard';
import './styles.css';

export default function ExpensesListing() {
    return(
        <main>
            <section className="scg-container">
                <div className="scg-expense-container">
                    <div>
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
                </div>
            </section>
        </main>
    );
}