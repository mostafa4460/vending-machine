import {Link} from 'react-router-dom';

const Soda = () => (
    <div>
        <h1>Soda</h1>
        <img src="https://www.cohenmedical.com/wp-content/uploads/2020/06/soda3.jpg" alt="soda" />
        <button style={{display:'block', margin: 'auto'}}><Link to="/">Go back</Link></button>
    </div>
);

export default Soda;