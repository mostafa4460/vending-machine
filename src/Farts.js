import {Link} from 'react-router-dom';

const Farts = () => (
    <div>
        <h1>Farts</h1>
        <img src="https://www.ladbible.com/cdn-cgi/image/width=720,quality=70,format=jpeg,fit=pad,dpr=1/https%3A%2F%2Fs3-images.ladbible.com%2Fs3%2Fcontent%2F251f23c25b0791700fea5199c81cdc8a.png" alt="farts" />
        <button style={{display:'block', margin: 'auto'}}><Link to="/">Go back</Link></button>    
    </div>
);

export default Farts;