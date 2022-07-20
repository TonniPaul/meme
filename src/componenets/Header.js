import logo from "../images/logo.svg";

function Header(){
   return (
      <header>
         <nav>
            <img src={logo} alt='logo'/>
            <p>React Course - Project 3</p>
         </nav>
      </header>
   );
}

export default Header;