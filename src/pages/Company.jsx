import React from 'react'

import { Fade } from 'react-awesome-reveal'

import { Skeleton } from '../layouts/Skeleton'
import { Header } from '../components'
import { duck } from "../assets"

export const Company = () => {
    return (
        <>
            <Header title="Who We Are" image={duck}>
                <h5 className="text-white hidden sm:block sm:text-sm lg:text-base">
                    Welcome to Rubber Ducky Labs - the ultimate solution to avoid tone-deaf product recommendations in the e-commerce industry.
                </h5>
            </Header>
            <section className="py-2">
                <Skeleton>
                    <div className="py-0 sm:py-2 lg:py-6">
                        <Fade triggerOnce cascade damping={0.5} direction="up">
                            <h3 className="text-center py-4">Our Story</h3>
                            <p className="text-justify">
                                Our co-founders, Alexandra and Georgia, have over a decade of experience in fashion tech, B2B ML tooling, and high-scale data infrastructure. With a passion for simplifying machine learning and making it effortless to understand, they founded Rubber Ducky Labs to be the dream suite of tools that they wished existed for building recommender systems.
                            </p>
                        </Fade>
                    </div>
                    <div className="py-0 sm:py-2 lg:py-6">
                        <Fade triggerOnce cascade damping={0.5} direction="up">
                            <h3 className="text-center py-4">The Vision</h3>
                            <p className="text-justify">
                                At Rubber Ducky Labs, our mission is to make it easy for people with domain expertise to build intuition about and incorporate domain knowledge into their recommender systems. Today's launch is just the beginning, and we aim to consolidate business logic, preview side-by-side model comparisons, and launch production experiments, all within RDL's tools. We are dedicated to providing the best-in-class solution to our clients and helping them achieve their business objectives.
                            </p>
                        </Fade>
                    </div>
                    <div className="py-0 sm:py-2 lg:py-6">
                        <Fade triggerOnce cascade damping={0.5} direction="up">
                            <h3 className="text-center py-4">The Tech</h3>
                            <p className="text-justify">
                                Setting up Rubber Ducky Labs takes only 90 minutes with our first user. We offer a fully hosted web app that connects directly to your data warehouse on the backend to pull your custom metrics and data. No need to deploy any services or change any code, plus you get to bring your model! The web and API are authenticated with Auth0 to keep your data safe.
                            </p>
                        </Fade>
                    </div>
                </Skeleton>
            </section>
        </>
    )
}
