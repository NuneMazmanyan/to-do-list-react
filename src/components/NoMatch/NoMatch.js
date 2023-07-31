import React from 'react';
import ReactLoading from "react-loading";
import {useNavigate} from "react-router";

const NoMatch = () => {
    const navigate = useNavigate();

    return (
        <div className="m-10 min-w-fit">
            <button onClick={() => navigate(-1)}
                    className="rounded-full bg-teal-700 text-white px-5 hover:bg-teal-600">
                &larr; Back
            </button>
            <div className="mt-28">
                <p className="text-5xl text-amber-300 text-center">Nothing found</p>
                <div className="mt-8 flex justify-center">
                    <ReactLoading
                        type={"spinningBubbles"}
                        color={"rgb(251 191 36)"}
                        height={70}
                        width={70}
                    />
                </div>
            </div>
        </div>
    );
}
export default NoMatch;
