import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/App.css';

const Navi = () => {
return (
        <React.Fragment>
            <nav>
                <Link to="./" className="link">Home</Link>
                <Link to="./todo" className="link">Todo</Link>
            </nav>
        </React.Fragment>
    );
}
  
export default Navi;