define(["app/data", "piece/header", "piece/footer"], function(data, Header, Footer){
    var About = {};
    
    About.oninit = function(){
        this.data = data;
        this.data.CurrentPage = "about"
    }

    About.view = function(){
        return m(".about", [
            m(Header),
            m("img[src='./img/BackgroundAbout.jpg'].background-fade.fade-in-slow"), // This is an image that gets put in the background, flavor in each page
            m(".container.fade-in", [
                m("h1", "Todo"),
                m("p", "Everything about bookword, and what we do")
            ]),
            m(Footer)
        ])
    }

    return About
})