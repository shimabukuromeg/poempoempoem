import React from 'react'
import { Poem } from './Poem';

export const PoemList = ({poems}) =>  {
    return poems.map(p => <Poem key={p.id} {...p}></Poem>);
}
