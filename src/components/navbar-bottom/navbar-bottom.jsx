import {FaGripLines} from 'react-icons/fa6';
import {FiSearch} from 'react-icons/fi';
import {FaUserCheck, FaUserAltSlash} from 'react-icons/fa';
import {FaCartArrowDown} from 'react-icons/fa6';
import {FcLike} from 'react-icons/fc';
import './navbar-bottom.scss';
import {useSelector} from 'react-redux';
import {selectUser} from '../../redux/selectors/selector';
import {useState} from 'react';
import {cartSelectors} from '../../redux/features/cartSlice/cartSlice';
import {RxCross2} from 'react-icons/rx';
import {TiArrowSortedDown, TiArrowSortedUp} from 'react-icons/ti';
import {useNavigate} from 'react-router-dom';
import {CartIcon2} from '../cart-icon2/cart-icon2';

export const NavbarBottom = () => {
  const totalCartItems = useSelector(cartSelectors.selectTotalItems);
  const currentUser = useSelector(selectUser);
  const [toggle, setToggle] = useState(true);
  const [toggle2, setToggle2] = useState(true);
  const navigate = useNavigate();

  return (
    <div className="navbar-bottom_container">
      <div className="navbar_bottom-left">
        <span onClick={() => setToggle2(!toggle2)}>{toggle2 ? <FaGripLines /> : <RxCross2 />}</span>
        <ul style={{display: toggle2 ? 'none' : 'block'}}>
          <li>Smartphones</li>
          <li>Electronics</li>
          <li>Machine</li>
          <li>Clothes</li>
          <li>Kids wares</li>
        </ul>

        <span>Shop by category</span>
      </div>
      <div className="navbar_bottom-center">
        <span>
          <input type="text" placeholder="Search your products here" />
        </span>
        <span>
          <FiSearch />
        </span>
      </div>
      <div className="navbar_bottom-right">
        <span>
          <span>
            {currentUser ? (
              <FaUserCheck style={{color: 'green'}} />
            ) : (
              <FaUserAltSlash style={{color: 'red'}} />
            )}
          </span>
          <span>
            <span onClick={() => setToggle(!toggle)}>
              {toggle ? <TiArrowSortedDown /> : <TiArrowSortedUp />}
            </span>
            <ul style={{display: toggle ? 'none' : 'block'}}>
              <li>SignIn</li>
              <li>Register</li>
              <li>Profile</li>
            </ul>
          </span>
        </span>
        <CartIcon2 totalCartItems={totalCartItems} />

        <span>
          <FcLike />
        </span>
      </div>
    </div>
  );
};
