define([], function(){
    var Product = {};

    Product.oncreate = function(vnode){
        $(vnode.dom).find(".turntable").turntable();
    }

    Product.view = function(vnode){
        // This array holds every part, the image, the description, the button
        var pieces = [];
        var antique = vnode.attrs.product;

        // Media, look for thumbnail, else the last image
        if(antique.Media != null){
            var latest_image;
            for(i=0;i < antique.Media.length; i++){
                if(antique.Media[i].Type == "THUMBNAIL"){
                    pieces.push(m("img.card-img-top", {src:antique.Media[i].Path}, ""));
                    break;
                }
                if(antique.Media[i].Type == "IMAGE"){
                    latest_image = antique.Media[i].Path;
                }
            }
            if(latest_image != null){
                pieces.push(m("img.card-img-top", {src:latest_image}, ""));
            }
        }
        // Create the card body.
        var body_pieces = []

        // Push in title
        body_pieces.push(m("h4.text-center.title", antique.Name));

        // Various other optional pieces from the object.
        if(antique.Blurb != null) {
            body_pieces.push(m("p.card-text", antique.Blurb));
        }

        
        // Tags
        if(antique.Tags != null){
            var taglist = [];
            for(i = 0; i < antique.Tags.length;i++){
                taglist.push(m("span.badge.badge-info.bookword-badge", antique.Tags[i]+" "));
            }
            
            body_pieces.push(m("div.tag-box.push-down", taglist));
        }
        
        body_pieces.push(m("small", ["If you are interested in this or would like to learn more please ", m("a[href='#!/contact']", "contact us")]));
        body_pieces.push(m("br"));
        // Buttons for contact and deep link to the actual product!
        if(antique.Price != null) {
            body_pieces.push(m("span.badge.badge-lg.badge-primary", "C$"+antique.Price))
        }
        body_pieces.push(m("a.btn[href='#!/view/"+antique.Name+"']", "More Details"));

        pieces.push(m(".card-body", body_pieces))
        premium_size = vnode.attrs.product.Premium != null ? 6 : 4;
        return m(".col-sm-"+premium_size+".push-down", m(".card", pieces));
    }

    return Product;
})