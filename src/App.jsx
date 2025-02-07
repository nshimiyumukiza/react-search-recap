import { useEffect, useState } from "react";
import Hero from "./componests/Hero";

const App = () => {
  const [datas,setDatas] =useState([])
  const [search,setSearch] = useState("")
  const filter = datas.filter(data =>data.name.toLowerCase().includes(search.toLocaleLowerCase()))
  useEffect(()=>{
  async function fetchData(){
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await response.json()
    console.log(data)
    setDatas(data)
  }
fetchData()
  },[])
  return (
    <>
      <div className="container mx-auto bg-gray-50 min-h-screen my-10">
        <div className="flex justify-end">
          <input
            className="bg-gray-100 px-2 py-1 border outline-none w-1/3 border-gray-200"
            type="text"
            placeholder="Seach User"value={search} onChange={(e)=>setSearch(e.target.value)}
          />
        </div>
        <div className="bg-gray-100 p-2 grid grid-col-1 sm:grid-col-2 space-y-5">
          <div className="bg-gray-300 rounded-md p-2 text-blue-700 flex flex-col space-y-3">
           {filter.length > 0? filter.map(item=>(
            <div>
              <h1>{item.name}</h1>
              <p>{item.email}</p>
              <p>{item.phone}</p>
              <p>{item.city}</p>
            </div>
           )):<p>User Not Fount</p>}
          </div>
         
        </div>
      </div>
      <Hero />
    </>
  );
};

export default App;
