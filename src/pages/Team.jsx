import React from "react"

import { Fade } from "react-awesome-reveal"

import { Header } from "../components"
import { alexandria, georgia, hands } from "../assets"

export const Team = () => {
  return (
    <>
      <Header title="Meet the 'A' Team" image={hands} />
      <section className="container px-4 mx-auto py-2 md:py-20">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-6 md:gap-8">
          <div className="flex flex-wrap border border-gray-300 p-4 md:p-6">
            <Fade triggerOnce cascade damping={0.5} direction="up">
              <div className="w-full flex flex-wrap justify-center items-center border-b border-dashed border-gray-300">
                <div className="w-full md:w-3/12 flex justify-center">
                  <img src={alexandria} alt="Alexandria" className="w-40 " />
                </div>
                <div className="w-full md:w-9/12">
                  <div className="flex flex-wrap text-center">
                    <h4 className="w-full">Alexandra Johnson</h4>
                    <div className="w-full">
                      <div className="flex flex-wrap justify-center items-center">
                        <h5>CEO</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Fade>
            <Fade triggerOnce cascade damping={0.5} direction="up">
              <div className="w-full mt-4">
                <p className="text-justify">
                  Alexandra is a seasoned veteran in the ML tooling industry with over eight years of experience. She started her journey as the first software engineer at @SigOpt and has been dedicated to making machine learning effortless and user-friendly ever since. Alexandra"s background includes working on recommender systems in the fashion tech industry, which inspired her to create Rubber Ducky Labs as a suite of dream tools she wished she had during her own experiences.              </p>
              </div>
            </Fade>
          </div>

          <div className="flex flex-wrap border border-gray-300 p-4 md:p-6">
            <Fade triggerOnce cascade damping={0.5} direction="up">
              <div className="w-full flex flex-wrap justify-center items-center border-b border-dashed border-gray-300">
                <div className="w-full md:w-3/12 flex justify-center">
                  <img src={georgia} alt="Georgia" className="w-40" />
                </div>
                <div className="w-full md:w-9/12">
                  <div className="flex flex-wrap text-center">
                    <h4 className="w-full">Georgia Hong</h4>
                    <div className="w-full">
                      <div className="flex flex-wrap justify-center items-center">
                        <h5>CTO</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Fade>
            <Fade triggerOnce cascade damping={0.5} direction="up">
              <div className="w-full mt-4">
                <p className="text-justify">
                  Georgia is a highly skilled software engineer with a degree from the University of Waterloo. During her time in school, she completed six internships at prestigious companies such as Datadog, Cockroach Labs, Instagram, and SigOpt. After graduating, Georgia worked on Security and ML Infra at Meta, honing her expertise in these areas. With her wealth of experience, Georgia brings invaluable technical leadership to the team at Rubber Ducky Labs.              </p>
              </div>
            </Fade>
          </div>
        </div>
      </section>
    </>
  )
}
