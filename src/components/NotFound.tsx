import cat from "../assets/cat.svg"
const NotFound = () => {
  return (
    <div className="h-screen w-screen bg-gray-100 flex items-center">
        <div className="container flex flex-col md:flex-row items-center justify-center px-5 text-gray-700">
               <div className="max-w-md">
                  <div className="text-5xl font-dark font-bold">Oops page not found</div>
                <p
                  className="text-2xl md:text-3xl font-light leading-normal"
                ></p>
              <p className="mb-8">But dont worry, try again some other time.</p>
        </div>
        <div className="max-w-lg">
          <img src={cat} alt="catty" />
        </div>
        
      </div>
    </div>
  )
}

export default NotFound
