import './App.css';
import Footer from './components/Footer/Footer'
import mexico from './assets/mexico.png';
import kcal from './assets/meal.png';
import clock from './assets/clock.png';
import Recipe from "./components/Recipe/Recipe";
import logo from './logo.svg';
import Header from './components/Header/Header';
import Button from './components/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import RecipeDetail from "./components/Recipe-detail/Recipe-detail";

function App() {
  return (
    <div className="App">
       <Header
        logo={logo}
       />

        {/*<Recipe*/}
        {/*    imagecountry={mexico}*/}
        {/*    title="Chipotle Chicken Taco’s with blue corn tortilla’s"*/}
        {/*    preptime="45 min"*/}
        {/*    preptimeimage={clock}*/}
        {/*    kcalimage={kcal}*/}
        {/*    kcal="475 kcal"*/}
        {/*    description="These delicious mildly spicy, smokey chicken taco’s are guaranteed to leave no leftovers!"*/}
        {/*/>*/}
        <main>
            <RecipeDetail/>

        </main>
        <Footer/>
    </div>
  )
}

export default App;