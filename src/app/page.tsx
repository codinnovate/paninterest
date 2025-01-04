import LoadMore from '@/components/LoadMore';
import AnimeCard, { AnimeProp } from '@/components/AnimeCard';
import { fetchAnime } from './action';
import Header from '@/components/Header';

export default async function Home() {
  const data = await fetchAnime(1, 'popularity', 5);
  return (
   <main>
    <Header />
    <section className='mt-5 p-2 flex flex-col items-center sm:grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-10'>
      {data.map((item:AnimeProp, idx:number) => (
        <AnimeCard 
        key={idx} 
        anime={item} 
        index={idx} />
      ))}
    </section>
    <LoadMore />
   </main>
  );
}
