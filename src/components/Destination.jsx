import React, { useState } from 'react'
import { assets, facilityIcons, roomsDummyData } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const CheckBox = ({label, selected = false, onChange = () => { }})=>{
    return (
        <label className="flex gap-3 items-center cursor-pointer mt-2 text-sm">
            <input type="checkbox" checked={selected} onChange={(e)=>onChange(e.target.checked, label)}/>
            <span className='font-light select-none'>{label}</span>
        </label>
    )
}

const RadioButton = ({label, selected = false, onChange = () => { }})=>{
    return (
        <label className="flex gap-3 items-center cursor-pointer mt-2 text-sm">
            <input type="radio" name="sortOption" checked={selected} onChange={()=>onChange(label)}/>
            <span className='font-light select-none'>{label}</span>
        </label>
    )
}

const Destination = () => {
    const navigate = useNavigate();
    const [openFilters, setOpenFilters] = useState(false)

    const roomTypes = [
        "Single Bed",
        "Double Bed",
        "Luxury Room",
        "Family Suite",
    ];
    const priceRanges = [
        '0 to 500',
        '500 to 1000',
        '1000 to 2000',
        '2000 to 3000',
    ];

    const sortOptions = [
        "Price Low to High",
        "Price High to Low",
        "Newest First"
    ];
  return (
    <>
    <div className='py-28 md:py-35 px-4 md:px-16 lg:px-24 xl:px-32'>
        <div className="flex flex-col md:flex-row bg-white shadow-md max-md:max-w-80">
    <img className='w-80 md:w-64 h-80 object-cover object-top'
        src="https://images.unsplash.com/photo-1633394027858-fff49145f120?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="image"/>
    <div className="p-5">
        <div className="flex items-center justify-between">
            <h3 className="text-xl font-medium text-slate-800">Cartagena</h3>
            <span className="px-3 py-1 bg-red-500 text-white rounded text-sm">SALE</span>
        </div>
        <p className="max-w-xs text-sm mt-2 text-slate-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, laborum recusandae? Nulla similique iusto doloremque? Odio sequi minus unde ex, ea, placeat assumenda similique ut quisquam, soluta error nemo dolore.</p>
        <p className="text-xl font-medium text-slate-800 mt-4">$2.370.207</p>
        
        <button className="px-12 py-2 bg-slate-800 hover:shadow-lg transition-all text-white mt-6 uppercase">
            Ver detalle
        </button>
    </div>
</div>
    </div>

    <div className='px-4 md:px-16 lg:px-24 xl:px-32'>
        <div className="flex flex-col md:flex-row bg-white shadow-md max-md:max-w-80">
    <img className='w-80 md:w-64 h-80 object-cover object-top'
        src="https://plus.unsplash.com/premium_photo-1697730254647-9b24f6ead436?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="image"/>
    <div className="p-5">
        <div className="flex items-center justify-between">
            <h3 className="text-xl font-medium text-slate-800">Cancun</h3>
            <span className="px-3 py-1 bg-red-500 text-white rounded text-sm">SALE</span>
        </div>
        <p className="max-w-xs text-sm mt-2 text-slate-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa alias facilis, quam eaque ipsa sapiente numquam, laboriosam aliquid labore totam omnis repellat ex molestias obcaecati odio repellendus deserunt minima quae!</p>
        <p className="text-xl font-medium text-slate-800 mt-4">$3.500.000</p>
        
        <button className="px-12 py-2 bg-slate-800 hover:shadow-lg transition-all text-white mt-6 uppercase">
            Ver detalle
        </button>
    </div>
</div>
    </div>

     <div className='py-15 px-4 md:px-16 lg:px-24 xl:px-32'>
        <div className="flex flex-col md:flex-row bg-white shadow-md max-md:max-w-80">
    <img className='w-80 md:w-64 h-80 object-cover object-top'
        src="https://images.unsplash.com/photo-1483729558449-99ef09a8c325?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="image"/>
    <div className="p-5">
        <div className="flex items-center justify-between">
            <h3 className="text-xl font-medium text-slate-800">Rio de Janeiro</h3>
            <span className="px-3 py-1 bg-red-500 text-white rounded text-sm">SALE</span>
        </div>
        <p className="max-w-xs text-sm mt-2 text-slate-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, impedit esse! Esse magni id, magnam provident rerum eligendi, nostrum officia blanditiis ipsa aliquam ducimus consequatur accusantium soluta asperiores porro commodi.</p>
        <p className="text-xl font-medium text-slate-800 mt-4">$2.541.317</p>
        
        <button className="px-12 py-2 bg-slate-800 hover:shadow-lg transition-all text-white mt-6 uppercase">
            Ver detalle
        </button>
    </div>
</div>
    </div>

    <div className='px-4 md:px-16 lg:px-24 xl:px-32'>
        <div className="flex flex-col md:flex-row bg-white shadow-md max-md:max-w-80">
    <img className='w-80 md:w-64 h-80 object-cover object-top'
        src="https://images.unsplash.com/photo-1539037116277-4db20889f2d4?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="image"/>
    <div className="p-5">
        <div className="flex items-center justify-between">
            <h3 className="text-xl font-medium text-slate-800">Madrid</h3>
            <span className="px-3 py-1 bg-red-500 text-white rounded text-sm">SALE</span>
        </div>
        <p className="max-w-xs text-sm mt-2 text-slate-500">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit aspernatur reiciendis labore officia nesciunt, molestias ipsum et ipsam veniam dignissimos doloribus quo sunt eaque. Hic doloremque aliquid magnam dolorem expedita.</p>
        <p className="text-xl font-medium text-slate-800 mt-4">$4.200.000</p>
        
        <button className="px-12 py-2 bg-slate-800 hover:shadow-lg transition-all text-white mt-6 uppercase">
            Ver detalle
        </button>
    </div>
</div>
    </div>    


    <div className='flex flex-col-reverse lg:flex-row items-start justify-between pt-28 md:pt-35 px-4 md:px-16 lg:px-24 xl:px-32'>
      <div>
        <div className='flex flex-col items-start text-left'>
            <h1 className='font-playfair text-4xl md:text-[40px]'>Hotel Rooms</h1>
            <p className='text-sm md:text-base text-gray-500/90 mt-2 max-w-174'>Take advantage of our limited-time offers and special packages to enhance your stay and create unforgettable memories.</p>
        </div>

        {roomsDummyData.map((room)=>(
            <div key={room._id} className='flex flex-col md:flex-row items-start py-10 gap-6 border-b border-gray-300 last:pb-30 last:border-0'>
                <img onClick={()=> {navigate(`/rooms/${room._id}`); scrollTo(0,0)}}
                 src={room.images[0]} alt="hotel-img" title='View Room Details' className='max-h-65 md:w-1/2 rounded-xl shadow-lg object-cover cursor-pointer'/>
                 <div className='md:w-1/2 flex flex-col gap-2'>
                    <p className='text-gray-500'>{room.hotel.city}</p>
                    <p onClick={()=> {navigate(`/rooms/${room._id}`); scrollTo(0,0)}} 
                    className='text-gray-800 text-3xl font-playfair cursor-pointer'>{room.hotel.name}</p>
                    <div className='flex items-center'>
                        <p className='ml-2'>200+ reviews</p>
                    </div>
                    <div className='flex items-center gap-1 text-gray-500 mt-2 text-sm'>
                        <img src={assets.locationIcon} alt="location-icon" />
                        <span>{room.hotel.address}</span>
                    </div>
                    {/* Room Amenities */}
                    <div className='flex flex-wrap items-center mt-3 mb-6 gap-4'>
                        {room.amenities.map((item, index)=>(
                            <div key={index} className='flex items-center gap-2 px-3 py-2 rounded-lg bg-[#F5F5FF]/70'>
                                <img src={facilityIcons[item]} alt={item} className='w-5 h-5' />
                                <p className='text-xs'>{item}</p>
                            </div>
                        ))}
                    </div>
                    {/* Room Price per Night */}
                    <p className='text-xl font-medium text-gray-700'>${room.pricePerNight} /night</p>
                 </div>
            </div>
        ))}

      </div>
      {/* Filters  */}
      <div className='bg-white w-80 border border-gray-300 text-gray-600 max-lg:mb-8 min-lg:mt-16'>

        <div className={`flex items-center justify-between px-5 py-2.5 min-lg:border-b border-gray-300 ${openFilters && "border-b"}`}>
            <p className='text-base font-medium text-gray-800'>FILTERS</p>
            <div className='text-xs cursor-pointer'>
                <span onClick={()=> setOpenFilters(!openFilters)} className='lg:hidden'>
                    {openFilters ? 'HIDE' : 'SHOW'}</span>
                <span className='hidden lg:block'>CLEAR</span>
            </div>
        </div>

        <div className={`${openFilters ? 'h-auto' : "h-0 lg:h-auto"} overflow-hidden transition-all duration-700`}>
            <div className='px-5 pt-5'>
                <p className='font-medium text-gray-800 pb-2'>Popular filters</p>
                {roomTypes.map((room, index)=>(
                    <CheckBox key={index} label={room}/>
                ))}
            </div>
            <div className='px-5 pt-5'>
                <p className='font-medium text-gray-800 pb-2'>Price Range</p>
                {priceRanges.map((range, index)=>(
                    <CheckBox key={index} label={`$ ${range}`}/>
                ))}
            </div>
            <div className='px-5 pt-5 pb-7'>
                <p className='font-medium text-gray-800 pb-2'>Sort By</p>
                {sortOptions.map((option, index)=>(
                    <RadioButton key={index} label={option}/>
                ))}
            </div>
        </div>
        
      </div>
    </div>

    
    </>
    
  )
}

export default Destination