import './TicketsSession.css'
import axios from 'axios'
import { useState, useEffect } from 'react'

const TicketsSession = () => {

    const [sessions, setSessions] = useState([])

    useEffect(() => {
        axios("https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/movies")
            .then((answer) => {
                setSessions([...answer.data]);
                console.log(answer.data);
                console.log(sessions);
            })
    },[])


    return(
        <>
            <h1>Selecione o Horário</h1>
            <h2></h2>
            <footer>
                <div className = "mini-poster">
                    <img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2kekV1GGgplhQY1_KvaLVDa6ZGCoxcW18KHms8sMwl6tG28n8VXk0hN2mf_YChaam0DE&usqp=CAU"/>
                </div>
                <p>Enola Holmes</p>
            </footer>
        </>
    )
}

export default TicketsSession