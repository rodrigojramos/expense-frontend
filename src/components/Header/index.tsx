import { Link } from 'react-router-dom';
import './styles.css';

export default function Header() {
    return (
        <header className="scg-container-header">
            <div className="scg-container">
                <Link to="/">
                    <h1>SISTEMA DE CONTROLE DE GASTOS</h1>
                </Link>
            </div>
        </header>
    )
}