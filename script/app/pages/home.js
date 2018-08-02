define(["app/data", "piece/header", "piece/footer"], function(data, Header, Footer){
    var home = {}

    // Change data's current page to "" which is home.
    home.oninit = function(){
        data.CurrentPage = "";
    }

    // Returns the element that represents home.
    home.view = function(){
        return m("div", [
            m(Header),
            //m("img[src='./img/BackgroundHome.jpg'].background-fade.fade-in-slow"), // This is an image that gets put in the background, flavor in each page
            m("div.container.fade-in", [
                // Jumbotron introduction
                m(".jumbotron", [
                    m("h1.display-3", "Quality, Quantity, Experience"),
                    m("p.lead", "At Bookword Bound, you don't have to pick just one."),
                ]),
                m("img.bookword-banner.push-down", {src:'./img/Yard.jpg'}, ""),
                // Side by side intro AND quick info
                m(".row", [
                    // Left side
                    m(".col-8", [
                        m("p", "Be it hand made books or intriguing antiques, we have many high quality antiques and restored books \
                        at great prices. Please contact us for any inquiries about pricing or to see more of our wares.")
                    ]),
                    // Quick contact info
                    m(".col-4.align-self-center", [
                        m("h5.push-down", "Quick contact information"),
                        m("p", "Email: coljoja@hotmail.com"),
                        m("p", ["Phone: ",m('a[href="tel:1-902-249-0310"]', "(902) 249 0310")]),
                        m("p", ["Website: ",m("a",{href:"http://www.bookwordbound.com"},"www.bookwordbound.com")])
                    ])
                ])
            ]),
            m(Footer)
        ])
    }

    return home;
})