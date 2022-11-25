import React from 'react'
import { Link } from 'react-router-dom'

export const Menu = ({ paginaAtual }) => {


    return (
        <>
            <nav
                className="navbar navbar-expand-lg"

            >
                <div
                    className="container-fluid"
                >
                    <h3>Rick and Morty</h3>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul
                            className="navbar-nav me-auto mb-2 mb-lg-0"
                        >
                            <li
                                className="nav-item"
                            >
                                <Link
                                    className={`nav-link ${paginaAtual === 'Home' && 'active'}`}
                                    to="/"
                                    style={{ color: '#FFF' }}
                                >
                                    Home
                                </Link>
                            </li>
                            <li
                                className="nav-item"
                            >

                            </li>
                            <li
                                className="nav-item"
                            >
                                <Link
                                    className={`nav-link ${paginaAtual === 'Personagens' && 'active'}`}
                                    to="/personagens"
                                    style={{ color: '#FFF' }}
                                >
                                    Personagens
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}