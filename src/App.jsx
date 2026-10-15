import './style.css'

function App() {

  return (
    <>
      <nav>
        <h2>My Portfolio</h2>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#connections">Connections</a>
      </nav>

      <section id="home">
        <h1>Welcome!</h1>
        <p>
          A space where I share my journey as an Information Technology student, my experiences, and my growing passion for technology.
        </p>
        <a href="#about">Learn More</a>
      </section>

      <section id="about">
        <h1>Kesia M. Historillo</h1>
        <p>Hi! I'm a 20-year-old student currently studying at Batangas State University – Balayan Campus. I am from Pantay, Pag-asa, City of Calaca, Batangas. As an IT student, I am continuously learning about programming, web development, computer systems, and other areas of technology. I enjoy exploring new ideas, developing my skills, and challenging myself to become better both personally and academically. This website serves as a glimpse into who I am, what I learn, and what I aspire to achieve as I continue my journey in the world of Information Technology. I believe that every experience is an opportunity to grow, every challenge is a chance to improve, and every new skill brings me one step closer to my goals.</p>
      </section>

      <section id="projects">
        <h1>My Projects</h1>
        <p>
          Explore academic projects and activities that showcase
          creativity, technical skills, and problem-solving.
        </p>
      </section>

      <section id="connections">
        <h1>Connections</h1>
        <p>
          Get in touch for collaboration, sharing ideas,
          and connecting with others in the technology field.
        </p>
      </section>
    </>
  )
}

export default App