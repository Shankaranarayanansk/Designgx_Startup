import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export function Contact() {
    return (
        <section className="px-8 py-8 lg:py-16" id="Contact">
            <div className="container mx-auto text-center">
                <h5 className="mb-4 text-base lg:text-2xl text-blue-gray-800 font-extrabold" data-aos="fade-up">
                    Connect with DesignGX
                </h5>
                <h1 className="mb-4 text-3xl lg:text-5xl text-blue-gray-900" data-aos="fade-up" data-aos-delay="100">
                    Let’s develop your business with us
                </h1>              
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="w-full h-full" data-aos="fade-right">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125343.2503989286!2d77.9855557097553!3d10.965140584852168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baa2f072495398f%3A0x947cfc7a1f7d9f1b!2sKarur%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1725167287117!5m2!1sen!2sin"
                            width="100%"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                    <form action="#" className="flex flex-col gap-4" data-aos="fade-left">
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="mb-2 text-left font-medium text-gray-900">
                                    First Name
                                </label>
                                <input
                                    type="text"
                                    placeholder="First Name"
                                    name="first-name"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
                                />
                            </div>
                            <div>
                                <label className="mb-2 text-left font-medium text-gray-900">
                                    Last Name
                                </label>
                                <input
                                    type="text"
                                    placeholder="Last Name"
                                    name="last-name"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
                                />
                            </div>
                        </div>
                        <div>
                            <label className="mb-2 text-left font-medium text-gray-900">
                                Your Email
                            </label>
                            <input
                                type="email"
                                placeholder="name@email.com"
                                name="email"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
                            />
                        </div>
                        <div>
                            <label className="mb-2 text-left font-medium text-gray-900">
                                Your Message
                            </label>
                            <textarea
                                rows={6}
                                placeholder="Message"
                                name="message"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full py-3 text-white bg-gray-800 rounded-md hover:bg-gray-700"
                        >
                            Send message
                        </button>
                    </form>
                </div>
                <div className="mt-12 flex flex-col lg:flex-row justify-center gap-6 text-gray-700">
                    <div className="flex items-center gap-2">
                        <FaMapMarkerAlt className="text-lg" />
                        <span>Karur, Tamil Nadu</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <FaPhoneAlt className="text-lg" />
                        <span>+91 84288 58296</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <FaEnvelope className="text-lg" />
                        <span>selvabuisnessman@gmail.com</span>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
