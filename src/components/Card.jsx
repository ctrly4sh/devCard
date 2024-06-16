import React from "react";
import {Link} from "react-router-dom"

export default function Card() {
    return (
        <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="/">
                <img className="p-8 rounded-t-lg" src="https://i.pinimg.com/originals/e9/59/d6/e959d6733c5f169569b1d14146e5955a.jpg" alt="product_image1" />
            </a>
            <div className="px-5 pb-5">
                <a href="/">
                    <h5 className="text-xl font-fira text-center  tracking-tight text-gray-900 dark:text-white">
                    Yash aka y4sh 
                    </h5>

                    <h5 className="text-xl font-thin tracking-tight text-gray-900 dark:text-white text-center">
                    Programmer , Open Source , Tech Enth.
                    </h5>
                </a>
                <div className="flex items-center mt-2.5  mb-5">
                  
                </div>
                <div className="flex items-center justify-between">
                   
                    <a
                        href="https://github.com/ctrly4sh" target="_blank"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Github
                    </a>
                    <a
                        href="https://twitter.com/y4shofc" target="_blank"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Twitter
                    </a>
                    <a
                        href="https://dev.to/y4sh" target="_blank"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Dev.to
                    </a>
                    <a
                        href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=y4sh.dev@gmail.com" target="_blank"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Mail
                    </a>

                </div>
            </div>
        </div>
    );
}
