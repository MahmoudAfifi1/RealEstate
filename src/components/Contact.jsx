import React, { useState } from 'react'

export const Contact = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");

        // تحقق من البيانات
        if (!formData.name || !formData.email || !formData.phone || !formData.message) {
            setResult("Please fill in all fields");
            return;
        }

        // استخدام JSON بدلاً من FormData
        const submitData = {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            message: formData.message,
            access_key: "7c0de473-8bb8-4943-b8b7-b272915fb6fd"
        };

        try {
            console.log("Sending data:", submitData);

            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(submitData)
            });

            console.log("Response status:", response.status);
            const data = await response.json();
            console.log("Response data:", data);

            if (data.success) {
                setResult("Form Submitted Successfully");
                setFormData({ name: '', email: '', phone: '', message: '' });
            } else {
                console.log("Error", data);
                setResult(data.message || "Failed to submit form");
            }
        } catch (error) {
            console.log("Network Error", error);
            setResult("Network error. Please check your connection and try again.");
        }
    };







    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    })

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Form submitted:', formData)
        // هنا يمكنك إضافة منطق إرسال البيانات
        alert('Thank you for your message! We will get back to you soon.')
    }

    return (
        <div className='w-full min-h-screen bg-white flex items-center justify-center py-20' id='Contact'>
            <div className='w-full max-w-2xl mx-auto px-6'>
                <h1 className='text-4xl font-bold text-black mb-2 text-center'>
                    Contact With Us
                </h1>
                <p className='text-center text-gray-500 mb-12 text-lg'>
                    Ready to Make a Move? Let's Build Your Future Together
                </p>

                <form onSubmit={onSubmit} className='space-y-6'>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                        <div>
                            <label className='block text-sm font-medium text-gray-700 mb-2'>Your Name</label>
                            <input
                                className='w-full border border-gray-300 rounded-lg py-3 px-4 bg-white focus:outline-none focus:border-gray-400'
                                type="text"
                                placeholder='Your Name'
                                name='name'
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div>
                            <label className='block text-sm font-medium text-gray-700 mb-2'>Your Email</label>
                            <input
                                className='w-full border border-gray-300 rounded-lg py-3 px-4 bg-white focus:outline-none focus:border-gray-400'
                                type="email"
                                placeholder='Your Email'
                                name='email'
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>

                    <div>
                        <label className='block text-sm font-medium text-gray-700 mb-2'>Phone Number</label>
                        <input
                            className='w-full border border-gray-300 rounded-lg py-3 px-4 bg-white focus:outline-none focus:border-gray-400'
                            type="tel"
                            placeholder='Your Phone Number'
                            name='phone'
                            value={formData.phone}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div>
                        <label className='block text-sm font-medium text-gray-700 mb-2'>Message</label>
                        <textarea
                            className='w-full border border-gray-300 rounded-lg py-3 px-4 bg-white focus:outline-none focus:border-gray-400 h-32 resize-none'
                            placeholder='Message'
                            name='message'
                            value={formData.message}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <button
                        type='submit'
                        className='w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300'
                    >
                        Send Message
                    </button>

                    {result && (
                        <div className={`text-center py-2 px-4 rounded-lg ${result.includes('Successfully')
                            ? 'bg-green-100 text-green-700'
                            : 'bg-red-100 text-red-700'
                            }`}>
                            {result}
                        </div>
                    )}
                </form>
            </div>
        </div>
    )
}
