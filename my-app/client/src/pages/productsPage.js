import React from 'react'
import MainNavigation from '../components/Navigation'
import MainFooter from '../components/Footer'
import Products from '../pages_crud/Products'

const MainProductsPage = () => {
  return (
    <div>
      <MainNavigation/>
        <Products></Products>
      <MainFooter/>
    </div>
  )
}
 

export default MainProductsPage
