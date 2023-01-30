import React from 'react'
import { Link } from 'react-router-dom'

import './styles.css'

function Item({ quotes }) {
    return (
        <div className={'quote_item'}>
            <ul>
                <li>
                    <div>
                        <Link to={`/quotes/${quotes.quote_id}`}><q>{quotes.quote}</q></Link>
                    </div>
                    
                    <div className={'quote_author'}>
                        <b>{quotes.author}</b>
                        <hr />
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default Item