import React from 'react';
import './HeroCard.css'

export default function HeroCard({ data }) {
    return (
        <div className='hero-main'>
            <div className='hero-left'>
                <div className='hero-left-content'>
                    <img src={data.picture.large} alt="" style={{ width: 128, height: 128, borderRadius: 120 }} />
                </div>
            </div>
            <div className='hero-right'>
                <div className='hero-right-name'>
                    {data.name.title} {data.name.first} {data.name.last}
                </div>
                <div className='hero-right-address'>
                    <div className='address-top'>

                        <span className='street-no'>{data.location.street.number}</span>,<span className='street-name'>{data.location.street.name}</span>,<span className='city'>{data.location.city}</span>,<span className='state'>{data.location.state}</span>,<span className='country'>{data.location.country}</span>,<span className='postcode'>{data.location.postcode}</span>
                    </div>
                    <div className='address-bottom'>
                        <span className='offset'>{data.location.timezone.offset}</span> - <span className='description'>{data.location.timezone.description}</span>
                    </div>
                    <div className='gender'>
                        {data.gender}
                    </div>
                </div>
            </div>
        </div>
    )
}
