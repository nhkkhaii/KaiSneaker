import Slider from '~/components/Slider';
import { Fragment } from 'react';
import Brands from '~/components/Brands';
import Featured from '~/components/Featured';
import { useCookies } from 'react-cookie';

function Home() {
    return (
        <Fragment>
            <Slider />
            <div className="content grid wide">
                <Featured />
                <Brands />
            </div>
        </Fragment>
    );
}

export default Home;
