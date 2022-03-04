const ConditionalWrapper = ({ condition, wrapperTrue, wrapperFalse, children })=> condition ? wrapperTrue(children) : wrapperFalse(children);

export default ConditionalWrapper;