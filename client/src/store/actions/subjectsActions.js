export const subjectsActions = {
  SET_SUBJECTS: "SUBJECTS.SET_SUBJECTS",
};

export const setSubjects = (subjects) => {
//   console.log("setSubjec", subjects);
  return {
    type: subjectsActions.SET_SUBJECTS,
    subjects,
  };
};
