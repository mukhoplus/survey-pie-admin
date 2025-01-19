import Card from '../Card';

const PreviewSection = ({ questions }) => {
  return (
    <>
      {questions.map((question, index) => {
        return (
          <Card key={index} title={question.title} desc={question.desc}>
            Body
          </Card>
        );
      })}
    </>
  );
};

export default PreviewSection;
