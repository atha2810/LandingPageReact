import './App.css';
import Banner from './Components/Banner/Banner';
import Banner2 from './Components/Banner2/Banner2';
import Banner3 from './Components/Banner3/Banner3';
import Categories from './Components/Categories/Categories';
import Featured from './Components/Featured/Featured';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Offers from './Components/Offers/Offers';
import Products from './Components/Products/Products';
import ProductsB from './Components/ProductsB/ProductsB';
import Services from './Components/Services/Services';
import Subscribe from './Components/Subscribe/Subscribe';
import Trending from './Components/Trending/Trending';

  function App() {
    return (
    <div className="App">
      <Header/>
      <Banner/>
      <Products/>
      <Categories/>
      <Trending/>
          <Featured type="Featured"/> 
      <Banner2/>
      <div className='new'>
         <Featured type="New"/> 
      </div>
      <div className='best'>
         <Featured type="Best Selling"/>
       </div>
      <ProductsB/>
      <Banner3/>
      <Offers/>
      <Services/>
     
      <Subscribe/>
     
      <Footer/>
   </div>
    );
  }

  export default App;
