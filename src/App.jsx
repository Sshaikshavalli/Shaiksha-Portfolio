import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Education from './components/Education'
import Contact from './components/Contact'
import { profile } from './data/content'

export default function App() {
  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <Nav />
      <main id="main">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>
      <footer className="footer">
        <div className="wrap footer-inner">
          <p>&copy; {new Date().getFullYear()} {profile.name}</p>
          <p>Built with React and Vite</p>
          <a href="#top">Back to top</a>
        </div>
      </footer>
    </>
  )
}
