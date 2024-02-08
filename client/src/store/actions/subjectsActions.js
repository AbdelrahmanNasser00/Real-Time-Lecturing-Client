export const subjectsActions = {
  SET_SUBJECTS: "SUBJECTS.SET_SUBJECTS",
};

export const setSubjects = (subjects) => {
  return {
    type: subjectsActions.SET_SUBJECTS,
    subjects,
  };
};
