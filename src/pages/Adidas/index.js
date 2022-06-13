import Products from '~/components/Products';
import { useEffect, useState } from 'react';
import axios from 'axios';

function Nike() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    // Note: the empty deps array [] means
    // this useEffect will run once
    // similar to componentDidMount()
    useEffect(() => {
        axios
            .get('http://26.17.209.162/api/shoes/get')
            .then(async (res) => {
                setItems(res.data);
                setIsLoaded(true);
                setItems(res.data);
            })
            .catch((error) => {
                setIsLoaded(true);
                setError(error);
            });
    }, []);
    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <div className="row">
                {items.map((item) => {
                    if (item.BRANDNAME === 'Adidas') {
                        return (
                            <div className="col l-3" key={item.SHOESID}>
                                <Products
                                    id={item.SHOESID}
                                    name={item.SHOESNAME}
                                    price={item.SHOESPRICE}
                                    imgID={item.IMAGEID}
                                    description={item.SHOESDESCRIPTION}
                                    brand={item.BRANDNAME}
                                />
                            </div>
                        );
                    }
                })}
            </div>
        );
    }
}

export default Nike;
