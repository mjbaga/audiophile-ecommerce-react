import { Link } from 'react-router-dom';
import ConditionalWrapper from 'utils/ConditionalWrapper';

const Button = ({ to, classes="", children, type='anchor', disabled=false, onButtonClick }) => {
  const defaultClasses = `btn uppercase px-6 py-3 duration-300 transition cursor-pointer tracking-ap-1 ${classes}`;

  return (
    <ConditionalWrapper
      condition={type === 'anchor'}
      wrapperTrue={children => 
        <Link to={to} className={defaultClasses}>
          {children}
        </Link>}
      wrapperFalse={children => 
        <button className={defaultClasses} disabled={disabled} onClick={onButtonClick}>{children}</button>}
    >
      {children}
    </ConditionalWrapper>
  )
  
}

export default Button;