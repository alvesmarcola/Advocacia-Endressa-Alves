import { ServiceCard, ServicesContainer, CardContainer } from './style'
import arrowImg from '../../assets/arrow.svg'
import branchBgImg from '../../assets/branch_bg.png'
import cardIconImg1 from '../../assets/card_icon_1.svg'
import cardIconImg2 from '../../assets/card_icon_2.svg'
import cardIconImg3 from '../../assets/card_icon_3.svg'
import cardIconImg4 from '../../assets/card_icon_4.svg'
import cardIconImg5 from '../../assets/card_icon_5.svg'
import cardIconImg6 from '../../assets/card_icon_6.svg'

export function Services() {
  return (
    <ServicesContainer id="services">
      <div className="headerContainer">
        <h2>Nossas áreas de atuação</h2>
        <p>
          Tratamos cada trabalho de forma abrangente e acreditamos na força da
          comunicação clara e fácil.
        </p>
      </div>
      <CardContainer>
        <ServiceCard>
          <div className="contentContainer">
            <div className="header">
              <img
                width={40}
                height={40}
                src={cardIconImg1}
                alt="Direito Empresarial do trabalho"
              />
              <h3>Direito trabalhista</h3>
            </div>
            <p className="description">
            Defendemos seus direitos no ambiente de trabalho, oferecendo assessoria especializada em questões trabalhistas para empregados e empregadores.
            </p>
          </div>
          <img
            className="arrow"
            src={arrowImg}
            alt="ocultar mostrar conteudo"
          />
        </ServiceCard>
        <ServiceCard>
          <div className="contentContainer">
            <div className="header">
              <img
                width={40}
                height={40}
                src={cardIconImg2}
                alt="Direito de família"
              />
              <h3>Direito de família</h3>
            </div>
            <p className="description">
            Assistência em questões familiares como divórcios, guarda, e pensão alimentícia, sempre buscando soluções amigáveis e justas.
            </p>
          </div>
          <img
            className="arrow"
            src={arrowImg}
            alt="ocultar mostrar conteudo"
          />
        </ServiceCard>
        <ServiceCard>
          <div className="contentContainer">
            <div className="header">
              <img
                width={40}
                height={40}
                src={cardIconImg3}
                alt="Direito tributário"
              />
              <h3>Direito do consumidor</h3>
            </div>
            <p className="description">
            Proteção aos direitos dos consumidores em casos de contratos abusivos, cobranças indevidas e outros conflitos com fornecedores.
            </p>

          </div>
          <img
            className="arrow"
            src={arrowImg}
            alt="ocultar mostrar conteudo"
          />
        </ServiceCard>
        <ServiceCard>
          <div className="contentContainer">
            <div className="header">
              <img
                width={40}
                height={40}
                src={cardIconImg4}
                alt="Direito digital"
              />
              <h3>Busca e apreensão</h3>
            </div>
            <p className="description">
            Atuação rápida e eficaz em processos de busca e apreensão de bens, protegendo seus interesses com segurança jurídica.
            </p>
          </div>
          <img
            className="arrow"
            src={arrowImg}
            alt="ocultar mostrar conteudo"
          />
        </ServiceCard>
        <ServiceCard>
          <div className="contentContainer">
            <div className="header">
              <img
                width={40}
                height={40}
                src={cardIconImg5}
                alt="Registro de marcas e patentes"
              />
              <h3>Registro de marcas e patentes</h3>
            </div>
            <p className="description">
            Proteja sua marca e suas invenções com o registro de propriedade intelectual, garantindo seus direitos exclusivos no mercado.
            </p>
          </div>
          <img
            className="arrow"
            src={arrowImg}
            alt="ocultar mostrar conteudo"
          />
        </ServiceCard>
        <ServiceCard>
          <div className="contentContainer">
            <div className="header">
              <img
                width={40}
                height={40}
                src={cardIconImg6}
                alt="Cobrança extrajudicial"
              />
              <h3>Cobrança extrajudicial</h3>
            </div>
            <p className="description">
            Serviços de mediação, conciliação, e elaboração de documentos extrajudiciais, buscando soluções eficientes e menos burocráticas.
            </p>
          </div>
          <img
            className="arrow"
            src={arrowImg}
            alt="ocultar mostrar conteudo"
          />
        </ServiceCard>
      </CardContainer>

      <img className="branchBg" src={branchBgImg} alt="ramo de fundo" />
    </ServicesContainer>
  )
}
