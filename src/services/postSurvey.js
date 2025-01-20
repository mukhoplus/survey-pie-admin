import axios from 'axios';

const postSurvey = async (survey) => {
  await axios.post(`/surveys`, { ...survey, createdAt: new Date().getTime() });
  alert('저장되었습니다.');
};

export default postSurvey;
