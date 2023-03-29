import React from 'react'

function Footer() {
    return(
        <>
            <input type="email" placeholder="Email" /> <br />
            <br />
            <input type="password" placeholder="Password" />
            <div>
                <button className='contactbtn btn btn-danger'>Contact Us</button>
            </div>
        </>
    )
}
export default Footer