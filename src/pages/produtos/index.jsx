import PageWrapper from "@/components/PageWrapper";
import instance from "@/instance/api";
import { useEffect, useState } from "react";

export default function Produtos(){
    const[produtos, setProdutos] = useState([]);

    useEffect(() => {
        async function getProdutos(){
                const response = await instance.get('/produtos')
                setProdutos(response.data)              
        }
        getProdutos();
    // Verifica se o token existe no localStorage
    }, []);
 return(
    <PageWrapper>
        <p>Olá Mundo!</p>
    </PageWrapper>
 )}