
import { useState ,useEffect} from 'react';
import axios from 'axios';
import Postapi from '../services/Postapi';

const ContactForm = (Validation) => {
    // const baseUrl = "http://localhost:3001/createContact";
    const [values, setvalues] = useState({
        nom:"",
        prenom:"",
        email:"",
        telephone:"",
        message:""
    });
    const [erreur, setErreur] = useState({});
    const [issubmited, setissubmited] = useState(false);
    const [istrue, setistrue] = useState(false);

    const onChangesInput = (e) => {
    const {name , value } = e.target;
    console.log(e.target.value);

        setvalues({
            ...values,
            [name]:value
        })
            console.log("setttttt",values)
    }


    const handelClick = (event)=>{
        event.preventDefault();
        setErreur(Validation(values));
        setissubmited(true);
    }
    

    useEffect(() => {
        if(issubmited){
            if(Object.keys(erreur).length === 0 ){
                setistrue(true);
                console.log("true is submited",Object.keys(erreur).length);
                console.log("valuesvaluesvalues",values);
                // const {data} = Postapi(baseUrl,values);
                axios.post('http://localhost:3001/createContact', values)
                .then(response => setvalues(response.data));
                
            
            }
            else{
                console.log("else is submited",Object.keys(erreur).length)
            }
        }
        
    }, [erreur]);

    


    return {onChangesInput,values,handelClick,erreur,issubmited,istrue}
};

export default ContactForm;