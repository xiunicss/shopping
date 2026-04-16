import { useLocation } from "react-router-dom"
import users from "../data/users.json"
import orders from "../data/orders.json"

const DashBoard = () => {

    /*
        useLocation(); - URL의 위치(경로) 정보를 반환
        사용자 정보 추출(전달)
        navigate("/dashboard", {state:{username: user.username, 
        role: user.role}});
    */
    const location = useLocation();
    const {username, role} = location.state || {}
    console.log(username, role);
    

    return(
        <div className="dashboard">
            <h2>관리자 대시보드</h2>
            {role === 'admin' && (
                <>
                    <div>
                        <h3>회원 현황</h3>
                        <table className="user-table">
                            <thead>
                                <tr>
                                    <th>순번</th>
                                    <th>아이디</th>
                                    <th>권한</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map(user => (
                                    <tr key={user.id}>
                                        <td>{user.id}</td>
                                        <td>{user.username}</td>
                                        <td>{user.role}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div>
                        <h3>주문 현황</h3>
                        <table className="order-table">
                            <thead>
                                <tr>
                                    <th>주문 ID</th>
                                    <th>상품명</th>
                                    <th>주문자</th>
                                    <th>상태</th>
                                </tr>
                            </thead>
                            <tbody>
                                {orders.map(order => (
                                    <tr key={order.id}>
                                        <td>{order.id}</td>
                                        <td>{order.product}</td>
                                        <td>{users.find(user => user.id === order.userId)?.username}</td>
                                        <td>{order.status}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </>
            )}
        </div>
    )
}

export default DashBoard