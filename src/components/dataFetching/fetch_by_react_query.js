import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';

import getQuoteData from '../Api/getQuoteApi';

export default function FetchDataByReactQuery({get_data}){
    const {data} = useQuery("get_data", () => getQuoteData());

    return(
        <div>
            <h2>This is React Query</h2>
            <div>{data?.content}</div>
        </div>
    )
}    