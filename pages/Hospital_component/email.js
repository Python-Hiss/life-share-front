import React from 'react'
import emailjs from 'emailjs-com';
import axios from 'axios';
export default function Email() {
    const sendEmail =  async (e)=> {
    //     e.preventDefault();
    //     let arr = [{
    //         'name': 'ahmad',
    //         'email': 'Yasseenkouthe@ENG.HU.EDU.JO'
    //     }, {
    //         'name': 'Jammes',
    //         'email': 'koute47@gmail.com'
    //     } ]
        
    // var data = {
    //     service_id: 'service_3ywcai5',
    //     template_id: 'template_kz4wyy7',
    //     user_id: 'user_0EuDpkMo2DsYTJbm2k8fz',
    //     template_params:{}
    
    // };
   
    // try{
    //     arr.map(async (item)=>(
    //         data.template_params = item,
    //          await axios.post('https://api.emailjs.com/api/v1.0/email/send',data)
    //     ))
     
     
    // const send = await axios.post('https://api.emailjs.com/api/v1.0/email/send',data)
    
    //     console.log('ok');
    // } catch(error){
    //     console.log(error.text)
    // }
    // let data=[{
    //     name:'yaseen',
    //     email:'koute47@gmail.com'
    // },{
    //     name:'mohammed',
    //     email:'koute47@gmail.com'
    // }]
    
    
    //     emailjs.sendForm('service_3ywcai5', 'template_kz4wyy7', e.target, 'user_0EuDpkMo2DsYTJbm2k8fz')
    //       .then((result) => {
    //           console.log(result.text);
    //       }, (error) => {
    //           console.log(error.text);
    //       });
    //       e.target.reset()
      



      Email.send({
        Host : "smtp.elasticemail.com",
        Username : "koute47@gmail.com",
        Password : "977EA0A56B494C5B5E6FD823AD4265D0C93E",
        To : 'koute47@gmail.com',
        From : "Yasseenkouthe@ENG.HU.EDU.JO",
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
      message => console.log(message)
    );
    }
    return (
        <>
        {/* {data.map(item=>( */}

        <form onSubmit={sendEmail} className="tests">      
        <input name="name" type="text" class="feedback-input" placeholder="Name" value = '{item.name}'/>
        <input name="email" type="text" class="feedback-input" placeholder="Email" value = '{item.email}'/>
        <input type="submit" value="SUBMIT" className="formemail"/>
        </form>
        {/* )) */}
{/* } */}
</>
    )
}
