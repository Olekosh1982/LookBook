import React from 'react'
import {ways} from '../data'
import WayToTeach from "./components/WayToTeach";

export default function TeachingSection() {
  return (
    <section>
          <h3> Каталог книг</h3>
          <ul>
            {ways.map((way)=>( <WayToTeach key={way.title} {...way}/>))}
        
          </ul>
        </section>
  )
}
