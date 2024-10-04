import React, { useState, useEffect } from "react"
import ReactTypingEffect from "react-typing-effect"
import Navbar from "../../components/navbar/navbar"
import AccountNav from "../../components/accounts/accountNav/accountNav"
import { useCurrentUser } from "../../context/CurrentUser"
import "./home.css"
import SponsorDivider from "../../components/sponsor/sponsorDivider"
import TutorDisplay from "../../components/tutorDisplay/tutorDisplay"
import Showcase from "../../components/showcase/showcase"
import Footer from "../../components/footer/footer"
import FooterFiller from "../../components/footerfiller/footerFiller"
import { GraphQLClient, gql } from "graphql-request"

const client = new GraphQLClient("http://localhost:5000")

const GET_TUTORS_QUERY = gql`
  query {
    tutorUsers {
      id
      firstName
      lastName
      imageUrl
      skills
      rating
    }
  }
`

function Home() {
  const [tutors, setTutors] = useState([])
  const { currentUser } = useCurrentUser()

  const fetchTutors = async () => {
    try {
      const data = await client.request(GET_TUTORS_QUERY)
      if (data && data.tutorUsers) {
        setTutors(data.tutorUsers)
      }
    } catch (error) {
      console.error(error)
      alert("Failed to fetch tutors")
    }
  }
  
      

  useEffect(() => {
    fetchTutors()
  }, [])

  return (
    <div className="home-hm">
      {currentUser ? <AccountNav /> : <Navbar />}
      <div className="home-container-hm">
        <div className="home-left-hm">
          <p className="home-slogan-hm">
            Learn to code and innovate, with a guide to help you elevate Tech
            Tutor
          </p>
          <h1 className="home-title-hm">
            1-on-1{" "}
            <ReactTypingEffect
              text={[
                "Resume",
                "Interview",
                "HTML",
                "Python",
                "CoverLetter",
                "React.js",
                "SQL",
                "Career",
                "MongoDB",
                "TutorSupport",
                "Django",
                "Portfolio",
                "JavaScript",
                "PostgreSQL",
                "Flask",
                "Git/GitHub",
                "Node.js",
                "Vue.js",
                "Angular",
                "TypeScript",
                "RubyRails",
                "C++",
                "Swift",
                "Go(Golang)",
                "GraphQL",
                "RESTfulAPIs",
                "Docker",
                "AWS(Cloud)",
                "Sass (SCSS)",
                "JobPrepHelp",
                "CSS",
              ]}
              speed={100}
              eraseDelay={700}
              typingDelay={100}
              className="typing-effect-hm"
            />
            <br />
            Guidance
          </h1>
          <div className="search-bar-hm">
            <input
              type="text"
              placeholder="Search for mentors or skills..."
              className="search-input-hm"
            />
            <button className="search-button-hm">Search</button>
          </div>
        </div>
        {/* Sidebar */}
        <div className="home-right-hm">
          <div className="tutor-roll-container-hm">
            <div className="tutor-roll-hm">
              {tutors.map((tutor, index) => (
                <div key={index} className="tutor-hm">
                  <img
                    src={tutor.imageUrl}
                    alt={`${tutor.firstName} ${tutor.lastName}`}
                    className="tutor-image-hm"
                  />
                  <h3>
                    {tutor.firstName}
                    <br/> {/** Use styling instead */}
                    {tutor.lastName}
                  </h3>
                  <p className="tutor-skills-hm">
                    {tutor.skills.map((skill, skillIndex) => (
                      <span key={skillIndex} className="skill-tag-hm">
                        {skill}
                      </span>
                    ))}
                  </p>
                  <p className="tutor-rating-hm">Rating: {tutor.rating.toFixed(1)}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <SponsorDivider />
      <Showcase />
      <TutorDisplay />
      <FooterFiller />
      <Footer />
    </div>
  )
}

export default Home
