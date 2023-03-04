import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "./Header";


function BeerDetails() {
    const [oneBeer, setBeer] = useState(null);
    const { beerId } = useParams();

    useEffect(() => {
        axios
            .get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
            .then((res) => {
                setBeer(res.data);
            })
            .catch((err) => console.log(err));
    }, [beerId]);

    return (
        <>
            <Header />
            <div className="">
                {oneBeer && (
                    <div className="card mb-3 mx-auto" style={{ width: '540px' }}>
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img
                                    className="img-fluid rounded-start m-2 p-3"
                                    src={oneBeer.image_url}
                                    alt={oneBeer.name}
                                />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h1 className="card-title">{oneBeer.name}</h1>
                                    <p className="card-text fst-italic">{oneBeer.tagline}</p>
                                    <p className="card-text"><strong>Created:</strong> {oneBeer.first_brewed}</p>
                                    <p className="card-text"><strong>Alcohol:</strong> {oneBeer.abv} %</p>
                                    <p className="card-text"><strong>Attenuation Level:</strong> {oneBeer.attenuation_level}</p>
                                    <p className="card-text"><strong>Description:</strong> {oneBeer.description}</p>
                                    <br />
                                    <br />
                                    <p className="card-text"><small className="text-muted"><strong>Created by:</strong> {oneBeer.contributed_by}</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}

export default BeerDetails;