import React from 'react'

const FourthSection = () => {
  return (
    <section id="sec4">
        <div className="sec4-container">
            <div className="sec4-row">
                <h1>OVERVIEW</h1>
                <p>Our spacecraft is equipped with an array of innovative research instruments meticulously designed to capture data and images, enabling us to delve into the deepest realms of space. These instruments are the tools that fuel our relentless pursuit of knowledge and drive our quest to unravel the cosmos' most profound mysteries.</p>
                <p>These meticulously crafted instruments are the backbone of our missions, enabling us to collect invaluable data, capture breathtaking images, and perform intricate tasks in the far reaches of space, pushing the boundaries of scientific exploration.</p>
            </div>
            <div className="sec4-row"></div>
        </div>
        <div className="sec4-container2">
            <h1 className='h1-sec4'>Technical Details</h1>
            <div className="sec4-details">
                <div className="sec4-child">
                    <p>weight without engine</p>
                    <h2>5500 <span className='small'>Kg</span></h2>
                </div>
                <div className="sec4-child">
                    <p>total weight</p>
                    <h2>6000 <span className='small'>Kg</span></h2>
                </div>
                <div className="sec4-child">
                    <p>total height</p>
                    <h2>9000<span className='small'>m</span></h2>
                </div>
                <div className="sec4-child">
                    <p>total width</p>
                    <h2>4650<span className='small'>m</span></h2>
                </div>
            </div>
        </div>
    </section>
  )
}

export default FourthSection