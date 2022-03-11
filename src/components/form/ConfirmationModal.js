import checkImage from 'assets/images/shared/desktop/check.svg';
import Button from 'components/common/Button';
import Modal from 'components/layout/Modal';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { clearCart } from 'store/cart-slice';
import { currencyFormat } from 'utils/CustomFunctions';

const ConfirmationModal = ({ items, total }) => {
  const item = items[0];
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const clickHandler = () => {
    dispatch(clearCart());
    navigate('/', {replace: true});
  }

  return (
    <Modal>
      <img src={checkImage} alt="Check mark" />
      <h2 className="uppercase leading-10 text-xl my-4 tracking-ap-1 font-bold md:leading-15 md:text-2xl lg:text-3xl">
        Thank you<br />for your order
      </h2>
      <div className="flex bg-darkgray rounded-lg overflow-hidden my-8">

        <div className="basis-7/12 p-4">
          <div className="flex justify-between gap-2 basis-7/12 items-center">
            <div className="max-w-[64px] relative rounded-lg overflow-hidden">
              <img src={item.image} alt={item.name} classes="w-full" />
            </div>
            <div className="flex flex-col w-1/2 grow justify-center text-left justify-self-start basis-">
              <p className="font-bold uppercase">{item.name}</p>
              <p className="font-bold uppercase text-black/50">{currencyFormat(item.price)}</p>
            </div>
            <p className="text-black/50 font-bold">x{item.quantity}</p>
          </div>
          {items.length > 1 && (
            <div className="border-t border-gray-300 text-center pt-4 mt-4">
              <p className="font-bold text-black/50">and {items.length - 1} other item(s)</p>
            </div>)
          }
        </div>
        <div className="bg-black flex flex-col justify-center pl-8 py-4 grow basis-5/12">
          <p className="text-gray-400 uppercase">Grand total</p>
          <p className="text-white font-bold">{currencyFormat(total)}</p>
        </div>
      </div>
      <p className="text-black/50">You will receive an email confirmation shortly.</p>
      <Button type="button" onButtonClick={clickHandler} classes="mt-8 text-center text-white bg-primary lg:ml-0 hover:bg-secondary text-xs font-normal w-full">Back to home</Button>
    </Modal>
  )
}

export default ConfirmationModal;