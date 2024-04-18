import {IoIosArrowForward} from 'react-icons/io';
import {TiArrowSortedUp, TiArrowSortedDown} from 'react-icons/ti';
import './sidebar.scss';
import {useState} from 'react';

export const Sidebar = () => {
  const [toggleArrow1, setToggleArrow1] = useState(false);
  const [toggleArrow2, setToggleArrow2] = useState(false);
  const [toggleArrow3, setToggleArrow3] = useState(false);
  const [toggleArrow4, setToggleArrow4] = useState(false);
  return (
    <div className="sidebar_container">
      <div className="sidebar_title">
        <h1>PRODUCTS</h1>
        <span>
          <IoIosArrowForward />

          <p>Shop</p>
        </span>
      </div>

      <div className="sidebar_content">
        <div>
          <div>
            <h2>Shop by Category</h2>
            <span onClick={() => setToggleArrow1(!toggleArrow1)}>
              {toggleArrow1 ? <TiArrowSortedUp /> : <TiArrowSortedDown />}
            </span>
          </div>
          <ul>
            <li>
              <input type="checkbox" />
              <span>Smartphones</span>
            </li>
            <li>
              <input type="checkbox" />
              <span>Electronics</span>
            </li>
            <li>
              <input type="checkbox" />
              <span>Machine</span>
            </li>
            <li>
              <input type="checkbox" />
              <span>Clothes</span>
            </li>
            <li>
              <input type="checkbox" />
              <span>Kids wares</span>
            </li>
          </ul>
        </div>
        <div>
          <div>
            <h2>Shop by Brand</h2>
            <span onClick={() => setToggleArrow2(!toggleArrow2)}>
              {toggleArrow2 ? <TiArrowSortedUp /> : <TiArrowSortedDown />}
            </span>
          </div>
          <ul>
            <li>
              <input type="checkbox" />
              <span>HP</span>
            </li>
            <li>
              <input type="checkbox" />
              <span>Apple</span>
            </li>
            <li>
              <input type="checkbox" />
              <span>Amazon</span>
            </li>
            <li>
              <input type="checkbox" />
              <span>Android</span>
            </li>
            <li>
              <input type="checkbox" />
              <span>Blackberry</span>
            </li>
          </ul>
        </div>
        <div>
          <div>
            <h2>Shop by Price</h2>
            <span onClick={() => setToggleArrow3(!toggleArrow3)}>
              {toggleArrow3 ? <TiArrowSortedUp /> : <TiArrowSortedDown />}
            </span>
          </div>
          <ul>
            <li>
              <input type="checkbox" />
              <span>50 - 100</span>
            </li>
            <li>
              <input type="checkbox" />
              <span>100 - 300</span>
            </li>
            <li>
              <input type="checkbox" />
              <span>300 - 600</span>
            </li>
            <li>
              <input type="checkbox" />
              <span>700 - 1000</span>
            </li>
            <li>
              <input type="checkbox" />
              <span>1000 - 2000</span>
            </li>
          </ul>
        </div>
        <div>
          <div>
            <h2>Shop by Color</h2>
            <span onClick={() => setToggleArrow4(!toggleArrow4)}>
              {toggleArrow4 ? <TiArrowSortedUp /> : <TiArrowSortedDown />}
            </span>
          </div>
          <ul>
            <li>
              <input type="checkbox" />
              <span>Smartphones</span>
            </li>
            <li>
              <input type="checkbox" />
              <span>Electronics</span>
            </li>
            <li>
              <input type="checkbox" />
              <span>Machine</span>
            </li>
            <li>
              <input type="checkbox" />
              <span>Clothes</span>
            </li>
            <li>
              <input type="checkbox" />
              <span>Kids wares</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
