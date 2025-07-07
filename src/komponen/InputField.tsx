import { useState } from "react";
import React from "react";

interface InputFieldProps {
    type: string;
    placeholder: string;
    icon: string;
    value:string;
    onChange: (e:React.ChangeEvent<HTMLInputElement>) => void;
}

function InputField({ type, placeholder, icon, value, onChange}:InputFieldProps) {
    const [isPasswordShown, setIsPasswordShown] = useState(false);
    
    return (
        <div className="input-wrapper">
            <input 
                type={isPasswordShown ? 'text' : type} 
                placeholder={placeholder}  
                className="input-field" 
                required 
                value={value}
                onChange={onChange}
            />
            <i className='material-symbols-rounded'>{icon}</i>
            {type === 'password' && (
                <i onClick={() => setIsPasswordShown(prevState => !prevState)} className='material-symbols-rounded eye-icon'>
                    {isPasswordShown ? 'visibility' : 'visibility_off'}
                </i>
            )}
        </div>
        
    );
}

export default InputField