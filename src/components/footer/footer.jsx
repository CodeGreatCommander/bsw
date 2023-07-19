import './footer.css'
import logo from '../../assets/Logo.svg'
import call from '../../assets/call.svg'
import mail from '../../assets/mail.svg'
import facebook from '../../assets/facebook.svg'
import linkedin from '../../assets/linkedin.svg'
import instagram from '../../assets/instagram.svg'

export default function Footer(){
    return(<div className='outerfooter'>
        <div id="footer">
            <div id="left">
                <div id="logo">
                    <img src={logo}  style={{height:'max-content',width:'17vw'}}/>
                </div>
                <div className='text bswintro'>
                Board of student welfare,<br/>
                Indian Institute of Delhi.
                </div>
                <div className='row'>
                    <div className='col-3'>
                        <img src={call} className='images'/>
                    </div>
                    <div className='col text'>
                    <span style={{color:'black'}}>+91</span> 10000 100000,<br/>
                    <span style={{color:'black'}}>+91</span> 010101 0101010.
                    </div>
                </div>
                <div className='row'>
                    <div className='col-2'>
                        <img src={mail} className='images'/>
                    </div>
                    <div className='col text'>
                    BSWboard<span style={{color:'black'}}>@email.com</span> 
                    </div>
                </div>
                
            </div>
            <div id="right" className='row mt-5 pt-3'>
                <div className='col'>
                    <ul className='list-unstyled '>
                        <li className='text li heading'>Useful Links</li>
                        <li className='text li'><a href="#">Contact us</a></li>
                        <li className='text li'><a href="#">Your Dost</a></li>
                        <li className='text li'><a href="#">Webmail</a></li>
                        <li className='text li'><a href="#">Moodle</a></li>
                        <li className='text li'><a href="#">Helpline</a></li>
                    </ul>
                </div>
                <div className='col-sm'>
                    <ul className='list-unstyled'>
                        <li className='text li heading'>Quick Links</li>
                        <li className='text li'><a href="#">E-academics</a></li>
                        <li className='text li'><a href="#">Your Dost</a></li>
                        <li className='text li'><a href="#">Webmail</a></li>
                        <li className='text li'><a href="#">Moodle</a></li>
                        <li className='text li'><a href="#">Helpline</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div className='row d-flex justify-content-start'>
        <img src={facebook}className='contactusfooter'/>
        <img src={linkedin}className='contactusfooter'/>
        <img src={instagram}className='contactusfooter'/>
    </div></div>
    )
}