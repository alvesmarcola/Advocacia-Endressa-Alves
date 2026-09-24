import { CTA } from '../CTA'
import { Footer } from '../Footer'
import { Home } from '../Home'
import { LeadCapture } from '../LeadCapture'
import { Services } from '../Services'
import { MainContainer } from './style'
import { Sidebar } from '../Sidebar'
import { Package } from '../Package'
import { FinalFooter } from '../FinalFooter'
import { Divider } from '../Divider'

export function Main() {
  return (
    <MainContainer>
      <Home />
      
          <Divider />

          <Services />

          <Divider />

          <CTA />

          <Divider />

          <LeadCapture />

          <Divider />

          <Footer />

          <FinalFooter />
    </MainContainer>
  )
}