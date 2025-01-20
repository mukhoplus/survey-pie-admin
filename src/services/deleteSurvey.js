import axios from 'axios';

const deleteSurvey = async (surveyId) => {
  await axios.delete(`/surveys/${surveyId}`);
  alert('삭제되었습니다.');
};

export default deleteSurvey;
