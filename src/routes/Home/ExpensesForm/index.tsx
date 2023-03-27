import { Link } from 'react-router-dom';
import './styles.css';

export default function ExpensesForm() {
    return(
        <main>
            <section className="scg-form-container">
                <div className="scg-form-title">
                    <h2>Dados da despesa</h2>
                </div>
                <form className="scg-form-content">
                    <div>
                        <textarea className="scg-form-description scg-form-input" placeholder="Descriçao"/>
                    </div>
                    <div>
                        <input className="scg-form-input" placeholder="Valor"/>
                    </div>
                    <div>
                        <input className="scg-form-input" placeholder="Data"/>
                    </div>
                    <div className="scg-btn-form-container">
                        <div>
                            <Link to="/">
                                <button className="scg-btn-form">Cancelar</button>
                            </Link>
                        </div>
                        <div>
                            <button className="scg-btn-form">Salvar</button>
                        </div>
                    </div>
                </form>
                <div className="scg-form-footer"></div>
            </section>
        </main>
    )
}