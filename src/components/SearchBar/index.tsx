import { useState } from 'react';
import './styles.css';

export default function SearchBar() {

    const [text, setText] = useState("");

    function handleChange(event: any) {
        setText(event.target.value);
    }

    return(
        <div className="scg-bg-search-bar">
            <form className="dsc-search-bar">
                <button type="submit">🔎︎</button>
                <input 
                    value={text}
                    type="text" 
                    placeholder="Descrição da despesa"
                    onChange={handleChange} />
                <button className="scg-border-side">🗙</button>
            </form>
        </div>
    );
}