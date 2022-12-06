import React from 'react'
import user from '../images/user.png'
function ContactCard(props) {
  return (
    <div style={{marginBottom:"20px", marginTop:"20px"}}>
        <div className='item'>
            <img className='ui avatar image' src={user} />
                <div className='content'>
                    <div className='header'>{props.contact.name}</div>
                    <div>{props.contact.email}</div>
                </div>
                <i className='trash alternate icon red'></i>
            </div>
    </div>
  )
}

export default ContactCard;