define(function(){
    return {
        antiques: [
            {
                Premium: true,
                PremiumDirectory: "Chinese",
                Frames:20,
                Name: "This one",
                FaceImage: "na",
                FullImage: "na",
                Price: 800,
                Blurb: "Beautiful small contemporary piece",
                FullDescription: "Very small piece of contemporary art",
                Tags: ["Chinese", "Pot", "Red", "Dragon", "Premium"]
            },
            {
                Premium: true,
                PremiumDirectory: "FancyBox",
                Frames:25,
                Name: "This one",
                FaceImage: "na",
                FullImage: "na",
                Price: 800,
                Blurb: "Beautiful small contemporary piece",
                FullDescription: "Very small piece of contemporary art",
                Tags: ["Chinese", "Pot", "Red", "Dragon", "Premium"]
            },
            {
                Name: "Testing",
                FaceImage: "https://i.imgur.com/4UBZzY8.png",
                FullImage: "https://i.imgur.com/4UBZzY8.png",
                Blurb: "Beautiful small contemporary piece",
                FullDescription: "Very small piece of contemporary art",
                Tags: ["Test", "Piece"]
            }
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