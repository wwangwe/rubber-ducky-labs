import React from 'react'

import { Header } from '../components'

import { internet } from "../assets"

export const Contact = () => {
    return (
        <>
            <Header title="Contact Us" image={internet} />
            <section className='py-8'>
                <div className="container mx-auto flex justify-between gapy-2 px-30">
                    <div className="w-1/2">
                        <h2 className="pb-4">Contact Us</h2>
                        <p className="text-justify">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Nullam auctor, nisl eget ultricies tincidunt, nunc nisl
                            aliquam mauris, eget ultricies nunc lorem eget nunc.
                        </p>
                    </div>
                    <div className="w-1/2">
                        <h2 className="pb-4">Contact Form</h2>
                        <form className="flex flex-col gap-4">
                            <div className="flex flex-wrap justify-between">
                                <input type="text" placeholder="First Name" className="border rounded-full py-2 px-3" />
                                <input type="text" placeholder="Last Name" className="border rounded-full py-2 px-3" />
                            </div>
                            <input type="text" placeholder="Company" className="border rounded-full py-2 px-3" />
                            <input type="text" placeholder="Email" className="border rounded-full py-2 px-3" />
                            <textarea placeholder="Message" className="border rounded-full py-2 px-3" />
                            <button className="bg-accent text-white rounded-full py-2 px-3">Submit</button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}
