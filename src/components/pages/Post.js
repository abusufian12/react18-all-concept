import React, {Suspense} from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

import FetchDataByAxios from '../dataFetching/fetch_by_axios';
import FetchDataByAsync from '../dataFetching/fetch_by_async';
import FetchDataBySwr from '../dataFetching/swr';
import FetchDataByReactQuery from '../dataFetching/fetch_by_react_query';

export default function Post(){

    const client = new QueryClient({
        defaultOptions: {
            queries: {
                suspense: true,
            },
        },
    });

    return(
        <div>
            <h2>This is Post Page</h2>
            {/* <FetchDataByAxios /> */}
            {/* <FetchDataByAsync /> */}
            {/* <Suspense fallback={<h1>Loading....</h1>}>
                <FetchDataBySwr />
            </Suspense> */}
            <QueryClientProvider client={client}>
                <Suspense fallback={<h1>Loading...</h1>}>
                    <FetchDataByReactQuery />
                    <FetchDataByReactQuery />
                </Suspense>
            </QueryClientProvider>
        </div>
    );
}

