import './App.css';
import mexico from './assets/mexico.png';
import kcal from './assets/meal.png';
import clock from './assets/clock.png';
import Recipe from "./Recipe";
import logo from './logo.svg';
import Header from './Header';

function App() {
  return (
    <div className="App">
       <Header
        logo={logo}
       />
        {/*<Recipe*/}
        {/*    title="Chipotle Chicken Taco's with blue corn tortilla's"*/}
        {/*    description="These delicious mildly spicy, smokey chicken taco's are guaranteed to leave no leftovers!"*/}
        {/*    imagecountry={mexico}*/}
        {/*    preptimeimage={clock}*/}
        {/*    kcalimage={kcal}*/}
        {/*    preptime="45 min"*/}
        {/*    kcal="475 kcal"*/}
        {/*/>*/}

    </div>
  )
}

export default App;
