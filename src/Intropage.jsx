import { useState } from 'react';
import emailjs from 'emailjs-com';

const Intropage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  
  const sendEmail = (e) => {
    e.preventDefault();

    // Send the email using emailjs
    const templateParams = {
      from_name: name,
      from_email: email,
      message: phoneNumber,
      reply_to:email,
    };
    emailjs.send('service_pcbyxtd', 'template_00bdme6', templateParams, 'P9v_efx_4gD6lyTT4')
      .then((result) => {
        console.log(result.text);
        alert('email sent')
      }, (error) => {
        console.log(error.text);
      });

    // Clear the form fields
    setName('');
    setEmail('');
    setPhoneNumber('');
  };

  return (
    <div className=" bg-cover bg-no-repeat bg-center h-fit " style={{ 
      backgroundImage: "url('https://images.livspace-cdn.com/w:1920/plain/https://d3gq2merok8n5r.cloudfront.net/img/landingpages/full-home-interiors/Edge_New/new-folder-1657193933-8Jkh5/1440x730-1657194139-erPsT.jpg')", 
    }}>
      <div className="justify-center p-20 flex flex-col md:flex-row sm:flex-row">
        <div className="mr-[8rem] text-white">
          <h1 className="text-5xl font-bold font-sans">Bring home beautiful</h1>
          <h1 className="text-5xl font-bold mt-3">interiors <span className="text-amber-500">that fit your</span></h1>
          <h1 className="text-5xl font-bold mt-3 text-amber-500">budget</h1>
          <h2 className="mt-3 text-2xl">Experience unmatched quality & timely delivery with Livspace</h2>
        </div>
        <div className="h-[35rem] w-[35rem] order-2 md:order-1 flex flex-col">
          <form onSubmit={sendEmail} >
            <div className="flex flex-col bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 p-4">
                <strong class>Designs For Every Budget</strong>
                <div className="mb-4 mt-3">
                    <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)}/>
                </div>
                <div className='b'>
                  <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
            <input type="tel" placeholder="Phone Number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
            <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Intropage;
