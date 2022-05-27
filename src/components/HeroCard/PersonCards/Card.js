import React from 'react';
import './Card.css'

export default function Card({ gender, title, fname, lname, email, selected }) {
    return (
        <div>
            <div className={`card-main ${selected && 'card-selected'}`}>
                <div className={`card-gender ${selected && 'selected'} `}>
                    {
                        gender
                    } - NL
                </div>
                <div className={`card-name ${selected && 'selected'}`}>
                    {
                        title
                    } {
                        fname
                    } {
                        lname
                    }
                </div>
                <div className={`card-email && ${selected && 'selected'}`}>
                    {/* car.jenson@example.com */}
                    {
                        email
                    }
                </div>
            </div>
        </div >
    )
}
