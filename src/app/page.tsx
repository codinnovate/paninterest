import LoadMore from '@/components/LoadMore';
import AnimeCard, { AnimeProp } from '@/components/AnimeCard';
import { fetchAnime } from './action';

export default async function Home() {
  const data = await fetchAnime(1, 'popularity', 5);
  return (
   <main>
    <h2>Explore Anime</h2>
    <section className='flex flex-col items-center sm:grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-10'>
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
