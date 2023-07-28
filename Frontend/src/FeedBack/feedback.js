import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addFeedback } from '../FeedBack/feedBackApi';
import '../FeedBack/feedBack.css';
import SidebarVoter from '../components/sidebarVoter';
import { Link } from 'react-router-dom';
const FeedBack = () => {
    const [formdata, setFormdata] = useState({
        email: '',
        name: '',
        subject: '',
        message: ''

    })
    const navigate = useNavigate();
    const handleChange = (e) => {
        e.preventDefault();
        setFormdata({ ...formdata, [e.target.id]: e.target.value })
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await addFeedback(formdata);
            navigate('/sign-in')
        }
        catch (error) {
            console.log(error);
        }

        console.log(formdata);
    }

    return (
        <SidebarVoter>
        <div className='feedback'>
            <div className="down">
                <div className="login-form">
                    <h2>FEEDBACK</h2>
                    <form onSubmit={handleSubmit}>
                        <input
                            className='feedinput'
                            type="email"
                            placeholder="Email"
                            id="email"
                            onChange={handleChange}
                            required
                        />
                        <input
                            className='feedinput'
                            type="name"
                            placeholder="Name"
                            id="name"
                            onChange={handleChange}
                        />
                        <input
                            className='feedinput'
                            type="name"
                            placeholder="Department"
                            id="subject"
                            onChange={handleChange}
                        />
                        <input
                            className='feedinput'
                            type="name"
                            placeholder="Comment"
                            id="message"
                            onChange={handleChange}
                            required
                        />
                      
                <Link to="/" ><button className='feedbutton' type="submit" id='fb'>Submit</button></Link>
                    </form>
                </div>
            </div>
        </div>
        </SidebarVoter>
    );
};

export default FeedBack;