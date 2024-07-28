import React from 'react';

const Contact = () => {

    return (
        <div id='contact' className='max-w-[1040px] m-auto md:pl-20 p-4 py-14'>
            <h1 className='py-4 text-4xl font-bold text-center text-[#001b5e]'>Contact</h1>
            <form action="https://getform.io/f/warkvywb" method="POST">
                <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                    <div className='flex flex-col'>
                        <label  className='uppercase text-sm py-2'> Name</label>
                        <input className='border-2 rounded-lg p-3 flex border-gray-300' placeholder="Name" type='text' name='name'></input>
                    </div>
                    <div className='flex flex-col'>
                        <label className='uppercase text-sm py-2'> Phone</label>
                        <input id='phone' className='border-2 rounded-lg p-3 flex border-gray-300' placeholder="Phone" type='text' name='phone'></input>
                    </div>
                    <div className='flex flex-col py-2'>
                        <label className='uppercase text-sm py-2'> Email</label>
                        <input className='border-2 rounded-lg p-3 flex border-gray-300' placeholder="Email" type='text' name='email'></input>
                    </div>
                    <div className='flex flex-col py-2'>
                        <label  className='uppercase text-sm py-2'> Subject</label>
                        <input className='border-2 rounded-lg p-3 flex border-gray-300' placeholder="Subject" type='text' name='subject'></input>
                    </div>
                    <div className='flex flex-col py-2'>
                        <label className='uppercase text-sm py-2'> Message</label>
                        <textarea id='message' className='border-2 rounded-lg p-3 flex border-gray-300' placeholder="Message" rows={10} name='message'></textarea>
                    </div>
                </div>
                <button className='bg-[#001b5e] text-gray-100 mt-4 w-full p-4 rounded-lg'>Submit</button>
            </form> 
        </div>
    );
  
};

export default Contact;
