import { useState } from "react"
import { useEffect } from "react"
import { fetchPost } from "./services/post_services";
import SearchBars from "./components/SearchBar";
import Posts from "./components/Posts";

//[]{}

function App(){
   
  const [search, setSearch] =useState(''); 
   const [posts, setPosts] =useState([]); 

   useEffect(()=>{ 
       (
        async()=>{ 
          const data = await fetchPost();
          setPosts(data)
        }
       )()
   },[])

   return (
    <div className="mx-auto max-w-2xl px-2 py-4 sm:px-6 sm:py-10 lg:max-w-7xl lg:px-4">
    <SearchBars search={search} onSearch={setSearch} />
    <Posts search={search} posts={posts}/>
    </div>
   )
}

export default App