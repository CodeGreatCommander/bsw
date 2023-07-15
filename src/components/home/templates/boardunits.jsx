import './boardunits.css'
import taskcompleted from '../../../assets/taskcompleted.svg'

function Card(){
    return(<div className='Card align'>
        <div >
            <img id='image' src={taskcompleted}/>
        </div>
        <div id='heading'>
        OPERATIONS
        </div>
        <div id='text' className='text-gradient-opacity'>
        The operations committee executes welfare activities and provides assistance (financial and in kind) to the students in need. It also looks over SCOOPS, SCS and STIC which is an integral part of BSW. Our activities include smooth induction of the orientation process, setting up of various camps such as cycle camp, book camp, etc., conducting informative sessions and collaborative events, organising Convergenz (annual)
        </div>
    </div>)
}
export default function BoardUnits(){
    return(<div className='containerboardunits'>
        <div className='outerboardunits'>
            <div className='boardunitstextcoantianer'>
                <h1 id='boardunitstext'>BOARD UNITS</h1>
            </div>
            <div className='innerboardunits'>
                <div className=''><Card/></div>
                <div className=''><Card/></div>
                <div className=''><Card/></div>
            </div>
        </div>
    </div>)
}