import { getMultipleRandomTutors } from './tutorGenerator';

const generatePremadeTutors = async () => {
  const entryLevelTutors = await getMultipleRandomTutors(2, 1, 2);
  const juniorTutors = await getMultipleRandomTutors(2, 1, 2);
  const seniorTutors = await getMultipleRandomTutors(2, 1, 2);
  const onlineTutors = await getMultipleRandomTutors(2, 1, 5);

  const allTutors = [
    ...entryLevelTutors.map((tutor, index) => ({
      ...tutor,
      id: `entry-${index + 1}`,
      level: 'Entry Level',
      rating: Math.random() + 1
    })),
    ...juniorTutors.map((tutor, index) => ({
      ...tutor,
      id: `junior-${index + 1}`,
      level: 'Junior',
      rating: Math.random() + 2
    })),
    ...seniorTutors.map((tutor, index) => ({
      ...tutor,
      id: `senior-${index + 1}`,
      level: 'Senior',
      rating: Math.random() + 3
    })),
    ...onlineTutors.map((tutor, index) => ({
      ...tutor,
      id: `online-${index + 1}`,
      level: 'Online',
        rating: Math.random() * 4 + 1 
    }))
  ];

  return allTutors;
};

let premadeTutorsCache = null;

const getPremadeTutors = async () => {
  if (!premadeTutorsCache) {
    premadeTutorsCache = await generatePremadeTutors();
  }
  return premadeTutorsCache;
};

export const getTutorById = async (id) => {
  const premadeTutors = await getPremadeTutors();
  return premadeTutors.find(tutor => tutor.id === id);
};

export const getTutorsByLevel = async (level) => {
  const premadeTutors = await getPremadeTutors();
  return premadeTutors.filter(tutor => tutor.level === level);
};

export { generatePremadeTutors };