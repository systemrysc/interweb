function SearchBars({search, onSearch}){
   return (
    <form>
      <input 
         type="text"
         value={search}
         onChange={(e)=>{onSearch(e.target.value)}}
         placeholder="Consultar post por título..."  
         className="w-full bg-slate-100 p-2"
         autoFocus
      />
    </form>
   )
}

export default SearchBars