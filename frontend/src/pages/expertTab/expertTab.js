import React from "react";
import "./expertTab.css";

const ExpertTab = () => {
  const experts = [
    {
      id: 1,
      name: "Chris Mendoza",
      imageUrl:
        "https://media.licdn.com/dms/image/v2/D5603AQGr_7dqM9lzmg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1670361664075?e=1733356800&v=beta&t=2t6UfBwRBTiyp2RwSxn_kILAj4fmpkahJXcLvGbJqU0",
      linkedInUrl: "https://www.linkedin.com/in/chris-j-mendoza/",
      skill: "UNLV Lead Teacher",
    },
    {
      id: 2,
      name: "Caleb Mieszko",
      imageUrl:
        "https://media.licdn.com/dms/image/v2/C5603AQGgMWUJj8s_ig/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1643307270577?e=1733356800&v=beta&t=AsNN80bRz2dlCKJ-0wvbpULk3xRjEnZ0UrfSzq9qvaI",
      linkedInUrl: "https://www.linkedin.com/in/calebmieszko/",
      skill: "Javascript Teacher",
    },
    {
      id: 3,
      name: "John Margotti",
      imageUrl:
        "https://media.licdn.com/dms/image/v2/D4E03AQHnTLBEMX_0cw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1671145594490?e=1733356800&v=beta&t=vAxBHKfTP5CLGnXcZvo5FFNSHzSnXeZDqDLgeTRax3c",
      linkedInUrl: "https://www.linkedin.com/in/john-margotti/",
      skill: "Teacher Assistant",
    },
    {
      id: 4,
      name: "Casey Hannan",
      imageUrl:
        "https://media.licdn.com/dms/image/v2/D4E03AQFl1g5FFGXk1w/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1691084675856?e=1733356800&v=beta&t=fuWUuPDFS1jko6t9vXJtvMDeP6vpgKCMO3r0GUsT1Ls",
      linkedInUrl: "linkedin4",
      skill: "Teacher Assistant",
    },
    {
      id: 5,
      name: "Rita Alfonso",
      imageUrl:
        "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_original/v1/attachments/profile/photo/7d76a2f993af9ae57acdfa2f970b0367-1715482554283/7aab78bc-0276-4986-98fd-cee948c92b13.jpg",
      linkedInUrl: "https://www.linkedin.com/in/alfonsotech/",
      skill: "Full Stack Educator",
    },
    {
      id: 6,
      name: "Anthony Ghilardi",
      imageUrl:
        "https://media.licdn.com/dms/image/v2/D4E12AQEud3Ll5MI7cQ/article-inline_image-shrink_1000_1488/article-inline_image-shrink_1000_1488/0/1660833954461?e=1733356800&v=beta&t=M7XhwOT3mlmBVm-LL_B7NUEqo4GTVFuS-iiliDB-MF0",
      linkedInUrl: "https://www.linkedin.com/in/anthony-ghilardi/",
      skill: "Junior Developer ",
    },
    {
      id: 7,
      name: "Jesus Lares",
      imageUrl: "https://media.licdn.com/dms/image/v2/D5603AQFlZY7bhHefbw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1707976324171?e=1733356800&v=beta&t=YNQ-M8fawMbipMFgZYM9uWto8sgzjW3k_T8WxTAriio",
      linkedInUrl: "https://www.linkedin.com/in/jesus-m-lares/",
      skill: "Junior Developer",
    },
    {
      id: 8,
      name: "David A Vargas",
      imageUrl: "https://media.licdn.com/dms/image/v2/D5603AQGQ11jB8sjusw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1724602823816?e=1733356800&v=beta&t=9_0kUTCqBvDtrCBSQqgZSrA0-HPZzq5wno8yFViIYtk",
      linkedInUrl: "https://www.linkedin.com/in/davidavargas-dev/",
      skill: "Junior Developer",
    },
    {
      id: 9,
      name: "Daniel Davila-Martinez",
      imageUrl: "https://media.licdn.com/dms/image/v2/D5603AQEilNft9Oxvng/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1724605423599?e=1733356800&v=beta&t=ocV5R-aTln8Ee2E_cmui_ZxChnNx-SRONxzSRCHhmHk",
      linkedInUrl: "https://www.linkedin.com/in/danieldavilamartinez/",
      skill: "Junior Developer",
    },
    {
      id: 10,
      name: "Daniel Oviedo",
      imageUrl: "https://media.licdn.com/dms/image/v2/D4D35AQFZYEp2unRhUQ/profile-framedphoto-shrink_200_200/profile-framedphoto-shrink_200_200/0/1725665199366?e=1728752400&v=beta&t=zw2z-Jg_I_9CflS2zjn2uldCT3fGAC3XR7aMoKKGn1Q",
      linkedInUrl: "https://www.linkedin.com/in/daniel-oviedo-9a60362b4/",
      skill: "Junior Developer",
    },
    {
      id: 11,
      name: "David Miguel Salvat",
      imageUrl: "https://media.licdn.com/dms/image/v2/D4E12AQEud3Ll5MI7cQ/article-inline_image-shrink_1000_1488/article-inline_image-shrink_1000_1488/0/1660833954461?e=1733356800&v=beta&t=M7XhwOT3mlmBVm-LL_B7NUEqo4GTVFuS-iiliDB-MF0",
      linkedInUrl: "https://www.linkedin.com/in/david-miguel-salvat-59424131a/",
      skill: "Junior Developer",
    },
    {
      id: 12,
      name: "Kajal",
      imageUrl: "https://media.licdn.com/dms/image/v2/D4E12AQEud3Ll5MI7cQ/article-inline_image-shrink_1000_1488/article-inline_image-shrink_1000_1488/0/1660833954461?e=1733356800&v=beta&t=M7XhwOT3mlmBVm-LL_B7NUEqo4GTVFuS-iiliDB-MF0",
      linkedInUrl: "linkedin12",
      skill: "Junior Developer",
    },
    {
      id: 13,
      name: "Terrence Sivels",
      imageUrl: "https://media.licdn.com/dms/image/v2/D4E03AQGdQ9yMKkf5pw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1700692621926?e=1733356800&v=beta&t=ITZOA1pJkGg_JFVZ3FCSMQo8OWBYY2r-ZTz9PLtQlF0",
      linkedInUrl: "https://www.linkedin.com/in/terrence-sivels-dsbsky/",
      skill: "Junior Developer",
    },
    {
      id: 14,
      name: "Daniel Fernandez",
      imageUrl: "https://media.licdn.com/dms/image/v2/D5635AQGe4u5GaWRfOA/profile-framedphoto-shrink_200_200/profile-framedphoto-shrink_200_200/0/1724437231161?e=1728756000&v=beta&t=l20A_KRy_LcOkXti6-Qa0XQDwx_EAp82FzLiZxqxtGE",
      linkedInUrl: "https://www.linkedin.com/in/daniel-fernandez-tech/",
      skill: "Junior Developer",
    },
    {
      id: 15,
      name: "Reji Gamiao",
      imageUrl: "https://media.licdn.com/dms/image/v2/D5603AQFRZLX8jqVRVw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1701314948281?e=1733356800&v=beta&t=U3UAc7aMK23EJPx7GdUvCmDfSI9j7lovwD7EIj2LXGU",
      linkedInUrl: "https://www.linkedin.com/in/reji-gamiao-2761b6272/",
      skill: "Junior Developer",
    },
    {
      id: 16,
      name: "Jeffey Sith",
      imageUrl: "https://media.licdn.com/dms/image/v2/D4E12AQEud3Ll5MI7cQ/article-inline_image-shrink_1000_1488/article-inline_image-shrink_1000_1488/0/1660833954461?e=1733356800&v=beta&t=M7XhwOT3mlmBVm-LL_B7NUEqo4GTVFuS-iiliDB-MF0",
      linkedInUrl: "https://www.linkedin.com/in/jeff-sith-6459342b4/",
      skill: "Junior Developer",
    },
    {
      id: 17,
      name: "Shane Fox",
      imageUrl: "https://media.licdn.com/dms/image/v2/D5635AQFQZGjB88e8UQ/profile-framedphoto-shrink_200_200/profile-framedphoto-shrink_200_200/0/1726539210844?e=1728756000&v=beta&t=tQOShjcJKyVoDZaTClkOD5dXKhILgsx33PvBDv5vCYM",
      linkedInUrl: "https://www.linkedin.com/in/foxshane997/",
      skill: "Junior Developer",
    },
    {
      id: 18,
      name: "Nicholas Mendoza",
      imageUrl: "https://media.licdn.com/dms/image/v2/D5635AQE2ZUnvmjKJ1Q/profile-framedphoto-shrink_200_200/profile-framedphoto-shrink_200_200/0/1709324609959?e=1728756000&v=beta&t=mowlf8_tMv0JKzpNq_OhX6u5ZDXRsjqoEBa0yKkJacY",
      linkedInUrl: "https://www.linkedin.com/in/nicholas-mendoza-5564b62a2/",
      skill: "Junior Developer",
    },
    {
      id: 19,
      name: "Andrew Acin",
      imageUrl: "https://media.licdn.com/dms/image/v2/D4E12AQEud3Ll5MI7cQ/article-inline_image-shrink_1000_1488/article-inline_image-shrink_1000_1488/0/1660833954461?e=1733356800&v=beta&t=M7XhwOT3mlmBVm-LL_B7NUEqo4GTVFuS-iiliDB-MF0",
      linkedInUrl: "https://www.linkedin.com/in/andrew-acin-71b00b2a3/",
      skill: "Junior Developer",
    },
    {
      id: 20,
      name: "Valeria Solorza",
      imageUrl: "https://media.licdn.com/dms/image/v2/D4E03AQGlb9-EZRPHWA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1714793963533?e=1733356800&v=beta&t=SsSFejdNg9stR_VPYTQhDObNjZZMBOWOxtXdXhvV3FE",
      linkedInUrl: "https://www.linkedin.com/in/valeria-solorza/",
      skill: "Junior Developer",
    },
      {
        id: 21,
        name: "Adam Stone",
        imageUrl: "https://media.licdn.com/dms/image/v2/D4E12AQEud3Ll5MI7cQ/article-inline_image-shrink_1000_1488/article-inline_image-shrink_1000_1488/0/1660833954461?e=1733356800&v=beta&t=M7XhwOT3mlmBVm-LL_B7NUEqo4GTVFuS-iiliDB-MF0",
        linkedInUrl: "https://www.linkedin.com/in/adam-stone-ba517b2aa/",
        skill: "Junior Developer",
      },
  ];

  return (
    <div className="expert-grid-et">
      {experts.map((expert) => (
        <a
          key={expert.id}
          href={expert.linkedInUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="expert-card-et"
        >
          <img
            src={expert.imageUrl}
            alt={expert.name}
            className="expert-image-et"
          />
          <h3 className="expert-name-et">{expert.name}</h3>
          <div className="expert-skills-et">
            <span className="skill-tag-et">{expert.skill}</span>
          </div>
          <p className="expert-rating-et">Rating: 5.0</p>
        </a>
      ))}
    </div>
  );
};

export default ExpertTab;
