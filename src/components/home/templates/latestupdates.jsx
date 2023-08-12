import './latestupdates.css'
import dropdown from '../../../assets/dropdown.svg'
import dropdownmobile from'../../../assets/dropdownmobile.svg'
import { useState } from 'react'
import { useEffect } from 'react'
function min(a,b){
    return a<b?a:b
}
function Text(props){
    const {date,month,text}=props;
    return(
        <div className='outer'>
            <div className='date'>
                <div className='number'>
                    {date}
                </div>
                <div className='month'>
                    {month}
                </div>
            </div>
            <div className='lubodytext'>
                {text}
                        </div>
        </div>
    )
}

export default function Latestupdates(){
    const temp=<Text date={22} month={"AUG"} text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. "}/>
    const ls=[temp,temp,temp,temp,temp,temp]
    const lowerquanity=window.innerWidth > 600?min(3,ls.length):min(1,ls.length);
    const upperquanity=window.innerWidth > 600?min(6,ls.length):min(3,ls.length);
    const [viewless,setviewless]=useState(true)
    const [list,setlist]=useState(ls.slice(0,lowerquanity))
    useEffect(()=>{
        if(viewless)setlist(ls.slice(0,lowerquanity))
        else setlist(ls.slice(0,upperquanity))
    },[viewless])
    return <div className='lumain'>
        <div className='align'>
            <span id="luheadertext">
            LATEST UPDATES
            </span>
        </div>
        <div className='align'>
        <hr className="dotted-hr" /></div>
        <div className='lubody'>
            {list}
        </div>
        <div className='align bgcolor-green' onClick={() => { setviewless(!viewless); }}>
  {window.innerWidth > 600 ? (
    viewless ? (
      <img src={dropdown} style={{ width: "1.6rem",height:"max-content"}} />
    ) : (
      <img src={dropdown} style={{ width: "1.6rem" ,height:"max-content",transform: "scaleY(-1)"}} />
    )
  ) : (
    <div className='mobileviewtext'>
      {viewless ? (
        <>
          MORE<img src={dropdownmobile} style={{ width: "1.6rem",height:"max-content"}} />
        </>
      ) : (
        <>
          LESS<img src={dropdownmobile} style={{ width: "1.6rem" ,height:"max-content",transform: "scaleY(-1)"}} />
        </>
      )}
    </div>
  )}
</div>
  </div>
}