import { useEffect, useState } from "react"



const Hero = () => {
    const[country,setCountry] = useState([])
    const [SeachCountry,setSearchCountry] = useState("")
    const [filteredData,setFilteredData] = useState([])


    useEffect(()=>{
        const fetchCountry = async() =>{
            const responsive = await fetch("https://restcountries.com/v3.1/all")
            const data = await responsive.json()
            console.log(data)
            setCountry(data)

        }
        fetchCountry()
    },[])
    const HandClick = () =>{
        const filter = country.filter(count =>count.name.toLowerCase().includes(SeachCountry.toLocaleLowerCase()))
        setFilteredData(filter)
    }
  return (
    <>
     <div className="mt-12 bg-gray-400">
        <div>
        <input className="border px-2 py-1 outline-none border-none bg-gray-50 m-4"
        value={SeachCountry} type="text"placeholder="searh country"onChange={(e)=>setSearchCountry(e.target.value)} />
         <button className="outline-none border rounded-md px-2 py-1 bg-green-400 text-white" onClick={HandClick}>saerch </button>
        </div>
        {filteredData.length > 0 ? (
          filteredData.map((item) => (
            <div key={item.cca3}>
              <p>{item.name.common}</p>
              <p>{item.name.official}</p>
            </div>
          ))
        ) : (
          <p>Country not found</p>
        )}
     </div>
    </>
  )
}

export default Hero
