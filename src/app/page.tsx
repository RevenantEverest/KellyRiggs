import React from 'react';

import { Layout, Marquee } from '@/components/common';
import { Jumbotron, MyPromises, Testimonials } from '@/components/Homepage';
import { BookList } from '@/components/Books';

import { GEA, Hubblle, PPG, UNFI, Watco } from '@/components/common';

function Home() {

    const fill = "#ffffff";

    return (
        <React.Fragment>
            <Jumbotron />
            <Layout main className="pt-40! pb-10 md:pb-20 gap-50 md:gap-60 z-30">
                <Marquee gapBetween={20}>
                    <div className="flex w-fit gap-x-20 opacity-50 justify-center items-center">
                        <GEA height={200} width={200} fill={fill} />
                        <Hubblle height={200} width={200} fill={fill} />
                        <PPG height={150} width={150} fill={fill} />
                        <UNFI height={200} width={200} fill={fill} />
                        <Watco height={130} width={130} fill={fill} />
                    </div>
                </Marquee>
                <MyPromises />
                <Testimonials />
                <BookList />
            </Layout>
        </React.Fragment>
    );
};

export default Home;