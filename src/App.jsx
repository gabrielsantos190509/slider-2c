import { useState } from 'react'
import './App.css'
import Carmy from './assets/macbookair.png'
import Cjoa from './assets/macbookpro14.webp'
import Curs from './assets/macbookpro16.png'
import MacbookAir from './assets/macbookair1.png'
import MacbookPro13 from './assets/macbookpro13.png'
import MacbookPro14 from './assets/macbookpro1.4.png'
import MacbookPro16 from './assets/mackbookpro1.6.png'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main>
        <header>
          <Swiper
            modules={[Autoplay]}
            spaceBetween={0}
            slidesPerView={1}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            loop={true}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src={MacbookAir} alt="Slide 1" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={MacbookPro13} alt="Slide 2" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={MacbookPro14} alt="Slide 3" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={MacbookPro16} alt="Slide 4" />
            </SwiperSlide>      
          </Swiper>
        </header>
        <section className="produtos">

          {/* Produto 1 */}
          <a href="#" className="link-card">
            <div className="card">
              <img src={Cjoa} alt="" className="img-card" />
              <h2 className="titulo-card">MacBook Air</h2>
              <p className="desc">Leve, fino e silencioso, ideal para tarefas do dia a dia como estudos, navegação e trabalhos leves. Ótima bateria e performance com chip M4. Perfeito para mobilidade.</p>
              <p className="preco">R$ 8.904,31</p>
              <div className="avaliacao"> <span>★ ★ ★ ★ ★</span> (1.309)</div>
              <div className="off">- 10%</div>
            </div>
          </a>

          {/* Produto 2 */}
          <a href="#" className="link-card">
            <div className="card">
              <img src={Carmy} alt="" className="img-card" />
              <h2 className="titulo-card">MacBook Pro 14</h2>
              <p className="desc">Potente e versátil, indicado para usuários que precisam de alto desempenho em edição de vídeo, design ou programação. Tela de alta qualidade e várias conexões.</p>
              <p className="preco">R$ 19.999,00</p>
              <div className="avaliacao"> <span>★ ★ ★ ★ ☆</span> (956)</div>
              <div className="off">- 5%</div>
            </div>
          </a>

          {/* Produto 3 */}
          <a href="#" className="link-card">
            <div className="card">
              <img src={Curs} alt="" className="img-card" />
              <h2 className="titulo-card">MacBook Pro 16</h2>
              <p className="desc">O mais poderoso da linha, com tela grande e desempenho máximo para profissionais exigentes. Ideal para trabalhos pesados como renderização e produção de conteúdo.</p>
              <p className="preco">R$ 29.699,10</p>
              <div className="avaliacao"> <span>★ ★ ★ ★ ★</span> (853)</div>
              <div className="off">- 15%</div>
            </div>
          </a>

        </section>
        <section className="destaque">

          <iframe src="https://www.youtube.com/embed/Phy0czs6uGA?autoplay=1&mute=1&controls=0&loop=1&playlist=Phy0czs6uGA&modestbranding=1&showinfo=0" frameborder="0" allow="autoplay; fullscreen"></iframe>

        </section>
        
        <footer>

          <img src="" alt="" className="logo-footer" />

          <div className="social-icons">
            <div className="icon">
              <img src="" alt="" id="instagram" />
            </div>
            <div className="icon">
              <img src="" alt="" id="discord" />
            </div>
            <div className="icon">
              <img src="" alt="" id="x" />
            </div>
            <div className="icon">
              <img src="" alt="" id="youtube" />
            </div>
          </div>

        </footer>
      </main>
    </>
  )
}

export default App
