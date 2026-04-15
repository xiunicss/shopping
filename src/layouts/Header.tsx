import { NavLink, useNavigate } from "react-router-dom"

interface HeaderProps{
    isLoggedIn: boolean;
    userId?: string | null;
    onLogout: () => void;

}

const Header = ({isLoggedIn, userId, onLogout}: HeaderProps) => {

    const navigate = useNavigate();

    return(
        <div className="header">
            <nav>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/products'>상품목록</NavLink>
                <NavLink to='/products/add'>상품 등록</NavLink>
                {isLoggedIn ? (
                    <div className="header-user-info">
                        <span>{userId}</span>
                        <button
                            onClick={() => {
                                onLogout();
                                navigate('/')
                            }}
                            className="logout-btn"
                        >로그아웃</button>
                    </div>
                ) : (<NavLink to="/signin">로그인</NavLink>)}
            </nav>
            
        </div>
    )
}

export default Header