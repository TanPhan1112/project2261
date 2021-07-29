import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function Documentation() {
    return (
        <div>
            <Header />
            <div className="container">
                <h2>Welcome you to visit our website!</h2>
                <p>This website shows the collection of dogs around the world. You can go to Our dogs to find pictures of your favourite dogs</p>
                <ul>
                    <li>Componentize: Home, Header, Footer, Dogs, DogsDetail, Documentation</li>
                    <li>Filtering: Search bar on Our dogs page</li>
                    <li>localStorage: Save dogs API</li>
                    <li>Consume a public API: axios</li>
                    <li>Client-side routing: /, /home, /dogs, /dogsdetail, /documentation</li>
                    <li>Deploy: Netlify</li>
                </ul>
                <p>
                    Contact developer:
                    <br></br>
                    minhtan111293@gmail.com
                    <br></br>
                    &#9742;; +6044413896
                </p>
            </div>
            <Footer />
        </div>
    );
}

export default Documentation;