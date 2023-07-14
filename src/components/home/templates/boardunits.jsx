import './boardunits.css'
import taskcompleted from '../../../assets/taskcompleted.svg'

function Card(){
    return(<div className='Card align'>
        <div id='image'>
            <img src={taskcompleted}/>
        </div>
        <div id='heading'>
        OPERATIONS
        </div>
        <div id='text'>
        The operations committee executes welfare activities and provides assistance (financial and in kind) to the students in need. It also looks over SCOOPS, SCS and STIC which is an integral part of BSW. Our activities include smooth induction of the orientation process, setting up of various camps such as cycle camp, book camp, etc., conducting informative sessions and collaborative events, organising Convergenz (annual)
        </div>
    </div>)
}
export default function BoardUnits(){
    return(<Card/>)
}