const skillDescriptions = {
    'HTML': 'structuring web content',
    'CSS': 'styling and layout of web pages',
    'JavaScript': 'interactive front-end development',
    'React.js': 'building modern user interfaces',
    'Node.js': 'server-side JavaScript development',
    'Python': 'versatile programming for various applications',
    'Django': 'robust backend development with Python',
    'Flask': 'lightweight web application development',
    'SQL': 'relational database management',
    'MongoDB': 'NoSQL database solutions',
    'PostgreSQL': 'advanced relational database systems',
    'Express.js': 'web application framework for Node.js',
    'Angular': 'comprehensive front-end framework',
    'Vue.js': 'progressive JavaScript framework',
    'TypeScript': 'typed superset of JavaScript',
    'PHP': 'server-side scripting for web development',
    'Ruby on Rails': 'full-stack web application framework',
    'Java': 'object-oriented programming for various platforms',
    'Kotlin': 'modern programming for Android development',
    'Swift': 'powerful programming for iOS development',
    'C++': 'high-performance system and application development',
    'C#': 'versatile programming for .NET framework',
    'Go (Golang)': 'efficient and concurrent programming',
    'GraphQL': 'query language for APIs',
    'RESTful APIs': 'architectural style for networked applications',
    'Sass (SCSS)': 'CSS extension language',
    'jQuery': 'fast and concise JavaScript library',
    'Git/GitHub': 'version control and collaboration',
    'Docker': 'containerization of applications',
    'AWS (Amazon Web Services)': 'cloud computing services'
  };
  
  const generateIntro = (name, skills) => {
    const templates = [
      `Hi there! I'm ${name}, and I'm passionate about ${skills[0]} and ${skills[1]}.`,
      `Hello! ${name} here. I specialize in ${skills[0]}, ${skills[1]}, and ${skills[2]}.`,
      `Greetings! I'm ${name}, your go-to expert for ${skills[0]} and ${skills[1]}.`,
      `Welcome! I'm ${name}, and I love teaching ${skills[0]} and ${skills[1]}.`,
      `Hey! ${name} at your service. My expertise lies in ${skills[0]} and ${skills[1]}.`
    ];
    return templates[Math.floor(Math.random() * templates.length)];
  };
  
  const generateExpertise = (skills) => {
    const relevantSkills = skills.filter(skill => skillDescriptions[skill]);
    const descriptions = relevantSkills.map(skill => skillDescriptions[skill]);
    
    const templates = [
      `I'm proficient in ${descriptions.slice(0, -1).join(', ')}, and ${descriptions.slice(-1)}.`,
      `My areas of expertise include ${descriptions.slice(0, -1).join(', ')}, as well as ${descriptions.slice(-1)}.`,
      `I specialize in ${descriptions.slice(0, -1).join(', ')}, and have a strong background in ${descriptions.slice(-1)}.`,
      `With skills ranging from ${descriptions.slice(0, -1).join(', ')} to ${descriptions.slice(-1)}, I can help you master a variety of technologies.`,
      `My technical skills cover ${descriptions.slice(0, -1).join(', ')}, and I'm particularly passionate about ${descriptions.slice(-1)}.`
    ];
    return templates[Math.floor(Math.random() * templates.length)];
  };
  
  const generateClosing = () => {
    const templates = [
      "I'm here to guide you through your learning journey. Let's work together to achieve your goals!",
      "Whether you're a beginner or looking to level up, I'm ready to help you succeed. Book a session with me today!",
      "I'm committed to helping you master these skills. Let's start your coding adventure together!",
      "Ready to take your skills to the next level? Book a session with me, and let's make it happen!",
      "I'm excited to share my knowledge and help you grow. Don't hesitate to book a session and start your journey to success!"
    ];
    return templates[Math.floor(Math.random() * templates.length)];
  };
  
  export const generateTutorDescription = (name, skills) => {
    const intro = generateIntro(name, skills);
    const expertise = generateExpertise(skills);
    const closing = generateClosing();
  
    return `${intro} ${expertise} ${closing}`;
  };