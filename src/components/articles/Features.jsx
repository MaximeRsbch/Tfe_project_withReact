import axios from "axios";
import { useEffect, useState } from "react";

function Features() {
    return (
        <div>
            <div className="mx-auto container">
                <div className="flex justify-center md:px-5 xl:px-40 pt-10">
                    <div className="bg-white w-72 inline-block border rounded-md shadow-lg pt-2 pb-2 md:w-full">
                        <h1 className="text-center font-semibold mx-6 md:text-start">
                            La nouvelle attraction de walibi arrive enfin !!!!
                        </h1>
                        <p className="mx-6 text-center md:text-start">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Ipsa vitae omnis voluptatum, eaque facere
                            possimus.
                        </p>
                        <div className="grid grid-cols-2">
                            <p className="pl-4 pt-4">Walibi</p>
                            <div className="flex justify-end">
                                <div className="grid grid-cols-2">
                                    <img
                                        className="pt-4 w-4"
                                        src="assets/img/mess.png"
                                        alt=""
                                    />
                                    <span className="pt-3 pl-1">2</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Features;
