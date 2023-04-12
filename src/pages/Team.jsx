import React from 'react'

import { Header } from '../components'
import { alexandria, georgia, hands } from '../assets'

export const Team = () => {
  return (
    <>
      <Header title="Meet the 'A' Team" image={hands} />
      <section className='py-32'>
        <div className="grid md:grid-cols-2 grid-cols-1 md:gap-8 container mx-auto">
          <div className="flex border rounded-3xl  py-4 px-6">

            <div className="w-2/3">
              <h4 className='pb-4'>Alexandra Johnson</h4>
              <p>
                Alexandra has a degree in computer science from Carnegie Mellon University. She started her career working on recommender systems in fashion tech at Polyvore (acquired by Yahoo in 2015), before joining an early pioneer in the ML tools space, SigOpt (acquired by Intel in 2020), where she led the Platform Team. She holds two patents in ML tooling.
              </p>
            </div>

            <div className="w-1/3 flex flex-wrap justify-center">
              <h4 className='w-full text-center font-bold'>CEO</h4>
              <img src={alexandria} draggable={false} alt="Alexandria" className='w-40 h-40 rounded-full shadow-lg' />
              <div className="w-full flex justify-center">
                <a href="#" className="mx-2"><i className="fa-brands fa-twitter fa-lg"></i></a>
                <a href="#" className="mx-2"><i className="fa-brands fa-linkedin fa-lg"></i></a>
              </div>
            </div>
          </div>
          <div className="flex border rounded-3xl py-4 px-6">
            <div className="w-1/3 flex flex-wrap justify-center gap-4">
              <h4 className='w-full text-center font-bold'>CTO</h4>
              <img src={georgia} draggable={false} alt="Alexandria" className='w-40 h-40 rounded-full shadow-lg' />
              <div className="w-full flex justify-center">
                <a href="#" className="mx-2"><i className="fa-brands fa-twitter fa-lg"></i></a>
                <a href="#" className="mx-2"><i className="fa-brands fa-linkedin fa-lg"></i></a>
              </div>
            </div>
            <div className="w-2/3 text-right">
              <h4 className='pb-4'>Georgia Hong</h4>
              <p>
                Georgia got her degree in software engineering from the University of Waterloo, during which time she completed six co-ops including Datadog, Cockroach Labs, and SigOpt. After graduation she worked on security and high-scale infrastructure at Meta.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
