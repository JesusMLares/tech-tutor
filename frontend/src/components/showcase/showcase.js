import React, { useEffect, useState } from "react"
import "./showcase.css"
import { GraphQLClient, gql } from "graphql-request"
import { useCurrentUser } from "../../context/CurrentUser"

const graphqlUrl = process.env.REACT_APP_GRAPHQL_URL
const client = new GraphQLClient(graphqlUrl);

const GET_TUTORS_QUERY = gql`
  query {
    tutorUsers {
      id
      firstName
      lastName
      imageUrl
      skills
      rating
      hourlyRate
    }
  }
`

// const TutorCard = ({ name, title, price, features, imageUrl }) => (
//   <div className="tutor-card-sc">
//     <img src={imageUrl} alt={name} className="tutor-image-sc" />
//     <h3>{name}</h3>
//     <p className="tutor-title-sc">{title}</p>
//     <p className="tutor-price-sc">${price}/per day</p>
//     <ul className="tutor-features-sc">
//       {features.map((feature, index) => (
//         <li key={index}>{feature}</li>
//       ))}
//     </ul>
//   </div>
// )

const Showcase = () => {
  const [tutors, setTutors] = useState([])
  const { currentUser } = useCurrentUser()
  console.log(currentUser)
  

  const fetchTwoRandomTutors = async () => {
    try {
      const data = await client.request(GET_TUTORS_QUERY)
      if (data && data.tutorUsers) {
        const randomTutors = data.tutorUsers
          .sort(() => 0.5 - Math.random())
          .slice(0, 2)
        setTutors(randomTutors)
      }
    } catch (error) {
      console.error(error)
      alert("Failed to fetch tutors")
    }
  }

  useEffect(() => {
    fetchTwoRandomTutors()
  }, [])

  return (
    <div className="showcase-container-sc">
      <section className="tutor-showcase-sc">
        <h2>Connect with Expert Tutors, Unlock Your Potential</h2>
        <div className="tutor-grid-sc">
          {tutors.map((tutor, index) => (
            <div className="tutor-card-sc" key={index}>
              <img
                src={tutor.imageUrl}
                alt={tutor.firstName}
                className="tutor-image-sc"
              />
              <h3>
                {tutor.firstName} {tutor.lastName}
              </h3>
              <p className="tutor-price-sc">
                ${tutor.hourlyRate.toFixed(1)}/per day{" "}
              </p>
              <ul className="tutor-features-sc">
                {tutor.skills.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="showcase-benefits-sc">
          <h3>Your Journey to Success Starts with the Right Guide</h3>
          <p>
            At Tech Tutor, we connect you with experienced tutors from various
            industries to help you achieve your career goals, develop new
            skills, or navigate challenges in your startup journey. Gain
            insights, receive personalized feedback, and grow professionally
            with our dedicated tutors by your side.
          </p>
          <ul className="benefits-list-sc">
            <li>Access to top-tier tutors from around the globe</li>
            <li>Customized learning paths and flexible schedules</li>
            <li>One-on-one video calls and real-time messaging</li>
            <li>Free initial consultation with tutors</li>
            <li>Proven success with a 96% satisfaction rate</li>
          </ul>
          <button className="cta-button-sc">Find Your Tutor</button>
        </div>

        <div className="testimonial-sc">
          <p>
            "With the guidance I received from my tutor on Tech Tutor, I
            transitioned into a software engineering role at Apple. The
            experience was invaluable and life-changing!"
          </p>
          <p className="testimonial-author-sc">- Michele Verriello</p>
        </div>

        <section className="become-tutor-sc">
          <h2>Ready to Share Your Expertise?</h2>
          <p>
            If you're passionate about teaching and want to help others reach
            their potential, join our community of skilled tutors. Set your own
            schedule, teach what you love, and make an impact today.
          </p>
          {currentUser?.role === "TUTOR" ? (
            <button className="cta-button-sc">View Your Profile</button>
          ) : (
            <button className="cta-button-sc">Become a Tutor</button>
          )}
        </section>
      </section>
    </div>
  )
}

export default Showcase