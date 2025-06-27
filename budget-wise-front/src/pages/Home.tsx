import React, { useEffect, useState } from "react";


interface Divida {
    id?: number;
  nome: string;
  valor_total: number;
  parcelas: number;
  parcelas_pagas: number;
}


const Home: React.FC = () => {
    const [dividas, setDividas] = useState<Divida[]>([])


    const fetchDividas = async () => {
        try {
            const response = await fetch('http://localhost:3002/api/dividas')
            const data = await response.json();
            setDividas(data)
        } catch (error) {
            console.error('Erro ao buscar dívidas:', error)
        }
    }

    useEffect(() => {
        fetchDividas()
    }, [])

    return (
        <div className="container">
            <h1>Gerenciador de Finanças Teste</h1>
            
        </div>
    )
}

export default Home