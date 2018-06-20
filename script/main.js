requirejs.config({
    baseUrl: "script/lib",
    paths:{
        app: "../app",
        page: "../app/pages",
        piece: "../app/pieces"
    }
});

requirejs([
    "page/home",
    "page/browse",
    "page/contact",
    "page/about",
    "page/view"
],
function(Home, Browse, Contact, About, View){
    m.route(document.body, "/", {
        "/": Home,
        "/about": About,
        "/browse": Browse,
        "/contact": Contact,
        "/view/:id": View
    })
});