import React, { useState } from 'react';

import { Link,useNavigate} from 'react-router-dom';
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";


const Register = () => {

    const navigate = useNavigate();

    // const [valuesreg,setValues] = useState({
    //     email:"",
    //     password:""
    // });

    // const [validationclick,setvalidationclick] = useState(false);
    // const [confirmed,setconfirmed] = useState(false);

    // const handelchange =(e) => {
    //     const {name,value} = e.target
    //     setValues({
    //         ...valuesreg,
    //         [name]:value
    //     })
    //     console.log("les valeus is her",valuesreg)
    // }

    // const generateError = (error) =>
    // toast.error(error, {
    //   position: "top-right",
    // });


    // const handelclick = (e) =>{
    //     e.preventDefault();
    //     setvalidationclick(true);
    //     setconfirmed(!confirmed);
    // }

    // useEffect(() => {
    //     if(validationclick) {
                        
    //         const { data } = axios.post('http://localhost:3001/register',valuesreg,{withCredentials:true})
    //         .then(response => setValues(response.data));
    //         setvalidationclick(true);
    //         console.log("post true")
    //         if(data){
    //             if (data.errors) {
    //                 const { email } = data.errors;
    //                 if (email) generateError(email);
    //             } 
    //         }
    //     }
    //     else{
    //         console.log("erreur")
    //     }
    // }, [confirmed]);


    
  const [values, setValues] = useState({ email: "", password: "" });

  const generateError = (error) =>
    toast.error(error, {
      position: "bottom-right",
    });
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:3001/register",
        {
          ...values,
        },
        { withCredentials: true }
      );
      if (data) {
        if (data.errors) {
            console.log("data errer",data.errors)
          const { email, password } = data.errors;
          if (email) generateError(email);
          else if (password) generateError(password);
        
        }
        else {
            console.log("redirect to ");
            navigate("/secret");
        }
      }
    } catch (ex) {
      console.log(ex);
    }
  };




   
    

    return (
        <div>
            <div className='register'>
                <h2>Register Account</h2>
                <form onSubmit={(e) => handleSubmit(e)}>

                    <div className='col-md-12 col-sm-12'>
                        <label for="Nom">Email</label><br/>   
                        <input type="text" name="email"    onChange={(e) =>setValues({ ...values, [e.target.name]: e.target.value })}/><br/> 
                        <br/>
                    </div>

                    <div className='col-md-12 col-sm-12'>
                        <label for="password">password</label><br/>   
                        <input type="text" name="password"  onChange={(e) =>setValues({ ...values, [e.target.name]: e.target.value })}/><br/> 
                        <br/>
                    </div>
                    <button type="submit">Submit</button>
                    <span>already have an avvount ? <Link to="/login" >Login</Link></span>
                </form>
                <ToastContainer />
            </div>
        </div>
    );
};

export default Register;