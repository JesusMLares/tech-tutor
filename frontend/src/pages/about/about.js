import React from "react";
import { useAuth } from "../../context/AuthContext";
import Navbar from "../../components/navbar/navbar";
import AccountNav from "../../components/accounts/accountNav/accountNav";
import Footer from "../../components/footer/footer";
import "./about.css";

const About = () => {
  const { user } = useAuth();

  return (
    <div className="about-page-ab">
      {user ? <AccountNav /> : <Navbar />}
      <div className="about-container-ab">
        <h1 className="about-title-ab">About Tech Tutor</h1>

        <section className="section-ab mission-section-ab">
          <h2>Our Mission</h2>
          <p>
            At Tech Tutor, we're passionate about empowering individuals to
            master the world of technology. Our mission is to provide
            accessible, high-quality tutoring in programming and tech skills,
            connecting learners with experienced mentors who can guide them on
            their journey to success.
          </p>
        </section>

        <section className="section-ab values-section-ab">
          <h2>Our Values</h2>
          <div className="values-grid-ab">
            <div className="value-item-ab">
              <h3>T</h3>
              <h4>Trust</h4>
              <p>
                We build trust through reliable, high-quality tutoring services.
              </p>
            </div>
            <div className="value-item-ab">
              <h3>U</h3>
              <h4>Understanding</h4>
              <p>
                We strive to understand and meet each student's unique needs.
              </p>
            </div>
            <div className="value-item-ab">
              <h3>T</h3>
              <h4>Technology</h4>
              <p>
                We leverage cutting-edge technology to enhance the learning
                experience.
              </p>
            </div>
            <div className="value-item-ab">
              <h3>O</h3>
              <h4>Opportunity</h4>
              <p>
                We create opportunities for growth and success in the tech
                industry.
              </p>
            </div>
            <div className="value-item-ab">
              <h3>R</h3>
              <h4>Results</h4>
              <p>
                We focus on delivering measurable results and continuous
                improvement.
              </p>
            </div>
          </div>
        </section>

        <section className="section-ab team-section-ab">
          <h2>Our Team</h2>
          <p>
            Tech Tutor was born from the innovative minds of three talented
            junior developers during their coding bootcamp at the University of
            Nevada, Las Vegas (UNLV). This dynamic trio combined their unique
            skills to create a platform that revolutionizes personalized,
            one-on-one tutoring in the tech industry.
          </p>

          <div className="team-members-ab">
            <div className="team-member-ab">
              <h3>Anthony Ghilardi</h3>
              <p className="team-role-ab">
                Frontend Developer |  Payment Systems Integration
              </p>
              <p>
                Anthony spearheaded the implementation of crucial frontend
                logic, including the seamless integration of the Stripe payment
                API, ensuring a smooth and secure transaction process for our
                users.
              </p>
            </div>

            <div className="team-member-ab">
              <h3>Jesus Lares</h3>
              <p className="team-role-ab">
                Backend Developer | Database Management & Authentication
              </p>
              <p>
                Jesus engineered the robust backend infrastructure, designing
                efficient database schemas and implementing secure user
                authentication systems, ensuring a scalable and high-performance
                foundation for the platform.
              </p>
            </div>

            <div className="team-member-ab">
              <h3>David A Vargas</h3>
              <p className="team-role-ab">
                UI/UX Designer | Frontend Developer
              </p>
              <p>
                David brought the platform to life with his keen eye for design,
                creating an intuitive user interface and implementing essential
                frontend logic, including API-driven features and authentication to enhance user experience.
              </p>
            </div>
          </div>

          <p>
            Together, these aspiring developers have built a platform that
            connects students with industry professionals, offering years of
            experience across various tech fields. Their diverse backgrounds and
            fresh perspective ensure that Tech Tutor remains at the forefront of
            educational technology, providing unparalleled tutoring services in
            the ever-evolving world of tech.
          </p>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default About;
