import linkedinImg from '../../assets/in_white.svg'
import faceImg from '../../assets/face-white.svg'
import instaImg from '../../assets/insta-white.svg'
import logoSidebarImg from '../../assets/ea_logo.png'
import { Sidebar as SidebarContainer } from 'primereact/sidebar'
import { SidebarButton, SidebarContent } from './style'
import { useState } from 'react'
import 'primereact/resources/themes/lara-light-indigo/theme.css' // theme
import 'primereact/resources/primereact.min.css' // core css
import 'primeicons/primeicons.css'
import hambImg from '../../assets/hamb.svg'

export function Sidebar() {
  const [visibleLeft, setVisibleLeft] = useState(false)

  return (
    <>
      <SidebarButton
        src={hambImg}
        onClick={() => setVisibleLeft(true)}
        alt="mostrar sidebar"
      ></SidebarButton>
      <SidebarContainer
        style={{ background: '#0A3D62' }}
        visible={visibleLeft}
        fullScreen
        onHide={() => setVisibleLeft(false)}
      >
        <SidebarContent>
          <nav>
            <a href="#contato" onClick={() => setVisibleLeft(false)}>
              Contato
            </a>
            <a href="#services" onClick={() => setVisibleLeft(false)}>
              Áreas de atuação
            </a>
            <a href="#home" onClick={() => setVisibleLeft(false)}>
              Home
            </a>
            <a
              href="wa.me//+555492391756"
              target="_blank"
              rel="noreferrer"
            >
              Entrar em contato
            </a>

            <nav className="socialNav">
            <a
            target="_blank"
            href="https://www.linkedin.com/in/endressa-alves/"
            rel="noreferrer"
          >
            <img width={40} height={40} src={linkedinImg} alt="linkedin" />
          </a>
          <a
            target="_blank"
            href="https://www.facebook.com/endressa.alves"
            rel="noreferrer"
          >
            <img width={40} height={40} src={faceImg} alt="facebook" />
          </a>
          <a
            target="_blank"
            href="https://www.instagram.com/endressalves?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            rel="noreferrer"
          >
            <img width={40} height={40} src={instaImg} alt="instagram" />
          </a>
            </nav>
          </nav>
          <footer>
            <img width={90} src={logoSidebarImg} alt="logomarca Endressa" />
            <p>
              Advogada especializada em resolver problemas
              jurídicos.
            </p>
          </footer>
        </SidebarContent>
      </SidebarContainer>
    </>
  )
}
