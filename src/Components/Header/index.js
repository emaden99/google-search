import '../../App.css';
import { Nav, NavItem, NavLink } from "reactstrap";


function Header() {
    return(<header className="header d-flex justify-content-end">
    <Nav>
      <NavItem >
        <NavLink className="underline text-dark" href="facebook.com" >Gmail</NavLink>
      </NavItem>
      <NavItem>
        <NavLink className="underline text-dark" href="facebook.com" >Images</NavLink>
        </NavItem>
        <NavItem>
          <NavLink >
          <span className="material-icons-outlined">
          <svg className="apps" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M11 18c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zm-2-8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 4c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
          </svg>
          </span>
        </NavLink>
        </NavItem>
        <NavItem>
          <NavLink>
          <span className="material-icons-round">
          <svg className="apps" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
            <path d="M0 0h24v24H0V0z" fill="none"/>
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
            </svg>
          </span>
          </NavLink>
        </NavItem>
      </Nav>  

  </header>
  )
}
export default Header;