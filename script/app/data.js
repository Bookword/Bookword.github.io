define(function(){
    return {
        ServerURL: "localhost:8080",
        antiques: [
            {
                Name: "Yixing Clay Chinese Tea Set",
                Blurb: "A beautiful dragon wraps around this beautiful authentic Tea Set \
                with a vibrant red intricate patterned case.",
                Thumbnail: "img/ChineseTeaSet/Thumbnail.jpg",
                Price: 700,
                Premium: true,
                Tags: ["Chinese", "Pot", "Red", "Dragon", "Premium"],
                Media: [
                    {Type: "TURNTABLE", Frames:19, Path:"img/ChineseTeaSet/Turntable"},
                    {Type: "MARKDOWN", Text: "# Tea Pot \n \
A beautiful antique Yixing Clay teapot with an intricate pewter detailing around it, crested around \
the entire pot is a dragon ornament. The pot is in great condition  \n "},
                    {Type: "IMAGE", Path:""},
                    {Type:"TITLE", Text:"Basket Set"},
                    {Type: "MARKDOWN", Text: "The basket is well woven and in great shape with minor abrasions on the cloth that \
                    lines the insides."},
                    {Type: "MARKDOWN", Text: ""},
                ]
            },
            {
                Name: "Lotus Cindy Esty Purse",
                Blurb: "A cute green patterned lotus purse, signed by Cindy Esty, 2010",
                Thumbnail: "img/Purse/Turntable/2.jpg",
                Price: 500,
                Premium: true,
                Tags: ["Purse", "Wood", "Green", "Premium", "Cindy Esty"],
                Media: [
                    {Type: "TURNTABLE", Frames:24, Path:"img/Purse/Turntable"},

                    {Type:"TITLE", Text: "Lotus Purse"},
                    // Introduction Description
                    {Type: "MARKDOWN", Text: "A beautiful green lotus patterned purse with knotted tassel and engraved adornments from [Cindy Esty](https://cyndyesty.org/about), \
                    Model number 1651, made in 2010. Cindy Esty is a well esteemed brand that \
                    has made many others for many celebrities such as Oprah Winfrey, Alicia Keys and Michelle Obama.\
                    The purse is in great condition, having no replaced parts or major damage."},

                    {Type: "IMAGE", Path:"img/Purse/Model.png"},

                    // Model description
                    {Type:"TITLE", Text: "Model 1651"},
                    {Type: "MARKDOWN", Text: "This particular purse manufactured by Cindy Esty is model 1651, \
                    produced in 2010. Inside the purse is a scalloped mirror with \
                    a black and white leopard print lining and a metal piece on the bottom inscribed 'inspire'"},

                    {Type: "IMAGE", Path:"img/Purse/Inside.jpg"},
                    {Type: "IMAGE", Path:"img/Purse/Bottom.jpg"}
                ]
            },
        ],
        Pages: [
            {url: "", name: "Home"},
            //{url: "about", name:"About"}, TODO
            {url: "browse", name:"Browse Store"},
            {url: "contact", name:"Contact us!"},
        ],
        CurrentPage: "",
    }
})