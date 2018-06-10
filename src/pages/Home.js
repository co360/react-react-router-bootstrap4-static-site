import React, {Component} from 'react';
import Navbar from '../components/Navbar';
import Jumbotron from '../components/Jumbotron';
import Footer from '../components/Footer';


class Home extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <Jumbotron title={"Title Here"} subtitle={"Subtitle here."}/>
                <div className="container">
                    <h2>Welcome</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore
                        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                        ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                        cillum
                    </p>



                </div>

                <Footer/>
            </div>
        );
    }
}

export default Home;