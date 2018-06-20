define(["app/data"],function(data){
    var header = {};
    header.view = function(){
        // Populate the pages
        var cache_pages = [];
        
        for (i = 0; i < data.Pages.length; i++) {
            var classname = data.CurrentPage == data.Pages[i].url ? " active-url" : ""; // Generate the class name
            var element = m("li.nav-item", m("a.nav-link", {href:"#!/"+data.Pages[i].url, class:classname}, data.Pages[i].name)); // Make the element
            cache_pages.push(element);
        }

        var list = m("ul.navbar-nav", cache_pages)

        // The basic logo element for the navbar.
        var logo = m("img", {class: "header-image", src:"./img/logo.png"});

        return m(".navbar.navbar-dark.bg-dark.navbar-expand-lg.push-down", m(".container", [
            m("img.bookword-logo",{src:"img/Logo.png"},""),
            m("a.navbar-brand", "Bookword Bound"),
            // Right part of the nav bar
            m(".collapse.navbar-collapse", list)
        ]));
    }
    
    return header;
})