import './styles.css';
import GearIcon from '../../assets/settings.png';

export default function ExpenseCard() {
    return(
        <table className="scg-table">
            <thead>
                <th className="scg-padding">Data</th>
                <th className="scg-txt-left scg-padding">Descrição</th>
                <th className="scg-padding">Valor</th>
                <th></th>
            </thead>
            <tbody>
                <tr>
                    <td className="scg-padding">23/03/2023</td>
                    <td className="scg-txt-left scg-padding">Conta de energia referente a Fevereiro de 2023</td>
                    <td className="scg-padding">R$ 150.00</td>
                    <td><img className="scg-expense-card-btn" src={GearIcon} alt="Opções" /></td>
                </tr>
                <tr>
                    <td className="scg-padding">23/03/2023</td>
                    <td className="scg-txt-left scg-padding">Conta de energia referente a Fevereiro de 2023</td>
                    <td className="scg-padding">R$ 150.00</td>
                    <td><img className="scg-expense-card-btn" src={GearIcon} alt="Opções" /></td>
                </tr>
                <tr>
                    <td className="scg-padding">23/03/2023</td>
                    <td className="scg-txt-left scg-padding">Conta de energia referente a Fevereiro de 2023</td>
                    <td className="scg-padding">R$ 150.00</td>
                    <td><img className="scg-expense-card-btn" src={GearIcon} alt="Opções" /></td>
                </tr>
                <tr>
                    <td className="scg-padding">23/03/2023</td>
                    <td className="scg-txt-left scg-padding">Conta de energia referente a Fevereiro de 2023</td>
                    <td className="scg-padding">R$ 150.00</td>
                    <td><img className="scg-expense-card-btn" src={GearIcon} alt="Opções" /></td>
                </tr>
                <tr>
                    <td className="scg-padding">23/03/2023</td>
                    <td className="scg-txt-left scg-padding">Conta de energia referente a Fevereiro de 2023</td>
                    <td className="scg-padding">R$ 150.00</td>
                    <td><img className="scg-expense-card-btn" src={GearIcon} alt="Opções" /></td>
                </tr>
                <tr>
                    <td className="scg-padding">23/03/2023</td>
                    <td className="scg-txt-left scg-padding">Conta de energia referente a Fevereiro de 2023</td>
                    <td className="scg-padding">R$ 150.00</td>
                    <td><img className="scg-expense-card-btn" src={GearIcon} alt="Opções" /></td>
                </tr>
            </tbody>
        </table>
    )
}