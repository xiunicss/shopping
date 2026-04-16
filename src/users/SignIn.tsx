
import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import users from '../data/users.json'

// 로그인 폼 데이터 타입 정의
interface SignInForm {
  username: string
  password: string
}

// 로그인 컴포넌트 Props 타입 정의
interface SignProps {
  onLogin: (username: string, userRole: string) => void
}

const SignIn = ({ onLogin }: SignProps) => {
  const [formData, setFormData] = useState<SignInForm>({
    username: '',
    password: '',
  })
  // 로그인 결과 상태 관리 (성공/실패 메시지 등)
  const [loginResult, setLoginResult] = useState<string>('')

  const navigate = useNavigate();

  // 입력 필드 변경 핸들러
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  // 폼 제출 핸들러
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // 입력값 추출
    const { username, password } = formData 

    // 간단한 유효성 검사
    if (!username || !password) {
      alert('아이디와 비밀번호를 모두 입력해주세요.')
      return
    }

    // 로그인 일치 여부
    const user = users.find(user => 
      user.username === username && user.password === password)
    if (!user) { //검색한 user 가 없으면
      // alert('아이디 또는 비밀번호가 올바르지 않습니다.')
      setLoginResult('fail') // 로그인 실패 상태 업데이트
      return
    }
    
    onLogin(user.username, user.role); // 로그인 성공 시 부모 컴포넌트에 알림
    console.log('로그인 시도:', formData)

    // 인증 - 권한에 따른 다른 페이지로 이동
    if (user.role === 'admin'){
      setLoginResult('success');
      navigate("/dashboard", {state:{username: user.username, 
        role: user.role}});
    }else{
      setLoginResult('success');
      navigate("/products");
    }
  }

  return (
    <div className='signin'>
      <h2>로그인</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">아이디</label>
          <input 
            type="text" 
            id="username" 
            name="username" 
            placeholder="아이디를 입력하세요." 
            value={formData.username}
            onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="password">비밀번호</label>
          <input 
            type="password" 
            id="password" 
            name="password" 
            placeholder="비밀번호를 입력하세요." 
            value={formData.password}
            onChange={handleChange} />
        </div>
        <button type="submit">로그인</button>
      </form>
      
      <p className='signup-link'>
        아직 계정이 없으신가요? <Link to='/signup'>회원 가입</Link>
      </p>

      {/* 로그인 실패 메시지 */}
      {loginResult === 'fail' && <p className='error'>로그인 실패, 다시 시도하세요</p>}
    </div>
  )
}

export default SignIn