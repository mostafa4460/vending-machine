import {Link} from 'react-router-dom';
import './VendingMachine.css';

const VendingMachine = () => {
    return (
        <div className="VendingMachine">
            <div className="VendingMachine-snacks">
                <h1><u>Snacks:</u></h1>
                <Link to="/chips">Chips</Link>
                <Link to="/soda">Soda</Link>
                <Link to="/farts">Farts</Link>
            </div>
        </div>
    );
}

export default VendingMachine;