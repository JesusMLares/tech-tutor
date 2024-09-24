const skills = [
    'HTML', 'CSS', 'JavaScript', 'React.js', 'Node.js',
    'Python', 'Django', 'Flask', 'SQL', 'MongoDB',
    'PostgreSQL', 'Express.js', 'Angular', 'Vue.js',
    'TypeScript', 'PHP', 'Ruby on Rails', 'Java',
    'Kotlin', 'Swift', 'C++', 'C#', 'Go (Golang)',
    'GraphQL', 'RESTful APIs', 'Sass (SCSS)',
    'jQuery', 'Git/GitHub', 'Docker', 'AWS (Amazon Web Services)'
  ];
  
  function getRandomSkills() {
    const numberOfSkills = Math.floor(Math.random() * 3) + 1; 
    const randomSkills = [];
    
    for (let i = 0; i < numberOfSkills; i++) {
      const randomIndex = Math.floor(Math.random() * skills.length);
      const skill = skills[randomIndex];
      if (!randomSkills.includes(skill)) {
        randomSkills.push(skill);
      }
    }
    
    return randomSkills;
  }
  
  function getUniquePhotoUrl(gender, usedUrls) {
    let photoUrl;
    do {
      const uniqueId = Date.now() + Math.random().toString(36).substr(2, 5);
      photoUrl = `https://xsgames.co/randomusers/avatar.php?g=${gender}&${uniqueId}`;
    } while (usedUrls.has(photoUrl));
    
    usedUrls.add(photoUrl);
    return photoUrl;
  }
  
  async function getRandomTutor(usedUrls) {
    try {
      const response = await fetch('https://randomuser.me/api/');
      const data = await response.json();
      const user = data.results[0];
  
      const photoUrl = getUniquePhotoUrl(user.gender, usedUrls);
  
      return {
        name: `${user.name.first} ${user.name.last}`,
        photo: photoUrl,
        skills: getRandomSkills(),
        gender: user.gender
      };
    } catch (error) {
      console.error('Error fetching random tutor:', error);
      return null;
    }
  }
  
  export async function getMultipleRandomTutors(count) {
    const tutors = [];
    const usedUrls = new Set();
    
    for (let i = 0; i < count; i++) {
      const tutor = await getRandomTutor(usedUrls);
      if (tutor) {
        tutors.push(tutor);
      }
    }
    return tutors;
  }