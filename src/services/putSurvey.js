import axios from 'axios';

const putSurvey = async (survey) => {
  await axios.put(`/surveys/${survey.id}`, survey);
  alert('저장되었습니다.');
};

export default putSurvey;
