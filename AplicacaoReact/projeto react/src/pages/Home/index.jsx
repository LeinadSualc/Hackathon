import axios from 'axios'
import { useEffect, useState } from 'react'
import { Footer } from '../../components/Footer'
import { Menu } from './../../components/Menu'
import { Card } from './../../components/Card'
import banner from './../../imagens/banner.jpg'
import './style.css'

export const Home = () => {

    const [cards, setCards] = useState([])

    useEffect(() => {

        axios.get('http://localhost:3001/personagens?_limit=3')
            .then((resposta) => {


                setCards(resposta.data)

            })

    }, [])

    return (
        <>
            <Menu paginaAtual={"Home"} />
            <div
                className='divImageHome'
            >
                <img
                    className='imgHome'
                    src={banner}
                />
            </div>

            <div
                className='container'
            >

                <div
                    className='d-flex justify-content-around'
                >


                    {
                        cards.map((element, index) => {
                            return (
                                <Card
                                    key={element.id}
                                    nome={element.name}
                                    img={element.image}
                                />
                            )
                        })
                    }


                </div>

            </div>

            <Footer />
        </>
    )
}