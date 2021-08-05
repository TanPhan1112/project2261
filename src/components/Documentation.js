import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function Documentation() {
    return (
        <div>
            <Header />
            <div className="container">
                <h2>Welcome you to visit our website!</h2>
                <p>This website shows the collection of dogs around the world. You can go to Our dogs to find pictures of your favourite dogs. Also, you can switch between light and dark themes of your favourite.</p>
                <ul>
                    <li>Componentize: Home, Header, Footer, Dogs, DogsDetail, Documentation, To-do: Internationalization (still under development)</li>
                    <li>Filtering: Search bar on Our dogs page</li>
                    <li>localStorage: Save dogs API</li>
                    <li>Consume a public API: axios</li>
                    <li>Global state: GlobalStyles. Redux or the Context API: A dark/light mode toggle</li>
                    <li>Client-side routing: /, /home, /dogs, /dogsdetail, /documentation</li>
                    <li>Deploy: Netlify</li>
                </ul>
                <h3>References</h3>
                <ul>
                    <li><a href="https://reactjsexample.com/responsive-react-masonry-photo-gallery-component/">https://reactjsexample.com/responsive-react-masonry-photo-gallery-component/</a></li>
                    <li><a href="https://pixabay.com/vectors/magnifying-glass-search-search-bar-1976105/">https://pixabay.com/vectors/magnifying-glass-search-search-bar-1976105/</a></li>
                    <li><a href="https://pixabay.com/illustrations/feet-icon-button-silhouette-1459485/">https://pixabay.com/illustrations/feet-icon-button-silhouette-1459485/</a></li>
                    <li><a href="https://dev4life-tech.medium.com/setup-reactjs-with-i18n-854c4effbd2">https://dev4life-tech.medium.com/setup-reactjs-with-i18n-854c4effbd2</a></li>
                </ul>
                <p>
                    Contact developer:
                    <br></br>
                    minhtan111293@gmail.com
                    <br></br>
                    &#9742; +6044413896
                </p>
            </div>
            <Footer />
        </div>
    );
}

export default Documentation;