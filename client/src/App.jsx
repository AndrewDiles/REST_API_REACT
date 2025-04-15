import { useEffect } from 'react'

function App() {

  useEffect(()=>{
		fetch("/api/users").then(r=>r.json()).then(console.log)
	},[])

  return (
    <>
    </>
  )
}

export default App
