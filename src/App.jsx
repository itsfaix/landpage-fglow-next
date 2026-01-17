function App() {
  /* Add style and the nav bar*/
  return (
    <>
      <nav>
        <h1 className='font-bold text-3xl'>About us</h1>
      </nav>
      <main>
        <div>
          <h1 className='font-bold text-5xl'>Next-gen <br /> AI integration</h1>
          <h1 className='font-bold text-5xl'>for business</h1>
          <p className='text-lg mt-4 mb-6'>Leverage cutting-edge AI technologies to streamline your operations, enhance customer experiences, and drive innovation. Our solutions are tailored to meet the unique needs of your business, ensuring seamless integration and maximum impact.</p>
          <button className='bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-600 transition'>Join us now</button>      
        </div>
      </main>
      <footer></footer>      
    </>
  )
}

export default App
