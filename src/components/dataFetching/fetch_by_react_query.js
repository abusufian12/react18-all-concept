import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';

import getQuoteData from '../Api/getQuoteApi';

export default function FetchDataByReactQuery({quote}){
    const {data} = useQuery("quote", () => getQuoteData());

    // console.log(data);

    return(
        <div>
            <h2>This is React Query</h2>
            <div>{data.content}</div>
        </div>
    )
}    