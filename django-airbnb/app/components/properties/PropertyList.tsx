'use client';

import { useEffect, useState } from 'react';
import PropertyListItem from "./PropertyListItem";

export type PropertiesType = {
    id: string;
    title: string;
    price_per_night: number;
    image_url: string;
}

const PropertyList = () => {
    const [properties, setProperties] = useState<PropertiesType[]>([]);
    const getProperties = async () => {
        const url = "http://localhost:8000/api/properties/";

        await fetch(url, {
            method: 'GET',
        })
            .then(response => response.json())
            .then((json) => {
                console.log('json', json);

                setProperties(json.data);
            })
            .catch((error) => {
                console.log('error', error);
            })
    };
    useEffect(() => {
        getProperties();
    }, []);
    
    return (
        <>
            {properties.map((properties) => {
                return (
                    <PropertyListItem 
                        key={properties.id}
                        properties={properties}
                    />
                )
            })}
        </>

    )
}

export default PropertyList;
