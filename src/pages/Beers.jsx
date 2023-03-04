import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../components/Header";
import { Link, useParams } from "react-router-dom";

function Beers() {
    const [oneBeer, setBeer] = useState([]);
    const { beerId } = useParams();///

    const getBeers = async () => {
        try {
            const response = await axios.get(
                "https://ih-beers-api2.herokuapp.com/beers"
            );
            setBeer(response.data);
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        getBeers();
    }, []);

    console.log(oneBeer);
    return (
        <>
            <div className="">
                <Header />
            </div>
            {oneBeer.map((oneBeer) => {
                return (
                    <Link to={`/beer/${oneBeer._id}`} className="text-decoration-none">
                        <div className="card mb-3 mx-auto" style={{ width: '38rem' }}>
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src={oneBeer.image_url} className="img-fluid rounded-start mt-2 mb-2 m-2 w-50 p-3 " id="imgAPI" alt={oneBeer.name} />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">{oneBeer.tagline}</h5>
                                        <p className="card-text"> Created by: {oneBeer.contributed_by}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                )
            })}
        </>
    )
}

export default Beers;