import React from 'react'
import { LinkedIn , Facebook , Insta} from 'src/datas/images/CommonSvg'
import Message from 'src/assets/Group.png'
import './contact.scss'

const Contact = () => {
    return (
        <>
            {/* <div className='contact-container'>
                <div className='contact-row'>
                    <div className='contact-col1'>
                        <h3>Any Questions? Lets Talk.</h3>
                        <p>Contact our team to get the assistance and answers you’re
                            looking for.</p>
                    </div>
                    <div className='contact-col2'>
                        <h3>Any Questions? Lets Talk.</h3>
                        <p>Contact our team to get the assistance and answers you’re
                            looking for.</p>
                    </div>
                </div>
            </div> */}
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                    <h3>Any Questions? Lets Talk.</h3>
                        <p>Contact our team to get the assistance and answers you’re
                            looking for.</p>
                    </div>
                    <div className="col-lg-6">
                        <div className="row text-center">
                            <div className="col-lg-4">
                            <img src={Message} alt="Start Message" />
                        <p>Start Chat</p>
                            </div>
                            <div className="col-lg-4">
                            <img src={Message} alt="Start Message" />
                        <p>Connect With</p>
                        <div className="d-flex gap-1 justify-content-center align-items-center">
                        <LinkedIn width={18} height={18} fill='#000000' />
                        <Facebook width={18} height={18} fill='#000000'/>
                        <Insta width={18} height={18} fill='#000000'/>
                        </div>
                            </div>
                            <div className="col-lg-4">
                            <img src={Message} alt="Start Message" />
                        <p>Call</p>
                        <span>+9779865XXXXXX</span>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact