import { Routes, Route, Link } from "react-router-dom"

const Nav = () => {
    const containerStyle = { display: 'flex', justifyContent: 'space-between', padding: '2rem' }

    return (
        <div style={containerStyle}>
            <Link to='/'>HOME</Link>
            <Link to='/new-question'>NEW QUESTION</Link>
            <Link to='/leaderboard'>LEADERBOARD</Link>
            <Link to='/'>LOGO</Link>
            <Link to='/logout'>LOGOUT</Link>
        </div>
    )
}

export default Nav