import React, { useEffect } from 'react';

function Menu(props) {
    return (
        <div className="nav">
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/catalog">Catalog</a></li>
                <li><a href="/bibl">Bibl</a></li>
                <li><a href="/about">About</a></li>
            </ul>
        </div>
    );
}

export default Menu;