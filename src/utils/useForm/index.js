import React,{useState} from 'react'

export const useForm =(initialValue)=>{
    const [values,setValues]=useState(initialValue)

    return[
        values,
        (formType,formValue)=>{
            if(formType =='reset'){
                return setValues({...values})
            }
            return (
                setValues({...values,[formType]:formValue})
            )
        }
    ]
}
