import '../styles/navbar.css'
import userIcon from '../assets/user.svg'

export function Navbar({user = "User", userImage = userIcon}){
    return(
        <nav className="nav">
            <figure className='nav__figure'>
                <img src={userImage} alt="User Photo"  className="nav__img"/>
            </figure>
            <h3 className="nav__user">{user}</h3>
        </nav>
    )
}