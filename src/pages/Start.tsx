import Button from "../components/ui/Button/Button";
import question from "../assets/question.gif";

function Start() {
  
  return (
    <>
      

      <h1>One Question....</h1>
      <Button text="Proceed" navigateTo="/Home" />
      <div style={{ marginTop: "1rem" }}>
        <img src={question} alt="question" />
      </div>
    </>
  );
}

export default Start;
