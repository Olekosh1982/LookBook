import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Items } from "./components/Items";




class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
      items:[
        {
          id:1,
          title:'Гарри Поттер и философский камень',
          img:'1.jpeg',
          desc:'Lorem ipsum dolor sit amet, consectetur adippsicing',
          category:'book',
          price:'500.00'
        },
        {
          id:2,
          title:'Гарри Поттер и философский камень',
          img:'1.jpeg',
          desc:'Lorem ipsum dolor sit amet, consectetur adippsicing',
          category:'book',
          price:'500.00'
        },
        {
          id:3,
          title:'Гарри Поттер и философский камень',
          img:'1.jpeg',
          desc:'Lorem ipsum dolor sit amet, consectetur adippsicing',
          category:'book',
          price:'500.00'
        },
        {
          id:4,
          title:'Гарри Поттер и философский камень',
          img:'1.jpeg',
          desc:'Lorem ipsum dolor sit amet, consectetur adippsicing',
          category:'book',
          price:'500.00'
        },
          {
            id:5,
            title:'Гарри Поттер и философский камень',
            img:'1.jpeg',
            desc:'Lorem ipsum dolor sit amet, consectetur adippsicing',
            category:'book',
            price:'500.00'
          },
          {
            id:6,
            title:'Гарри Поттер и философский камень',
            img:'1.jpeg',
            desc:'Lorem ipsum dolor sit amet, consectetur adippsicing',
            category:'book',
            price:'500.00'
          }

      ]
    }
  }
  render() {
    return (
      <div className="wrapper">
        <Header />
        <Items/>
        <Footer />
      </div>
    )
  }
}

export default App;
