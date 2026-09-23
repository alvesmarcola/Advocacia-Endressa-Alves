import { CTA } from '../CTA'
import { Footer } from '../Footer'
import { Home } from '../Home'
import { LeadCapture } from '../LeadCapture'
import { Services } from '../Services'
import { MainContainer } from './style'

export function Main() {
  return (
    <MainContainer>
      <Home />
      <Services />
      <CTA />
      <LeadCapture />
      <Footer />
    </MainContainer>
  )
}