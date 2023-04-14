import React from 'react'

import { Fade } from 'react-awesome-reveal'
import { Link } from 'react-router-dom'

import { Header, Skeleton } from '../layouts'
import { Solid, SolutionCard, Break } from '../components'
import { demo1, demo2, gloves, legs, doors, duckOnDock } from '../assets'


export const Landing = () => {
    const solutions = [
        { icon: "fa-images", text: "Explore your data visually" },
        { icon: "fa-filter", text: "Facet, segment and filter data" },
        { icon: "fa-calendar-alt", "text": "View annual and seasonal trends" },
        { icon: "fa-cogs", text: "Consolidate and debug business logic" },
        { icon: "fa-search", text: "Drill down to individual item and user journeys" },
        { icon: "fa-chart-bar", "text": "Compare models and ranking changes" }
    ]
    return (
        <div>
            <Header />

            <Break text={"Why Choose Us?"} image={doors} top />

            <Skeleton>
                <Fade triggerOnce cascade damping={0.5} direction="up">
                    <h5 className="text-center text-gray-400 tracking-[6px] py-4">Check this out</h5>
                    <p>
                        Picture this - you're using an e-commerce app in the middle of summer and it's recommending ski jackets to you. Umm, what? Nobody told the algorithm that it's not ski season! Now you're wondering if this will drive away users and you have to file a ticket for the data science team to analyze it. But who knows how long that'll take? Frustrating, right?
                    </p>
                    <p>
                        That's where Rubber Ducky Labs comes in - we make sure your app's product recommendations are always on point.
                    </p>
                    {/* <div className="w-full bg-gray-50 p-1 my-8 rounded-3xl border">
                        <img src={demo1} draggable={false} className="rounded-lg" />
                    </div> */}
                </Fade>
            </Skeleton>

            <Break text={"Our Approach"} image={gloves} />

            <Skeleton>
                <Fade triggerOnce cascade damping={0.5} direction="up">
                    <h5 className="text-center text-gray-400 tracking-[6px] py-4">We can help you</h5>
                </Fade>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    <Fade triggerOnce cascade damping={0.5} direction="up" duration={500}>
                        {
                            solutions.map((solution, index) => {
                                return (
                                    <SolutionCard solution={solution} key={index} />
                                )
                            })
                        }
                    </Fade>
                </div>
            </Skeleton>

            <Break text={"What Makes Us Different?"} image={legs} />

            <Skeleton>
                <h5 className="text-center text-gray-400 tracking-[6px] py-4">Here's what you get</h5>
                <div className="flex flex-wrap justify-between">
                    <p className='w-full md:w-1/2 pr-0 sm:pr-4 text-justify'>
                        With Rubber Ducky Labs, you can easily figure out what's going on with your recommender system. You'll get answers in minutes, rather than waiting a week for the data science team to run some analysis.
                    </p>
                    <p className='w-full md:w-1/2 pl-0 sm:pl-4 text-justify'>
                        Our suite of tools allows you to explore your data visually, analyze individual user journeys, consolidate and debug your business logic, identify trends, segment and filter your data, and compare models and ranking changes side-by-side.
                    </p>
                    <div className="w-full bg-white p-2 my-4 border">
                        <img src={demo2} draggable={false} className="rounded-lg" />
                    </div>
                    <p className='w-full text-justify'>
                        It's all in one place, and you can get started in just 90 minutes. Plus, you get to bring your own model and we take care of keeping your data safe.
                    </p>
                </div>
            </Skeleton>

            <Break image={duckOnDock} bottom>
                <div className="relative flex flex-col justify-center items-center space-y-8 md:space-y-10 px-0 md:px-50 text-center">
                    <Fade triggerOnce cascade damping={0.5} direction="up">
                        <h3 className="text-white uppercase leading-[1.5] text-sm sm:text-2xl lg:text-4xl tracking-[5px] lg:tracking-[8px]">Maximize your sales with Rubber Ducky's <br /> advanced tools for e-commerce</h3>
                        <Solid>
                            <Link to="/contact/">
                                Get Started <i className="fa-solid fa-arrow-right ml-2"></i>
                            </Link>
                        </Solid>
                    </Fade>
                </div>
            </Break >
        </div >
    )
}
