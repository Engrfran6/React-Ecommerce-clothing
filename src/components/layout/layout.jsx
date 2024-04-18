import {CartIcon} from '../cart-icon/cart-icon';
import {Footer} from '../footer/footer';
import {NavbarBottom} from '../navbar-bottom/navbar-bottom';
import {Navbar} from '../navbar/navbar';
import {Sidebar} from '../sidebars/home/sidebar';

import './layout.scss';

export const Layout = ({children}) => {
  return (
    <div>
      <Navbar />
      <NavbarBottom />
      <div className="content-wrapper">
        <main>{children}</main>

        <aside>
          <Sidebar />
        </aside>
      </div>
      <Footer />
    </div>
  );
};
