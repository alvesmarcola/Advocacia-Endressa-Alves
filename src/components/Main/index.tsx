import { CTA } from '../CTA'
import { Footer } from '../Footer'
import { Home } from '../Home'
import { LeadCapture } from '../LeadCapture'
import { Services } from '../Services'
import { MainContainer } from './style'
import { Sidebar } from '../Sidebar'

export function Main() {
  return (
    <MainContainer>
      <Sidebar />
      <Home />
      <Services />
      <CTA />
      <LeadCapture />
      <Footer />
    </MainContainer>
  )
}