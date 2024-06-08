// create your App component here
import React, { useState, useEffect } from "react"



function App(){
const [dogImage, setDogImage] = useState("")
const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        async function  fetchDogs() {
            const resp = await fetch('https://dog.ceo/api/breeds/image/random')
            const data = await resp.json()
            setDogImage(data.message)
            setIsLoading(false)
        }
        fetchDogs()
    }, [])


return <div>
    {isLoading ? (
        <p>Loading...</p>
    ) : (<img src = {dogImage} alt="A Random Dog" /> )}
   
    </div>

}
export default App;