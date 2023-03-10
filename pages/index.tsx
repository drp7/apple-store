import type { NextPage ,GetServerSideProps} from 'next'

import Header from '../components/Header'
import Landing from '../components/Landing'
import Title from '../components/Title'
import { Tab } from '@headlessui/react'
import { fetchCategories } from '../utils/fetchCategories'
const Home: NextPage = () => {
  return (
    <>
      <Title/>
      <Header/>
<main className='relative
 bg-[#E7ECEE] 

  '>
  <Landing/>
  <section  className='relative z-40  min-h-screen bg-[#181818]  '>
    <div className='space-y-10 py-16'>
  <h1 className='text-center text-4xl font-medium tracking-wide text-white md:text-5xl'>
    New Promos
  </h1>
  {/* <Tab.Group>
            <Tab.List className="flex justify-center">
              {categories.map((category) => (
                <Tab
                  key={category._id}
                  id={category._id}
                  className={({ selected }) =>
                    `whitespace-nowrap rounded-t-lg py-3 px-5 text-sm font-light outline-none md:py-4 md:px-6 md:text-base ${
                      selected
                        ? "borderGradient bg-[#35383C] text-white"
                        : "border-b-2 border-[#35383C] text-[#747474]"
                    }`
                  }
                >
                  {category.title}
                </Tab>
              ))}
            </Tab.List>
            <Tab.Panels className="mx-auto max-w-fit pt-10 pb-24 sm:px-4">
              <Tab.Panel className="tabPanel">{showProducts(0)}</Tab.Panel>
              <Tab.Panel className="tabPanel">{showProducts(1)}</Tab.Panel>
              <Tab.Panel className="tabPanel">{showProducts(2)}</Tab.Panel>
              <Tab.Panel className="tabPanel">{showProducts(3)}</Tab.Panel>
            </Tab.Panels>
          </Tab.Group> */}

  </div>
</section>
</main>


       
    </>
  )
}

export default Home

//Backend
// export const getServerSideProps:GetServerSideProps=async()=>{
//   const categories=await fetchCategories()

//   return{
//     props:{},
//   }
// }
