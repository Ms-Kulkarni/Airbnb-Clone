import Head from 'next/head'
import Header from '../components/Header'
import Banner from '../components/Banner'
import SmallCard from '../components/SmallCard'
import MediumCard from '../components/MediumCard'
import LargeCard from '../components/LargeCard'
import Footer from '../components/Footer'

const Home = ({exploreData, cardsData}) => {
  return (
    <div className="">
      <Head>
        <title>Airbnb Clone</title>
        <link rel="icon" href="/airbnb-2.jpg" />
      </Head>
      {/* Header */}
      <Header/>

      {/* Banner */}
      <Banner />
      
      <main className='max-w-7xl mx-auto'>
        <section className='pt-6'>
          <h2 className='text-4xl font-semibold pb-5' >Explore Nearby</h2>

          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-3 xl:grid-cols-4'>
          {exploreData?.map(({img, distance, location}) => (
            <SmallCard
              key={img}
              img={img}
              distance={distance}
              location={location}
            />
            ))}
          </div>

        </section>
        <section>
          <h2 className='text-4xl font-semibold py-8'>Live Anywhere</h2>

          <div className='flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3'>
          {cardsData?.map(({img, title}) => (
            <MediumCard
              key={img}
              img={img}
              title={title} />
          ))}
         </div>
        </section>

        <section>
        <LargeCard
          img='https://links.papareact.com/4cj'
          title="The Greatest Outdoors"
          description="Wishlists curated by Airbnb"
          buttonText="Get Inspired"
        />
        </section>
      </main>
      <Footer/>
    </div>
  )
}

export const getStaticProps = async () => {
  const exploreData = await fetch('https://airbnb-api.herokuapp.com/api/explorePlaces')
    .then((response) => response.json());
  
  const cardsData = await fetch('https://airbnb-api.herokuapp.com/api/liveAnywhere').then((res) =>
    res.json()
  );

  return {
    props: {
      exploreData,
      cardsData,
    },
  };
}


export default Home;