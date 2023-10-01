import React from 'react'

const Nav = () => {
  return (
    <nav>
        <img src="/share2.png" alt=""  className='navimg'/>
        <ul>
            <li>
                <a href="#sec1">Home</a>
            </li>
            <li>
                <a href="#sec2">Mission</a>
            </li>
            <li>
                <a href="#sec3">Roadmap</a>
            </li>
            <li>
                <a href="#sec4">Overview</a>
            </li>
            <li>
                <a href="#sec5">3D</a>
            </li>
        </ul>
    </nav>
  )
}

export default Nav