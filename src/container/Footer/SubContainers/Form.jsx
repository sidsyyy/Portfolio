import React, { useState } from 'react';
import '../Footer.scss';
import { client } from '../../../client';


function Form() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);


    const handleChangeInput = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };


    const handleSubmit = () => {
        setLoading(true);

        const contact = {
            _type: 'contact',
            name: formData.name,
            email: formData.email,
            message: formData.message,
        };

        client.create(contact)
            .then(() => {
                setIsFormSubmitted(true);
                setLoading(false);
            })
            .catch((err) => console.log(err.message));
    };



    return (
        <>
            {!isFormSubmitted ? (

                <div className="app__footer-form app__flex curvy-border">
                    <div className="app__flex curvy-border">
                        <input 
                            autoComplete='none'
                            className="p-text curvy-border"
                            type="text"
                            placeholder="Your Name"
                            name="name"
                            value={formData.name}
                            onChange={handleChangeInput} 
                        />
                    </div>

                    <div className="app__flex curvy-border">
                        <input 
                            autoComplete='none'
                            className="p-text curvy-border"
                            type="email"
                            placeholder="Your Email"
                            name="email"
                            value={formData.email}
                            onChange={handleChangeInput} 
                        />
                    </div>

                    <div className='app__flex curvy-border'>
                        <textarea
                            autoComplete='none'
                            className="p-text curvy-border"
                            placeholder="Your Message..."
                            value={formData.message}
                            name="message"
                            onChange={handleChangeInput}
                        />
                    </div>

                    <button 
                        disabled={loading} 
                        type="button" 
                        className="p-text curvy-border" 
                        onClick={handleSubmit}
                    >
                        {!loading ? 'Send Message' : 'Sending...'}
                    </button>
                    
                </div>
            ) : (
                <div className='app__footer-form'>
                    <h2 className="head-text">
                        Thank you for getting in touch!
                    </h2>
                </div>
            )
            }
        </>
    );
};



export default Form;