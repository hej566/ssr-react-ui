import React from 'react';

const Home = () => {
    return (
        <div>
            <div>home component</div>
            <button onClick={(e) => { console.log('clicked') }}>click me</button>
        </div>
    )
}

export default Home;