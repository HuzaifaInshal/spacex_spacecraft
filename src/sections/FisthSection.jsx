import React from 'react'
import { useSnapshot } from 'valtio';
import appState from '../state/state'

const FisthSection = () => {
  return (
    <section id="sec5">
      <div className="sec5-container">
          <img src="/share2.png" alt="" className='sec5img'/>
          <p className="sec5p1">presents</p>
          <h1 className='sec5h1'>Exploratory spacecraft</h1>
          <p className="sec5p2">SERVICE TO EARTH ORBIT MOON MARS AND BEYOND</p>
          <button className="sec5btn" onClick={()=> appState.show3d=true}>
            View in 3d Mode
          </button>
      </div>
      <p className="copyright">@ CREATED BY MUHAMMAD HUZAIFA INSHAL, 2023</p>
    </section>
  )
}

export default FisthSection