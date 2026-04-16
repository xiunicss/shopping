import { NavLink, useNavigate } from "react-router-dom"

interface HeaderProps{
    isLoggedIn: boolean;
    userId?: string | null;
    userRole?: string | null;
    onLogout: () => void;
}

const Header = ({isLoggedIn, userId, userRole, onLogout}: HeaderProps) => {

    const navigate = useNavigate();

    return(
        <div className="header">
            <nav>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/products'>상품목록</NavLink>
                <NavLink 
                    to='/products/add'
                    onClick={(e) => {
                        if(userRole != 'admin'){
                            e.preventDefault(); //기본 동작 막고 경고 메시지 표시
                            alert('관리자 전용 메뉴입니다.')
                        }                        
                    }}
                >
                    상품 등록
                </NavLink>
                {isLoggedIn ? (
                    <div className="header-user-info">
                        <span>{userId}님</span>
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