import axios from 'axios'
import { useEffect, useState } from 'react'
import { Footer } from '../../components/Footer'
import { Menu } from './../../components/Menu'
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
                <h4 className='text-center'>Porque nos escolher?</h4>
                <p className='text-center'>Conheça nossos serviços</p>

                <div
                    className='d-flex justify-content-around'
                >


                    {
                        cards.map((objeto, index) => {
                            return (
                                <div
                                    className='card text-center'
                                    key={index}
                                    style={{
                                        width: '18rem'
                                    }}
                                >
                                    <div
                                        className='card-body'
                                    >
                                        <h5 className='card-title'>
                                            {objeto.name}
                                        </h5>
                                        <p>
                                            {objeto.image}
                                        </p>
                                        <p className='card-text'>
                                            {objeto.species}
                                        </p>
                                        <p className='card-text'>
                                            {objeto.status}
                                        </p>

                                    </div>

                                </div>
                            )
                        })
                    }


                </div>

            </div>

            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29297.470431819493!2d-53.3105332111939!3d-23.38156703372687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x948d223b4734f3d3%3A0xdedc5d9560f3dec7!2sDouradina%2C%20PR%2C%2087485-000!5e0!3m2!1spt-BR!2sbr!4v1666047518524!5m2!1spt-BR!2sbr"
                width="100%"
                height="450px"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy='no-referrer-when-downgrade'
            >
            </iframe>

            <Footer />
        </>
    )
}