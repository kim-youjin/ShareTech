import React from 'react';
import {Button, Image} from 'semantic-ui-react'
import './bannerslide.css';
//import './App.css';

import Category from "./category.js"
import Search from "./search.js"
import Loginlink from "./loginlink.js"
import Bannerslide from "./bannerslide.js"
import Recommend from "./recommend.js"
import Topclassslide from "./topclassslide.js"

import Sharetech from "./sharetechlogo.png"
//import banner1 from "./banner1.png"
//import banner2 from "./banner2.png"

function App() {
  return (
    <div>
      <div style={{width: '100%' , background: 'white', position: 'fixed', zIndex: 100}}>
      <Loginlink style={{display: 'inline-block'}}/>
      <Image src = {Sharetech} width="200" style={{display: 'inline-block', marginLeft: 50}}/>
      <Search style={{display: 'inline-block'}}/>
      <Category position='middle'/>
      </div>
      // <div>
      // <Category position='middle'/>
      // </div>
      <br/>
      <br/>
      <br/>
      <br/>

      <div>
      <Bannerslide />
      </div>
      <div>
      <p style={{margin: 30, fontSize: 30, textAlign: 'center'}}> 추천 카테고리 </p>
      <Recommend style={{display: 'inline-block'}}/>
      </div>

      <div>
      <p style={{margin: 30, fontSize: 30, textAlign: 'center'}}> TOP 10 클래스 </p>
      <Topclassslide style={{display: 'inline-block'}}/>
      </div>

      <div>
      <p style={{margin: 30, fontSize: 30, textAlign: 'center'}}> 인기있는 신규 클래스 </p>
      </div>

    </div>
  );
}

export default App;
