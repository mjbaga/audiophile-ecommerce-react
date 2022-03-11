import { useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import TextBoxInput from "components/form/TextBoxInput";
import { Fragment, useState } from "react";
import CODImage from "assets/images/shared/desktop/cod.svg";
import { currencyFormat } from "utils/CustomFunctions";
import Button from "components/common/Button";
import { closeOverlay } from 'store/ui-slice';
// import { clearCart } from "store/cart-slice";
import ConfirmationModal from "components/form/ConfirmationModal";

const Checkout = () => {
  const [showModal, setShowModal] = useState(false);
  const cart = useSelector((state) => state.cart);
  const { items, totalCartPrice, shippingCost } = cart;
  const [paymentMethod, setPaymentMethod] = useState("E-money");
  const [formIsValid, setFormIsValid] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);  

  const dispatch = useDispatch();

  useEffect(()=> {
    dispatch(closeOverlay());
  },[dispatch]);
  
  const nameRef = useRef(),
        emailRef = useRef(),
        phoneNumberRef = useRef(),
        addressRef = useRef(),
        zipRef = useRef(),
        cityRef = useRef(),
        countryRef = useRef(),
        emoneyRef = useRef(),
        emoneyPinRef = useRef();

  const checkFormValidity = () => {

    const baseCheck = nameRef.current.isValid && 
                      emailRef.current.isValid && 
                      phoneNumberRef.current.isValid && 
                      addressRef.current.isValid && 
                      zipRef.current.isValid && 
                      cityRef.current.isValid && 
                      countryRef.current.isValid;

    return paymentMethod === "E-money" ? baseCheck && emoneyRef.current.isValid && emoneyPinRef.current.isValid : baseCheck;
  }

  const resetInputs = () => {
    nameRef.current.reset(); 
    emailRef.current.reset(); 
    phoneNumberRef.current.reset(); 
    addressRef.current.reset(); 
    zipRef.current.reset(); 
    cityRef.current.reset(); 
    countryRef.current.reset();

    if(paymentMethod === "E-money") {
      emoneyRef.current.reset();
      emoneyPinRef.current.reset();
    }
  }

  const paymentHandler = (e) => {
    setPaymentMethod(e.target.value);
  }

  const submitHandler = (e) => {
    e.preventDefault();

    const validForm = checkFormValidity();

    setFormSubmitted(true);
    setFormIsValid(validForm);

    if(validForm) {
      setShowModal(true);
      // resetInputs();
    }
  }

  const computedTotal = totalCartPrice > 0 ? (totalCartPrice + (totalCartPrice * 0.2) + shippingCost) : 0;

  const nameValidation = (value) => {
    return value.trim() !== '' && /^([A-Z][a-z]+([ ]?[a-z]?['-]?[A-Z][a-z]+)*)$/g.test(value);
  }

  return (
    <Fragment>
      {showModal && <ConfirmationModal total={computedTotal} items={items} />}
      <div className="bg-darkgray pt-8 pb-16 relative">
        <section className="overflow-hidden lg:my-20">
          <div className="container mx-auto px-5 lg:px-0">
            <form onSubmit={submitHandler} className="grid lg:grid-cols-checkout gap-4">
              {/* Form row */}
              <div className="rounded-lg bg-white px-4 py-8 md:px-8 lg:row-span-2">
                <h1 className="uppercase leading-10 text-xl my-4 tracking-ap-1 font-bold md:leading-15 md:text-2xl lg:text-3xl">Checkout</h1>
                <div className="inputs">
                  <h2 className="text-xs text-primary uppercase tracking-ap-1 font-bold">Billing Details</h2>
                  <div className="grid md:grid-cols-2 gap-x-4">
                    <TextBoxInput 
                      ref={nameRef} 
                      name="fullname" 
                      label="Name" 
                      type="text" 
                      placeholder="Alexei Ward" 
                      validationCallback={nameValidation}
                      errorMsg="Please enter a valid name."
                    />
                    <TextBoxInput 
                      ref={emailRef} 
                      name="email" 
                      label="Email Address" 
                      type="email" 
                      placeholder="alexei@mail.com" 
                      validationCallback={(value) => /\b[\w-]+@[\w-]+\w{2,4}\b/gi.test(value)}
                      errorMsg="Please enter a valid email."
                    />
                    <TextBoxInput 
                      ref={phoneNumberRef} 
                      name="phonenumber" 
                      label="Phone Number" 
                      type="text" 
                      placeholder="+1 202-555-0136" 
                      validationCallback={(value) => /(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})/gi.test(value)}
                      errorMsg="Please enter a valid phone number."
                    />
                  </div>
                  <h2 className="text-xs text-primary uppercase tracking-ap-1 mt-8 font-bold">Shipping Info</h2>
                  <div className="grid md:grid-cols-2 gap-x-4">
                    <TextBoxInput 
                      ref={addressRef} 
                      name="address" 
                      label="Your Address" 
                      type="text" 
                      placeholder="1137 Williams Avenue" 
                      classes="md:col-span-2" 
                      validationCallback={(value) => value.trim() !== ''}
                      errorMsg="Please enter a valid address."
                    />
                    <TextBoxInput 
                      ref={zipRef} 
                      name="zip" 
                      label="ZIP Code" 
                      type="number" 
                      placeholder="10001" 
                      validationCallback={(value) => /[0-9]{5}(-[0-9]{4})?/g.test(value)}
                      errorMsg="Please enter a valid zip code."
                    />
                    <TextBoxInput 
                      ref={cityRef} 
                      name="city" 
                      label="City" 
                      type="text" 
                      placeholder="New York" 
                      validationCallback={nameValidation}
                      errorMsg="Please enter a valid city."
                    />
                    <TextBoxInput 
                      ref={countryRef} 
                      name="country" 
                      label="Country" 
                      type="text" 
                      placeholder="United States" 
                      validationCallback={nameValidation}
                      errorMsg="Please enter a valid country."
                    />
                  </div>
                  <h2 className="text-xs text-primary uppercase tracking-ap-1 mt-8 font-bold">Payment Details</h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    <label htmlFor="payment-method" className="text-[12px] font-bold tracking-tight my-1 row-span-2">Payment Method</label>
                    <div className="rounded-lg border border-bordergray p-4 text-sm text-black/50 leading-3 flex gap-4">
                      <input 
                        id="radio-emoney" 
                        type="radio" 
                        name="payment-method" 
                        value="E-money" 
                        onChange={paymentHandler} 
                        checked={paymentMethod === "E-money"} 
                        className="cursor-pointer"
                      />
                      <label htmlFor="radio-emoney" className="font-bold tracking-tighter text-black cursor-pointer">
                        e-Money
                      </label>
                    </div>
                    <div className="rounded-lg border border-bordergray p-4 text-sm text-black/50 leading-3 flex gap-4">
                      <input 
                        id="radio-cod" 
                        type="radio" 
                        name="payment-method" 
                        value="Cash on Delivery" 
                        onChange={paymentHandler} 
                        checked={paymentMethod === "Cash on Delivery"} 
                        className="cursor-pointer"
                      />
                      <label htmlFor="radio-cod" className="font-bold tracking-tighter text-black cursor-pointer">
                        Cash on Delivery
                      </label>
                    </div>
                    {paymentMethod === "E-money" && (
                      <Fragment>
                        <TextBoxInput 
                          ref={emoneyRef} 
                          name="emoney-number" 
                          label="e-Money Number" 
                          type="number" 
                          placeholder="238521993" 
                          validationCallback={(value) => /^(\d{9})$/g.test(value)}
                          errorMsg="Please enter a valid e-Money number."
                        />
                        <TextBoxInput 
                          ref={emoneyPinRef} 
                          name="emoney-pin" 
                          label="e-Money Pin" 
                          type="number" 
                          placeholder="6891" 
                          validationCallback={(value) => /^(\d{4}|\d{6})$/g.test(value)}
                          errorMsg="Please enter a valid e-Money pin."
                        />
                      </Fragment>
                    )}
                    {paymentMethod === "Cash on Delivery" && (
                      <div className="flex gap-4 md:col-span-2 my-4">
                        <img src={CODImage} alt="Cash on Delivery" className="px-4" />
                        <p className="text-black/50">The ‘Cash on Delivery’ option enables you to pay in cash when our delivery courier arrives at your residence. Just make sure your address is correct so that your order will not be cancelled.</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="rounded-lg bg-white px-4 py-8 md:px-8">
                <h2 className="text-md uppercase font-bold">Summary</h2>
                <ul>
                  {items.map((item) => (
                    <li className="flex justify-between gap-4 my-6" key={item.id}>
                      <div className="max-w-[64px] relative rounded-lg overflow-hidden">
                        <img src={item.image} alt={item.name} classes="w-full" />
                      </div>
                      <div className="flex flex-col w-1/2 grow justify-center text-left justify-self-start">
                        <p className="font-bold uppercase">{item.name}</p>
                        <p className="font-bold uppercase text-black/50">{currencyFormat(item.price)}</p>
                      </div>
                      <p className="text-black/50 font-bold">x{item.quantity}</p>
                    </li>
                  ))}
                </ul>
                <div className="totals flex flex-col">
                  <div className="flex justify-between">
                    <p className="uppercase text-black/50">Total</p>
                    <p className="uppercase text-black font-bold">{currencyFormat(totalCartPrice)}</p>
                  </div>
                  <div className="flex justify-between">
                    <p className="uppercase text-black/50">Shipping</p>
                    <p className="uppercase text-black font-bold">{currencyFormat(shippingCost)}</p>
                  </div>
                  <div className="flex justify-between">
                    <p className="uppercase text-black/50">VAT (Included 20%)</p>
                    <p className="uppercase text-black font-bold">{currencyFormat((totalCartPrice * 0.2))}</p>
                  </div>
                  <div className="flex justify-between mt-8">
                    <p className="uppercase text-black/50">Grand total</p>
                    <p className="uppercase font-bold text-primary">{currencyFormat(computedTotal)}</p>
                  </div>
                  <Button type="button" classes="my-4 text-white bg-primary lg:ml-0 hover:bg-secondary text-xs font-normal">Continue & Pay</Button>
                  {(!formIsValid && formSubmitted) && <p className='text-red-500 text-sm mt-4'>There may be one or more incorrect entries on your form. Please check again.</p> }
                </div>
              </div>
            </form>
          </div>
        </section>
      </div>
    </Fragment>
    
  )
}

export default Checkout;