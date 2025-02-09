import {FcCheckmark} from "react-icons/fc";
import {ImCross} from "react-icons/im";
import Comments from "./Comments";

const StudentDetails = ({student, comments, setComments}) => {
    let amount = Math.floor((student.codewars.current.total / student.codewars.goal.total) * 100)
    let percent;

    if(amount >= 100){
        percent = 'green';
    }else if(amount >= 50 && amount < 100){
        percent = 'yellow';
    }else if(amount < 50){
        percent = 'red';
    }

    return (
        <div className="details">
            <section className="section1">
                <h4>Codewars</h4>
                <p><span className="span">Current Total: </span>{student.codewars.current.total}</p>
                <p><span className="span">Last Week: </span>{student.codewars.current.lastWeek}</p>
                <p><span className="span">Goal: </span>{student.codewars.goal.total}</p>
                <p><span className="span">Percent of Goal Achieved: </span><span className={percent}>{Math.floor((student.codewars.current.total / student.codewars.goal.total) * 100)}%</span></p>
            </section>

            <section className="section2">
                <h4>Scores</h4>
                <p><span className="span">Assignments: </span>{student.cohort.scores.assignments * 100}%</p>
                <p><span className="span">Projects: </span>{student.cohort.scores.projects * 100}%</p>
                <p><span className="span">Assessments: </span>{student.cohort.scores.assessments * 100}%</p>
            </section>

            <section className="section3">
                <h4>Certifications</h4>
                <p><span className="span">Resume: </span>{student.certifications.resume ? <FcCheckmark/> : <ImCross/>}</p>
                <p><span className="span">LinkedIn: </span>{student.certifications.linkedin ? <FcCheckmark/> : <ImCross/>}</p>
                <p><span className="span">Mock Interview: </span>{student.certifications.mockInterview ? <FcCheckmark/> : <ImCross/>}</p>
                <p><span className="span">GitHub: </span>{student.certifications.github ? <FcCheckmark/> : <ImCross/>}</p>
            </section>
            <section className="line2"></section>
            <Comments student={student} comments={comments} setComments={setComments} />
        </div>
    )

}

export default StudentDetails;