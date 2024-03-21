import { useEffect, useState } from "react"
import axios from "axios"
import { useCookies } from "react-cookie"
import { CardTitle, Container, Row } from "react-bootstrap"
import ComicCard from "../comicCard/comicCard"
import "./carouselComics.scss"


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
            <CardTitle as="h1" className="mb-2" >Lists of comics</CardTitle>
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