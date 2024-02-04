import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className='header'>
            <section>
                <div className='banner'>
                    <h2>Little Lemon</h2>
                    <h3>Chicago</h3>
                    <p>
                        We are a family owned Mediterraneran restaurant, focused on traditional recipes served with a modern twist.
                    </p>
                    <Link to="/booking">
                        <button>Reserve a Table</button>
                    </Link>
                    {/* <Link to="/booking"><button>Reserve a Table</button></Link> */}
                </div>
            </section>
        </header>
    );
};

export default Header;