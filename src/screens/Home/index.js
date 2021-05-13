import React from 'react';
import './styles.css';
import { Jumbotron } from '../../components/Jumbotron/index'

export function Home() {
   return (
      <div>
         <Jumbotron />
         <div className="welcome">
            <h2>Welcome!</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et libero dignissim, dictum magna sed, euismod metus. Fusce ut ante lectus. Etiam ultrices orci turpis, nec auctor sem iaculis vitae. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut magna lectus, condimentum ultrices sollicitudin at, rutrum eget est. Ut nec diam felis. Nam et ex bibendum, dictum tellus nec, posuere lorem. Duis pulvinar ut nunc nec blandit. Proin nec eleifend nunc. Quisque velit purus, faucibus a metus at, facilisis consequat urna. Mauris aliquet gravida nulla, id luctus turpis tincidunt id. Praesent eleifend commodo hendrerit. Suspendisse convallis non orci.</p>
         </div>
      </div>
   )
};