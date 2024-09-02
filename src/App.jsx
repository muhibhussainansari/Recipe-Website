import { useEffect, useState } from "react"
import axios from 'axios';
import './App.css'
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Header from './Components/Header/Header'
import Card from './Components/Card/Card'
import Footer from "./Components/Footer/Footer";
import Loader from "./Components/Loader/Loader";


function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const getApi = async () => {
    try {
      const fetchApi = await axios.get('https://dummyjson.com/recipes')
      // console.log(fetchApi.data.recipes)
      setData(fetchApi.data.recipes)
    }
    catch (err){
      console.log("Fetching error", err)
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    getApi()
  }, [])

  if(loading == true){
    return <Loader/>
  }
  return (
    <>
      <Header />
        <Card data={data} />
      <Footer />
    </>
  )
}

export default App
