// This module returns the Mithril.js Component that represents the entirety of the Viewing Page
define(["app/data", "piece/header", "piece/footer"], function(data, Header, Footer){
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
        if(this.ReelInformation == null){
            return;
        }
        
        $("#table").reel({
            images: this.ReelInformation.Path+"/#.jpg|1.."+this.ReelInformation.Frames,
            frames: this.ReelInformation.Frames,
            cw:true,
        });
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
            if(this.Antique.Media[i].Type == "TURNTABLE"){
                Pieces.push(m("img#table", {src:this.Antique.Media[i].Path+"/1.jpg", width:900, height:500}, ""));
                this.ReelInformation = {Path:this.Antique.Media[i].Path, Frames:this.Antique.Media[i].Frames};
            }
            if(this.Antique.Media[i].Type == "IMAGE"){
                Pieces.push(m("img", {src:this.Antique.Media[i].Path}, ""))
            }
        }
        

        var Converter = new showdown.Converter();
        return m("div", [
            m(Header),
            m("div.container.fade-in", [
                m("span.btn.btn-outline-info.btn-sm", {onclick: this.GoBack}, "Go back"),
                m("div", Pieces),
                m("hr"),
                m("h1.title.text-center", this.Antique.Name),
                m("p", m.trust(Converter.makeHtml(this.Antique.Article)))
            ]),
            m(Footer)
        ]);
    }

    return Viewing;
})