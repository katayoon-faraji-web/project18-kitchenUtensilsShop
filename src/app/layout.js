
import "./globals.css";
import Header from "../../components/header/header"
import Footer from "../../components/footer/footer"
import Cart from '../../components/cart/cart'
export default function RootLayout({ children }) {

  return (
    <html lang="en" className="font-secondary capitalize">
      <body>
        <Header/>
        <Cart/>

        {children}
        <Footer/>
        
      </body>
    </html>
  );
}
