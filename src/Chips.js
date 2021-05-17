import {Link} from 'react-router-dom';

const Chips = () => (
    <div>
        <h1>Chips</h1>
        <img src="https://www.kroger.com/product/images/large/front/0002840015938" alt="chips" />
        <button style={{display:'block', margin: 'auto'}}><Link to="/">Go back</Link></button>
    </div>
);

export default Chips;