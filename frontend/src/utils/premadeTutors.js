import { getMultipleRandomTutors } from './tutorGenerator';

const generatePremadeTutors = async () => {
  const entryLevelTutors = await getMultipleRandomTutors(16, 1, 2);
  const onlineTutors = await getMultipleRandomTutors(8, 1, 5);

  const allTutors = [
    ...entryLevelTutors.map((tutor, index) => ({
      ...tutor,
      id: `entry-${index + 1}`,
      level: 'Entry Level'
    })),
    ...onlineTutors.map((tutor, index) => ({
      ...tutor,
      id: `online-${index + 1}`,
      level: 'Online'
    }))
  ];

  return allTutors;
};

export const premadeTutors = await generatePremadeTutors();

export const getTutorById = (id) => premadeTutors.find(tutor => tutor.id === id);

export const getTutorsByLevel = (level) => premadeTutors.filter(tutor => tutor.level === level);