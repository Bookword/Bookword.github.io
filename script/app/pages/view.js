// This module returns the Mithril.js Component that represents the entirety of the Viewing Page
define(["app/data", "piece/header", "piece/footer", "piece/media"], function(data, Header, Footer, MediaListing){
    var Viewing = {};

    // Initializer
    Viewing.oninit = function(vnode){
        // Change the app data CurrentPage to help link actives
        data.CurrentPage = "view";
    }

    Viewing.GoBack = function(){
        window.history.back();
    }

    Viewing.oncreate = function(vnode){
        window.scrollTo(0,0);
    }
    
    Viewing.view = function(vnode){

        for(i=0;i<data.antiques.length;i++){
            if(data.antiques[i].Name == vnode.attrs.id){
                this.Antique = data.antiques[i];
                break;
            }
        }

        var Pieces = [];
        for(i=0;i<this.Antique.Media.length;i++){
            Pieces.push(m(MediaListing, {Data:this.Antique.Media[i]}, ""));
        }

        var Tags = [];
        this.Antique.Tags.forEach(t => {
            Tags.push(m("span.badge.badge-info.bookword-badge", t+" "));
        });

        var Overview = m("div.bookword-overview.push-down", {}, [
            m("div.overview-side", {}, [
                // Name of the product.
                m("h2.overview-title", this.Antique.Name),
                // Blurb
                m("span.overview-blurb", this.Antique.Blurb),
                // Asking price element
                m("br"),
                m("hr"),
                m("span.overview-price", this.Antique.Price != null ? "Asking Price of C$"+this.Antique.Price : "No Price available, please offer through Email if interested."),
                m("div.tags", Tags),
                m("a[href='#!/contact']", {}, "Contact us if you are interested in this piece.")
            ])
        ]);
        
        return m("div", [
            m(Header),
            m("div.container.fade-in", [
                Overview,
                m("div", Pieces),
                m("span.btn.btn-outline-info.btn-sm", {onclick: this.GoBack}, "Go back"),
            ]),
            m(Footer)
        ]);
    }

    return Viewing;
})