import AddButton from '../AddButton';
import Body from '../Body';
import Card from '../Card';

const PreviewSection = ({
  questions,
  addQuestion,
  moveUpQuestion,
  moveDownQuestion,
  deleteQuestion,
}) => {
  return (
    <>
      {questions.map((question, index) => {
        return (
          <Card
            key={index}
            title={question.title}
            desc={question.desc}
            onUpButtonClick={() => moveUpQuestion(index)}
            onDeleteButtonClick={() => deleteQuestion(index)}
            onDownButtonClick={() => moveDownQuestion(index)}
          >
            <Body type={question.type} options={question.options} />
          </Card>
        );
      })}
      <AddButton onClick={addQuestion} />
    </>
  );
};

export default PreviewSection;
