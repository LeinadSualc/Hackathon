import axios from 'axios'
import { useEffect, useState } from 'react'
import { Footer } from '../../components/Footer'
import { Menu } from './../../components/Menu'
import { Card } from './../../components/Card'
import banner from './../../imagens/banner.jpg'
import './style.css'

export const Personagens = () => {

    const [cards, setCards] = useState([])

    useEffect(() => {

        axios.get('http://localhost:3001/personagens?')
            .then((resposta) => {


                setCards(resposta.data)

            })

    }, [])

    return (
        <>
            <Menu paginaAtual={"Personagens"} />
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
                <h4 className='text-center'>Personagens</h4>
                <p className='text-center'>Conheça uma parte do elenco:</p>

                <div
                    className='d-flex justify-content-around'
                >

                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexWrap: 'wrap'
                        }}
                    >
                        {
                            cards.map((element, index) => {
                                return (
                                    <Card
                                        key={element.id}
                                        nome={element.name}
                                        img={element.image}
                                        status={element.status}
                                        especie={element.species}
                                        genero={element.gender}
                                    />
                                )
                            })
                        }

                    </div>
                </div>

            </div>

            <Footer />
        </>
    )
}