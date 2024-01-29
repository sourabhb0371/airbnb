//import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from './components/Card';
//import Katie from "./images/katie-zaferes.png"
import data from "./data"
const items = data.map(item => {
  return (
    <Card 
      key={item.id}
      // coverImg={info.coverImg} 
      // rating={info.stats.rating}
      // reviewCount={info.stats.reviewCount}
      // title={info.title} 
      // price={info.price} 
      // location={info.location}
      // openSpots={info.openSpots}
      items={item}
   /> 
  )
})
function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <section className='cards-list'>
        {items}
      </section>
      {/* <Card
        img={Katie}
        rating={5.0} 
        count={6}
        country="USA"
        title="Life Lessons with Katie Zaferes"
        cost={136}
      />
      <Card
        img={Katie}
        rating={5.0}
        count={30}
        country="Australia"
        title="Learn weeding photography"
        cost={125}
      />
      <Card
        img={Katie}
        rating={4.8}
        country="USA"
        count={2}
        title="Group Mountain Biking"
        cost={50}
      /> */}
    </div>
  )
}

export default App;
