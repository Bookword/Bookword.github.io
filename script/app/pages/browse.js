// This module returns the Mithril.js Component that represents the entirety of the Browse Page
define(["app/data", "piece/header", "piece/footer", "piece/product"], function(data, Header, Footer, Product){
    var Browse = {};

    // Initializer
    Browse.oninit = function(vnode){
        // Change the app data CurrentPage to help link actives
        data.CurrentPage = "browse";
    }
    
    Browse.view = function(){
        // Create all the antique listing elements.
        var listings = [];
        for(var i = 0; i<data.antiques.length; i++){
            listings.push(m(Product, {product: data.antiques[i]}));
        }

        return m("div", [
            m(Header),
            m("img[src='./img/BackgroundBrowse.jpg'].background-fade.fade-in-slow"), // This is an image that gets put in the background, flavor in each page
            m("div.container.fade-in", [
                m("h1.title.text-center", "Available Antiques"),
                m("h4.text-center.sub-title.push-down", "Please visit us in person for a wider selection."),
                m(".row.justify-content-md-center", listings)
            ]),
            m(Footer)
        ]);
    }

    return Browse;
})