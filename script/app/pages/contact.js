define(["app/data", "piece/header", "piece/footer"], function(data, Header, Footer){
    var Contact = {};

    // Initializer
    Contact.oninit = function(vnode){
        // Change the app data CurrentPage to help link actives
        data.CurrentPage = "contact";
    }

    Contact.view = function(){
        return m(".contact", [
            m(Header),
            m("img[src='./img/BackgroundContact.jpg'].background-fade.fade-in-slow"), // This is an image that gets put in the background, flavor in each page
            m("div.container.fade-in", [
                m("h2.text-center.push-down", "Come visit our store in person"),
                m("iframe", {width:'100%', height:'500px', style:"border:0;",  src:'https://www.google.com/maps/embed/v1/place?key=AIzaSyBASM94M89rrm-fK8hKJvJED9bqPMI_054&q=504+evangeline+trail'}, ""),
                m("hr"),
                m("p", "Email: coljoja@hotmail.com"),
                m("p", ["Phone: ",m('a[href="tel:1-902-249-0310"]', "(902) 249 0310")]),
            ]),
            m(Footer)
        ])
    }

    return Contact
})