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

                <div className="app__footer-form app__flex">
                    <div className="app__flex">
                        <input className="p-text"
                            type="text"
                            placeholder="Your Name"
                            name="name"
                            value={formData.name}
                            onChange={handleChangeInput} />
                    </div>

                    <div className="app__flex">
                        <input className="p-text"
                            type="email"
                            placeholder="Your Email"
                            name="email"
                            value={formData.email}
                            onChange={handleChangeInput} />
                    </div>

                    <div className='app__flex'>
                        <textarea
                            className="p-text"
                            placeholder="Your Message..."
                            value={formData.message}
                            name="message"
                            onChange={handleChangeInput}
                        />
                    </div>

                    <button disabled={loading} type="button" className="p-text" onClick={handleSubmit}>{!loading ? 'Send Message' : 'Sending...'}</button>
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