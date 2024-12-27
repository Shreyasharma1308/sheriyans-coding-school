import React from 'react'

function Card() {
  const data=[{image:'https://plus.unsplash.com/premium_photo-1728044138824-be1f80079bfc?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8',name: "2025",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis veniam ratione velit cupiditate, tempora",instock:true},
    {image:'https://images.unsplash.com/photo-1734366965582-1f5bc9d4e21a?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8',name: "a girl",description:"lorem1Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis veniam ",instock:false},
    {image:'https://images.unsplash.com/photo-1732452792153-6d244db8dc01?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5fHx8ZW58MHx8fHx8',name: "scenary",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",instock:false}
  ]
  return (
    <div className='w-full h-screen flex items-center justify-center gap-10 bg-zinc-200'>
       {
        data.map((elem,index)=>(
          <div className='w-52 bg-zinc-100  rounded-md overflow-hidden'>
          <div className='w-full h-32 bg-zinc-300'>
             <img className='w-full h-full object-cover' src={elem.image} />
          </div>
          <div className='w-full h-full px-3 py-4'>
          <h2 className='font-semibold'>{elem.name}</h2>
          <p className='text-xs mt-5'>{elem.description}</p>
          <button className={`px-4 py-1 text-xs ${elem.instock ? 'bg-blue-600':'bg-red-400'} rounded mt-3`}>
           { 
            elem.instock ? "Instock": "Out Of Stock"
             }
            </button>
          </div>
         </div>
        ))
       }
           
    </div>
  )
}

export default Card
