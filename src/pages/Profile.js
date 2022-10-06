import React from "react"

export function Profile() {


    return (
    
      
      <div className="flex items-center justify-center w-full h-1/3 md:px-20">
            <img src="https://i.pinimg.com/564x/69/21/20/6921209941b1959ae2a19dc657930270.jpg" className="justify-center w-full h-[40vh]"></img>
            <div className="block h-[150px] w-[150px] outline-double outline-cyan-500 p-2 absolute mb-[-250px]">
                <img className="w-[150px] h-[130px]" src="https://plus.unsplash.com/premium_photo-1661378663982-6aa586d8bd98?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"/>
                <div className="flex flex-col justify-center mt-5">
                    <h1 className="m-auto text-white text-2xl
                    ">Jozef</h1>
                    <p className="m-auto text-gray-600">asian/bbg</p>
                 </div>
             
                 <div className="flex  justify-between items-center text-gray-400">
                    <h1> posts</h1>
                    <h1> books</h1>
                    <h1> notes</h1>
            </div>

            </div>
           
          
        
      </div>





        
    )
}

export default Profile; 