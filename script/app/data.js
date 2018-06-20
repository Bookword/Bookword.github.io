define(function(){
    return {
        antiques: [
            {
                Name: "Chinese Tea Set",
                Blurb: "A beautiful dragon wraps around this beautiful authentic Tea Set \
                over top of a vibrant red set, including an intricate case.",
                Article: "Very **small** piece of contemporary art",
                Price: 800,
                Premium: true,
                Tags: ["Chinese", "Pot", "Red", "Dragon", "Premium"],
                Media: [
                    {Type: "THUMBNAIL", Path: "img/ChineseTeaSet/Packed.jpg"},
                    {Type: "TURNTABLE", Frames:19, Path:"img/ChineseTeaSet/Turntable"},
                ]
            },
            {
                Name: "Box",
                Blurb: "A beautiful dragon wraps around this beautiful authentic Tea Set \
                over top of a vibrant red set, including an intricate case.",
                Article: "Very **small** piece of contemporary art",
                Price: 800,
                Premium:true,
                Tags: ["Chinese", "Pot", "Red", "Dragon", "Premium"],
                Media: [
                    {Type: "THUMBNAIL", Path: "img/ChineseTeaSet/Packed.jpg"},
                    {Type: "TURNTABLE", Frames:24, Path:"img/FancyBox"},
                ]
            },
        ],
        Pages: [
            {url: "", name: "Home"},
            {url: "about", name:"About"},
            {url: "browse", name:"Browse Store"},
            {url: "contact", name:"Contact us!"},
        ],
        CurrentPage: "",
        Url: "http://localhost:3000/"
    }
})