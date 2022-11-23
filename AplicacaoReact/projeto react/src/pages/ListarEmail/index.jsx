import { Menu } from "../../components/Menu"
import { Footer } from "../../components/Footer"
import axios from "axios"
import { useEffect, useState } from "react"

export const ListarEmail = () => {

    

    const [listarEmail, setListarEmail] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/contatos')
            .then((res) => {
                console.log(res.data)
                setListarEmail(res.data)
            })
    }, [])


    return (
        <>
            <Menu paginaAtual={'ListarEmail'} />
            <div
                className="container"
            >

                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        paddingTop: 20
                    }}
                >
                    <h2>Listar Email</h2>
                    <p>
                        Envie uma mensagem ou fale pelo whatsApp(99) 9999-9999
                    </p>
                </div>
                <hr />

                <table>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Nome</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            listarEmail.map((item) => (
                                <tr>
                                    <td>{item.id}</td>
                                    <td>{item.nome}</td>
                                    <td>{item.email}</td>
                                </tr>
                            ))
                        }

                    </tbody>
                </table>
            </div>
            <Footer />
        </>
    )
}