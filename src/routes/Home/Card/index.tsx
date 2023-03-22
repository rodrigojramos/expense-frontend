import SearchBar from '../../../components/SearchBar';
import './styles.css';

export default function Card() {
    return(
        <main>
            <section className="scg-container">
                <div className="scg-card-container">
                    <div>
                        <h2>Despesas</h2>
                    </div>
                    <div>
                        <SearchBar />
                    </div>
                </div>
            </section>
        </main>
    );
}