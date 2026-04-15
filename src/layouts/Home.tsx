import mainImg from "../assets/hero.png"

const Home = () => {

    return(
        <div>
            <h2>Shopping Home 입니다</h2>
            <section>
                <h3>최신 컴퓨터 기기와 액세서리를 만나보세요.</h3>
                <img src={mainImg} alt="메인 이미지" />
            </section>
        </div>
    )
}

export default Home