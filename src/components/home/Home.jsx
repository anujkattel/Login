import React from 'react'

function Home() {
    const logout = () => {
        localStorage.clear('user');
        window.location.href = '/login'
    }
    return (
        <>
            <div className="logout">
                <button onClick={logout}>Logout</button>
            </div>
        </>
    )
}

export default Home