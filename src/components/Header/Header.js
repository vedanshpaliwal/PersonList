import React from 'react';
import './Header.css'

export default function Header() {
    return (
        <div className='header-main'>
            <div className='header-title'>
                YOUR CHALLENGE
            </div>
            <div className='header-items'>

                <span className='header-item'>
                    Product
                </span>

                <span className='header-item'>
                    Download
                </span>

                <span className='header-item'>
                    Pricing
                </span>
            </div>
        </div>
    )
}
