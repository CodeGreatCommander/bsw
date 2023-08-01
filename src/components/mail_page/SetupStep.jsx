export default function SetupStep(props) {
    return(<>
    <div className="step">
    <div className="stepNumber">{props.num}</div>

    <div className="stepBody">{props.body}</div>
    </div>

    </>)
}