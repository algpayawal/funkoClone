import React from 'react'

const ProjectPage = () => {
  const [show , setShow] = React.useState(false)
  
  const showDesc = () => setShow(!show);

  return (
  <div className='mb-[4rem]'>
    <section className='product mr-[6rem] mt-[2rem]'>
        <div className='productimage'>
            
        </div>
        <div className='productdetails  '>
          <section>
            <h4 className=''>MINI PLUS</h4>
            <h1 className='text-[2.5rem] font-[800] leading-10'>HOLIDAY THE JOKER - DC SUPER HEROES</h1>
            <ul className='flex mt-[1.75rem]'>
                <li className=' text-white text-[1.5rem] font-[500] bg-[#0070cc] px-2 w-[8rem] '>EXLUSIVE</li>
                <li className='text-[1.5rem] px-2'>$5.00</li>
            </ul>
            <div className='flex justify-between bg-black text-white p-[.5rem] mt-[1.75rem] w-[18rem] rounded-[24px]'>
                <button type="button" className='pl-2'><i className="fa-solid fa-angle-down"></i>1</button>
                <div className=' h-[2rem] w-[2px] bg-white'></div>
                <button type='button' className='text-[1.2rem] font-[500] pr-[3.8rem] '>ADD TO CART</button>
            </div> 
          </section>    
          <div className='productdropdown'>
            <span>Product Details</span>
            <i onClick={showDesc} class="fa-solid fa-chevron-down"></i>
          </div>
        </div> 
    </section>
    {
    show? <ProductDescription/>:null
    } 
  </div>
  )
}

const ProductDescription = () => {
  return (
    <div className='productdescription'>
      <div>
        Crush the holiday rush with a cuddly DC Super Heroes The Joker Plush. The Joker, as a plush collectible, wears a festive outfit in holiday colors, and he’s ready to grab all the wonderful toys. Squeeze in some festive fun this holiday season and expand your DC Super Heroes set. Collectible plush figure is approximately 4-inches tall.
 
      </div>
      <ul>
        <li><b>Item Number:</b> 21232 </li>
        <li><b>Category:</b> DC Comics </li>
        <li><b>License:</b> Joker </li>
        <li><b>Priduct Type:</b> Plush </li>
        <li><b>Exclusivity:</b> Retailer </li>
      </ul>
    </div>
  )
}


export default ProjectPage
