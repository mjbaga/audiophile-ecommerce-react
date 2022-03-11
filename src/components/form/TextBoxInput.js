import React, { useRef, useImperativeHandle } from 'react';
import useInput from "hooks/use-input";

const TextBoxInput = 
  React.forwardRef(({ 
    name, 
    label, 
    type, 
    classes="", 
    placeholder="", 
    validationCallback, 
    errorMsg="Input has an error." }, 
    ref) => {

  const inputRef = useRef();

  const {
    value,
    isValid: checkIsValid,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    reset,
  } = useInput(validationCallback);

  useImperativeHandle(ref, () => {
    return {
      reset: reset,
      isValid: checkIsValid
    };
  });

  return (
    <div className={`form-control flex flex-col mt-3 ${classes}`}>
      <label htmlFor={name} className="text-[12px] font-bold tracking-tight my-1">{label}</label>
      <input 
        ref={inputRef}
        name={name} 
        type={type} 
        className={`rounded-lg border p-4 text-sm text-black placeholder-gray-400 leading-3 ${hasError ? 'border-red-500' : 'border-bordergray'}`}
        placeholder={placeholder} 
        value={value}
        onChange={valueChangeHandler}
        onBlur={inputBlurHandler}
      />
      {hasError && (
        <p className='text-red-500 text-sm mt-2'>{errorMsg}</p>
      )}
    </div>
  )
});

export default TextBoxInput;