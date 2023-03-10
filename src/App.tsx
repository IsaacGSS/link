import { Header } from './components/Header'
import { Links } from './components/Link/Links'
import { Footer } from './components/Footer'

export const App = () => {
  return (
    <>
      <Header
        srcHeader='https://github.com/IsaacGSS.png'
        altHeader='foto de perfil de isaac S. Silva'
        description='Front-end Developer'
        title='Isaac S. Silva'
      />

      <Links />

      <Footer />
    </>
  )
}
