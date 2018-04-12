import React from 'react';

export const LoginFormErrors = ({loginFormErrors}) => 
    <div className='formErrors'>
        {Object.keys(loginFormErrors).map((fieldName, i) => {
            if (loginFormErrors[fieldName].length > 0) {
                return (
                    <p key={i}>{fieldName} {loginFormErrors[fieldName]}</p>
                )
            } else {
                return '';
            }
        })}
    </div>