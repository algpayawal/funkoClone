import React from 'react'
import MainNavigation from '../components/Navigation'
import MainFooter from '../components/Footer'
import AllProducts from '../pages_crud/Products'

const ProductsPage = () =>{
  return (

    <div>

        <div class="Top-Container">
          <div class="left"></div>
          <div class="right">
            <h5>SHOP</h5>
            <h1>ALL PRODUCTS</h1>
          </div>
        </div>

        <div class="Container">
          <div class="left-side">
            <h4>Filters</h4>

            <div class="side-panel">

              <div class="search">
                <input type="text" class="input" placeholder="Search Filters"></input>
              </div>

              <h2>EXCLUSIVITY</h2>
              <h2>FEATURED</h2>
              <h2>FANDOM</h2>
              <h2>LICENSE</h2>
              <h2>Product Type</h2>

            </div>

          </div>

          <div class="right-side">

            <div class="Wrapper">

              <h3>(1,608) results</h3>
              <div class="button">Featured</div>

            </div>

            <div class="right-container">

              <div class="sample">Image</div>
              <div class="sample">Image</div>
              <div class="sample">Image</div>
              <div class="sample">Image</div>

              <div class="sample">Image</div>
              <div class="sample">Image</div>
              <div class="sample">Image</div>
              <div class="sample">Image</div>

              <div class="sample">Image</div>
              <div class="sample">Image</div>
              <div class="sample">Image</div>
              <div class="sample">Image</div>

              <div class="sample">Image</div>
              <div class="sample">Image</div>
              <div class="sample">Image</div>
              <div class="sample">Image</div>

              <div class="sample">Image</div>
              <div class="sample">Image</div>
              <div class="sample">Image</div>
              <div class="sample">Image</div>

              <div class="sample">Image</div>
              <div class="sample">Image</div>
              <div class="sample">Image</div>
              <div class="sample">Image</div>

            </div>

          </div>

        </div>
      </div>
  )
}


const MainProductsPage = () => {
  return (
    <div>
      <MainNavigation/>
        <ProductsPage/>
      <MainFooter/>
    </div>
  )
}
 

export default MainProductsPage
