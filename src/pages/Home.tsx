import React from 'react'
import { Link } from 'react-router-dom'
import ProductCard from '../components/ProductCard'


const Home = () => {
  const addToCart=()=>{

  }
  return (
    <div className='home'>
      <section></section>
      <h1>Latest Products 
      <Link to={"/search"} className='findMore'>more</Link>
      </h1>
      <main>
        <ProductCard productId='1' photo='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvJmdPJ1y_djkDQ0eody5P66aSNqxK0ZK0KtlpkPgzmw&s' price={10} stock={20} name='tasbih' handler={addToCart} />
      </main>
    </div>
  )
}

export default Home