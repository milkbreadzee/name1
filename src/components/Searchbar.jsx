import React from "react";


const Searchbar = () => {
  return (
    <div>
                
  <div class="flex justify-center">
  <div class="mb-0.2 xl:w-96">
    <input
      type="search"
      class="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-earth-red
        bg-earth-beige bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-earth-red focus:bg-earth-beige focus:border-earth-red focus:outline-none
      "
      id="exampleSearch"
      placeholder="Search quieries"
    />
  </div>
</div>


    </div>
  )
}

export default Searchbar