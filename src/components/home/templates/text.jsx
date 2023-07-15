import './text.css'

function TextBlock(params){
    const {heading,body}=params;
    return(<div className='TextBlockcontainer'>
        <div className='TextBlockheading'>
            {heading}
        </div>
        <div className='TextBlockbody'>
            {body}
        </div>
    </div>)
}
export default function AboutUs(){
    return(
        <div className='body'>
            <div id='partone'>
                <TextBlock heading="About us" body="BSW (Board for Student Welfare) is primarily a student body consisting of student representatives from each hostel and a few faculty members. The Board has been constituted to formulate various welfare initiatives, organise social events and provide mentorship to students across multiple domains. Our work includes giving financial help, informative sessions, counselling, mentorship, etc."/>
            </div>
            <hr className='hr'/>
            <div id='parttwo'>
                <TextBlock heading="About us" body="BSW (Board for Student Welfare) is primarily a student body consisting of student representatives from each hostel and a few faculty members. The Board has been constituted to formulate various welfare initiatives, organise social events and provide mentorship to students across multiple domains. Our work includes giving financial help, informative sessions, counselling, mentorship, etc."/>
            </div>
            <hr className='hr'/>
            <div id='partthree'>
                <TextBlock heading="About us" body="BSW (Board for Student Welfare) is primarily a student body consisting of student representatives from each hostel and a few faculty members. The Board has been constituted to formulate various welfare initiatives, organise social events and provide mentorship to students across multiple domains. Our work includes giving financial help, informative sessions, counselling, mentorship, etc."/>
            </div>
        </div>
    );
}