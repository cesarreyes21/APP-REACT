import React from "react";
import { Navbar } from "../components/Navbar";
import Welcome from '../components/Welcome';

const Home = () => {
    return (
      <>
        <Navbar />
        <Welcome title="BIENVENIDO A TU AULA VIRTUAL" text="" />
  
        {/* <Layout>
          <div>
            <h1>Este es el hijo</h1>
          </div>
        </Layout> */}
        {/* <Content /> */}
        {/* <Footer /> */}
      </>
    );
  };
  
  export default Home;