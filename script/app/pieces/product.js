define([], function(){
    var Product = {};

    Product.oncreate = function(vnode){
        $(vnode.dom).find(".turntable").turntable();
    }

    Product.view = function(vnode){
        // This array holds every part, the image, the description, the button
        var pieces = [];
        var antique = vnode.attrs.product;

        // Premium items get a turntable view
        if(antique.FaceImage != null) {
            // Turntable
            if(antique.Premium != null){
                var l = [];
                for(i = 1; i < antique.Frames+1; i++){
                    l.push(m("li",{"data-img-src":"./img/"+antique.PremiumDirectory+"/"+i+".jpg"},""));
                }
                pieces.push(m("div.turntable", m("ul", l)));
            }else{
                pieces.push(m("img[src="+antique.FaceImage+"].card-img-top"));
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

        // Buttons for contact and deep link to the actual product!
        if(antique.Price != null) {
            body_pieces.push(m("a.btn.btn-primary[href='#!/contact']", "C$"+antique.Price))
        }else{
            body_pieces.push(m("a.btn.btn-primary[href='#!/contact']", "Contact Us!"))
        }
        body_pieces.push(m("a.btn[href='#!/view/"+antique.Name+"']", "More Details"));

        pieces.push(m(".card-body", body_pieces))
        premium_size = vnode.attrs.product.Premium != null ? 6 : 4;
        return m(".col-sm-"+premium_size+".push-down", m(".card", pieces));
    }

    return Product;
})