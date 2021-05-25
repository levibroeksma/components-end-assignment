import './App.css';
import Footer from './components/Footer/Footer'
import mexico from './assets/mexico.png';
import kcal from './assets/meal.png';
import clock from './assets/clock.png';
import Recipe from "./components/Recipe/Recipe";
import logo from './logo.svg';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
       <Header
        logo={logo}
       />
        <div className="recipe-holder-home">
            <Recipe
                title="Chipotle Chicken Taco's with blue corn tortilla's"
                description="These delicious mildly spicy, smokey chicken taco's are guaranteed to leave no leftovers!"
                imagecountry={mexico}
                preptimeimage={clock}
                kcalimage={kcal}
                preptime="45 min"
                kcal="475 kcal"
            />
            <Recipe
                title="Chipotle Chicken Taco's with blue corn tortilla's"
                description="These delicious mildly spicy, smokey chicken taco's are guaranteed to leave no leftovers!"
                imagecountry={mexico}
                preptimeimage={clock}
                kcalimage={kcal}
                preptime="45 min"
                kcal="475 kcal"
            />
            <Recipe
                title="Chipotle Chicken Taco's with blue corn tortilla's"
                description="These delicious mildly spicy, smokey chicken taco's are guaranteed to leave no leftovers!"
                imagecountry={mexico}
                preptimeimage={clock}
                kcalimage={kcal}
                preptime="45 min"
                kcal="475 kcal"
            />
            <Recipe
                title="Chipotle Chicken Taco's with blue corn tortilla's"
                description="These delicious mildly spicy, smokey chicken taco's are guaranteed to leave no leftovers!"
                imagecountry={mexico}
                preptimeimage={clock}
                kcalimage={kcal}
                preptime="45 min"
                kcal="475 kcal"
            />
            <Recipe
                title="Chipotle Chicken Taco's with blue corn tortilla's"
                description="These delicious mildly spicy, smokey chicken taco's are guaranteed to leave no leftovers!"
                imagecountry={mexico}
                preptimeimage={clock}
                kcalimage={kcal}
                preptime="45 min"
                kcal="475 kcal"
            />
            <Recipe
                title="Chipotle Chicken Taco's with blue corn tortilla's"
                description="These delicious mildly spicy, smokey chicken taco's are guaranteed to leave no leftovers!"
                imagecountry={mexico}
                preptimeimage={clock}
                kcalimage={kcal}
                preptime="45 min"
                kcal="475 kcal"
            />
            <Recipe
                title="Chipotle Chicken Taco's with blue corn tortilla's"
                description="These delicious mildly spicy, smokey chicken taco's are guaranteed to leave no leftovers!"
                imagecountry={mexico}
                preptimeimage={clock}
                kcalimage={kcal}
                preptime="45 min"
                kcal="475 kcal"
            />
            <Recipe
                title="Chipotle Chicken Taco's with blue corn tortilla's"
                description="These delicious mildly spicy, smokey chicken taco's are guaranteed to leave no leftovers!"
                imagecountry={mexico}
                preptimeimage={clock}
                kcalimage={kcal}
                preptime="45 min"
                kcal="475 kcal"
            />
        </div>

        <Footer/>

    </div>
  )
}

export default App;
