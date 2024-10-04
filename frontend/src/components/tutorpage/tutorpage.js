import React, { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import Navbar from "../navbar/navbar"
import { getTutorById } from "../../utils/premadeTutors"
import { generateTutorDescription } from "../../utils/descriptionGenerator"
import { generateTutorProfile } from "../../utils/tutorProfileGenerator"
import "./tutorpage.css"
import Footer from "../../components/footer/footer"
import { GraphQLClient, gql } from "graphql-request"

const graphqlUrl = process.env.REACT_APP_GRAPHQL_URL
const client = new GraphQLClient(graphqlUrl);

const GET_USER_QUERY = gql`
  query User($id: String!) {
    user(id: $id) {
      id
      firstName
      lastName
      email
      role
      imageUrl
      skills
      rating
      hourlyRate
      isAvailable
    }
  }
`

const TutorPage = () => {
  const { id } = useParams()
  const userId = id
  const [tutor, setTutor] = useState([])
  const navigate = useNavigate()
  const [tutorProfile, setTutorProfile] = useState(null)

  console.log(userId)

  const fetchTutor = async () => {
    if (!userId) {
      return
    }

    try {
      const data = await client.request(GET_USER_QUERY, { id: userId })
      console.log("Fetched user data:", data)

      if (data && data.user) {
        setTutor({
          id: data.user.id,
          firstName: data.user.firstName,
          lastName: data.user.lastName,
          email: data.user.email,
          role: data.user.role,
          imageUrl: data.user.imageUrl,
          skills: data.user.skills,
          rating: data.user.rating,
          hourlyRate: data.user.hourlyRate,
          isAvailable: data.user.isAvailable,
        })
      } else {
        alert("User not found")
      }
    } catch (error) {
      console.error(error)
      alert("Failed to fetch user")
    }
  }

  useEffect(() => {
    fetchTutor()
    setTutorProfile(generateTutorProfile())
  }, [userId])

  // useEffect(() => {
  //   const fetchTutor = async () => {
  //     try {
  //       const fetchedTutor = await getTutorById(id);
  //       setTutor(fetchedTutor);
  //       setTutorProfile(generateTutorProfile());
  //     } catch (error) {
  //       console.error('Error fetching tutor:', error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchTutor();
  // }, [id]);

  // const handleBack = () => {
  //   navigate(-1);
  // };

  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  // if (!tutor) {
  //   return <div>Tutor not found</div>;
  // }

  if (!tutor) {
    return <div>Loading...</div>
  }

  let tutorDescription = ""
  if (tutor && tutor.firstName && tutor.skills) {
    tutorDescription = generateTutorDescription(tutor.firstName, tutor.skills)
  }

  return (
    <div className="tutor-page-container-tp">
      <Navbar />
      <div className="tutor-page-content-tp">
        <div className="tutor-page-tp">
          <div className="tutor-left-column-tp">
            <button className="back-button-tp" onClick={() => navigate(-1)}>
              Back
            </button>
            <div className="tutor-header-tp">
              <img
                src={tutor.imageUrl}
                alt={tutor.firstName}
                className="tutor-image-tp"
              />
              <div className="tutor-info-tp">
                <h1>
                  {tutor.firstName} {tutor.lastName}
                </h1>
                <p className="tutor-level-tp">Level: Experienced</p>
                <p className="tutor-rating-tp">Rating: {tutor.rating}</p>
                <div className="tutor-booking-info-tp">
                  <button className="book-button-tp">Book Me Now</button>
                  <div className="tutor-rates-availability-tp">
                    <p className="tutor-rates-tp">${tutor.hourlyRate}/per hour</p>
                    {/* <p className="tutor-availability-tp">{tutor.isAvailable}</p> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="tutor-skills-tp">
              <h2>Skills:</h2>
              {tutor.skills && ( //Fixed rendering issue
                <ul>
                  {tutor.skills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
          <div className="tutor-right-column-tp">
            <div className="tutor-description-tp">
              <h2>About Me</h2>
              <p>{tutorDescription}</p>
            </div>
            {tutorProfile && ( //Fixed rendering issue
              <div className="tutor-profile-tp">
                <div className="tutor-experience-tp">
                  <h2>Experience</h2>
                  <p>{tutorProfile.experience}</p>
                </div>
                <div className="tutor-testimonials-tp">
                <h2>What My Students Say</h2>
                {tutorProfile.testimonials.map((testimonial, index) => (
                  <blockquote key={index}>
                    "{testimonial}"<footer>- Student {index + 1}</footer>
                  </blockquote>
                ))}
              </div>
              <div className="tutor-comments-tp">
                <h2>Recent Comments</h2>
                <ul>
                  {tutorProfile.comments.map((comment, index) => (
                    <li key={index}>{comment}</li>
                  ))}
                </ul>
              </div>
              </div>
            )}
          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default TutorPage
