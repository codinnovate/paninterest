"use server";



export const fetchAnime = async (page:number,order:string, limit:number) => {
    const response  = await fetch(`https://shikimori.one/api/animes?page=${page}&limit=8&order=${order?order:'popularity'}`);
    const data = await response.json();
    console.log(data);
    return data;
}