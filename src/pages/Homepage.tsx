import * as React from 'react';

interface IHomepageProps {
}

const Homepage: React.FunctionComponent<IHomepageProps> = (props) => {
    return (
        <div>
            <header className='font-black text-2xl text-blue-600'>
                facebook
            </header>
        </div>
    );
};

export default Homepage;
