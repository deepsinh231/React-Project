// import React from 'react';
import { useState } from 'react';

const Coutomhoks = (inp, err) => {
    const [input, setinput] = useState(inp)
    const [error, seterror] = useState(err)
    function Hedalchang(e)  {
        setinput((input)=>({...input,[e.target.name]:e.target.value}))
        if(e.target.name == e.target.name){
            if(e.target.value ==""){
                seterror({...error,UsernameError:"colored"})
            }else{
                seterror({...error,UsernameError:""})
            }
        }
    }
    return {input,
        Hedalchang,
        error
    }
};

export default Coutomhoks;