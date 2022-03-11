

const TextBoxInput = ({ name, label, type, classes="", placeholder="" }) => {

  return (
    <div className={`form-control flex flex-col mt-3 ${classes}`}>
      <label htmlFor={name} className="text-[12px] font-bold tracking-tight my-1">{label}</label>
      <input 
        name={name} 
        type={type} 
        className="rounded-lg border border-bordergray p-4 text-sm text-black/50 leading-3" 
        placeholder={placeholder} 
      />
    </div>
  )
}

export default TextBoxInput;