const comments = [
    "This tutor was fantastic! I learned so much in just one session.",
    "Very patient and understanding. Highly recommended!",
    "Great experience! The lessons were customized to my needs.",
    "I really appreciated the tutor's expertise and teaching style.",
    "The homework assignments were helpful and relevant to my goals.",
    "I made significant progress thanks to this tutor!",
    "The explanations were clear and easy to understand.",
    "This tutor goes above and beyond to help students succeed.",
    "The sessions were fun and engaging! Thank you!",
    "I couldn't have asked for a better learning experience."
  ];
  
  const experiences = [
    "Over 5 years of experience in web development.",
    "Worked as a software engineer for a Fortune 500 company.",
    "Expert in Python and data analysis.",
    "Led a team of developers in creating a mobile app.",
    "Tutored students of all ages in programming languages.",
    "Created course materials for online learning platforms.",
    "Participated in numerous hackathons and coding competitions.",
    "Provided mentorship to junior developers.",
    "Delivered workshops on software development best practices.",
    "Experience in building scalable web applications."
  ];
  
  
  const availabilities = [
    "Available Monday, Wednesday, and Friday evenings.",
    "Available on weekends from 10 AM to 4 PM.",
    "Available for tutoring Tuesday and Thursday mornings.",
    "Flexible schedule; can accommodate most times.",
    "Available after school hours and on Saturdays.",
    "Open for sessions on weekday afternoons.",
    "Available on Sundays and weekday evenings.",
    "Can offer sessions during lunch hours on weekdays.",
    "Available every day from 4 PM to 8 PM.",
    "Can arrange sessions according to your availability."
  ];
  
  const rates = [
    "1-hour session: $50",
    "1-hour session: $45 (package of 5 hours: $200)",
    "1-hour session: $60",
    "1-hour session: $40 (package of 10 hours: $350)",
    "1-hour session: $55",
    "1-hour session: $35 (first session is free!)",
    "1-hour session: $70",
    "1-hour session: $30 (package of 5 hours: $140)",
    "1-hour session: $80 (includes materials)",
    "1-hour session: $65 (group rates available)"
  ];
  
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  
  export function generateTutorProfile() {
    return {
      comments: shuffleArray([...comments]).slice(0, 3),
      experience: experiences[Math.floor(Math.random() * experiences.length)],
      availability: availabilities[Math.floor(Math.random() * availabilities.length)],
      rate: rates[Math.floor(Math.random() * rates.length)],
      testimonials: shuffleArray([...comments]).slice(0, 2)
    };
  }