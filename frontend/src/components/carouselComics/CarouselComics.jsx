import { useContext, useEffect, useState } from "react"
import Item from "../comicCard/comicCard"
import axios from "axios"
import { useCookies } from "react-cookie"
import { Container, Row } from "react-bootstrap"
import ComicCard from "../comicCard/comicCard"


export default function CarouselComics(){
    const [cookies] = useCookies()
    const userToken = cookies.user
    const ruteToken =`http://localhost:3000/api/comics?token=${userToken.token}` 
    console.log(ruteToken)

    const [comics, setComics] = useState ([])
    
    
    useEffect (() =>{
        axios.get(ruteToken)
        .then((response)=>{
            console.log (response)
            setComics([...comics, ...response.data])
        })
        .catch((err)=>{
            console.log(err)
        })
    },[]) 

    return(
        <>
            <h2>Lists of comics</h2>
            <Container fluid className="py-3">
                <Row>
                    {comics.map((comic)=>(
                       <ComicCard key={comic.id} comic={comic}/>
                    ))}
                </Row>
            </Container>
        </>
    )
}