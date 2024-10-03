import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { generatePremadeTutors } from "../../utils/premadeTutors"

const TutorPage = async () => {
  const { id } = useParams()
  const [tutor, setTutor] = useState(null)
  const [loading, setLoading] = useState(true)

  const premadeTutors = await generatePremadeTutors()
  const getTutorById = (id) => premadeTutors.find((tutor) => tutor.id === id)

  useEffect(() => {
    const fetchTutor = async () => {
      try {
        const fetchedTutor = await getTutorById(id)
        setTutor(fetchedTutor)
      } catch (error) {
        console.error("Error fetching tutor:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchTutor()
  }, [id])

  if (loading) {
    return <div>Loading...</div>
  }

  if (!tutor) {
    return <div>Tutor not found</div>
  }

  return (
    <div className="tutor-page">
      <h1>{tutor.name}</h1>
      <img src={tutor.photo} alt={tutor.name} className="tutor-image" />
      <p>Level: {tutor.level}</p>
      <p>
        Rating:{" "}
        {typeof tutor.rating === "number" ? tutor.rating.toFixed(1) : "N/A"}
      </p>
      <h2>Skills:</h2>
      <ul>
        {tutor.skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  )
}

export default TutorPage
