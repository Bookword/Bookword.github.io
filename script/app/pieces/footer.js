define(function(){
    var footer = {};
    footer.view = function(){
        return m(".container.footer",[
            m("h5", ["Bookword Bound Antiques", m("small"," 2016-"+(new Date()).getFullYear())]),
            m("small", "Please note that all prices given are in Canadian Dollars"),
            m("hr"),
            m("small", "For more information about any of our products on sale \
            please inquire on the phone or in person or via our email.")
        ])
    }
    return footer
})
