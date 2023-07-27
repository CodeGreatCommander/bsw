
export default function Question({question,answer}){
    return(<div className="d-flex flex-column">
        <div className="mentor-question">{question}</div>
        <div className="mentor-answer">{answer}</div>
    </div>)
}