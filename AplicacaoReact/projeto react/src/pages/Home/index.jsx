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
                <h4 className='text-center'>Sinopse</h4>
                <p className='text-center'>O show gira em torno das aventuras dos membros da família Smith, que consiste nos pais Jerry e Beth, seus filhos Summer e Morty, e o pai de Beth, chamado Rick Sanchez, que mora com eles como hóspede. De acordo com Justin Roiland, a família mora fora da cidade de Seattle, no estado norte-americano de Washington.</p>

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