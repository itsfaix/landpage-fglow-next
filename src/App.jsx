function App() {

  return (
    <>
      <nav className="fixed top-0 right-0 z-10 p-4 w-full">
        <h1 className='font-inter text-2xl'>About us</h1>
        <h1 className="font-inter text-2xl">Work</h1>
      </nav>
      <main>
        <div className="p-40">
          <h1 className='font-inter text-7xl'>Next-gen <br /> AI integration</h1>
          <h1 className='font-inter text-transparent text-7xl bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text'>for business</h1>
          <p className='font-inter text-lg mt-6 mb-7'>Leverage cutting-edge AI technologies to streamline your operations, enhance customer experiences, and drive innovation. Our solutions are tailored to meet the unique needs of your business, ensuring seamless integration and maximum impact.</p>
          <button className='font-interbg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-600 transition'>Join us now</button>      
        </div>
      </main>
      <footer></footer>      
    </>
  )
}

export default App
