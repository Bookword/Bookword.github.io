// This module defines a media item that, when given an object through {Data: object}
// during instantiation adapts to display the media item.

define([], function(){
    var MediaPiece = {};

    MediaPiece.init = function(vnode){
        
    }

    MediaPiece.oncreate = function(vnode){
        var Data = vnode.attrs.Data;
        // If this is a turntable, then use the DOM to initialize the plugin
        if(Data.Type == "TURNTABLE"){
            $(vnode.dom).find(".turntable-init").reel({
                images: Data.Path+"/#.jpg|1.."+Data.Frames,
                frames: Data.Frames,
                cw:true,
            });
        }
        if(Data.Type == "GALLERY"){
            new LuminousGallery($(".gallery-item"));
        }
    }

    MediaPiece.view = function(vnode){
        var Data = vnode.attrs.Data;
        // Depending on the .Type, set up the dom correctly
        if(Data.Type == "TITLE"){
            return m("h2.bookword-article-title", Data.Text);
        }
        if(Data.Type == "TURNTABLE"){
            return m("div.blackout.push-down",{},m("img.turntable-init", {src:Data.Path+"/1.jpg", width:640, height:360}, ""));
        }
        if(Data.Type == "IMAGE"){
            return m("img.bookword-image.push-down", {src:Data.Path}, "");
        }
        if(Data.Type == "MARKDOWN"){
            var Converter = new showdown.Converter();
            return m("p.easy-read", m.trust(Converter.makeHtml(Data.Text)));
        }
        if(Data.Type == "GALLERY"){
            var Images = [];
            for(i = 0; i<Data.Paths.length; i++){
                Images.push(m("a.gallery-item", {href: Data.Paths[i]}, m("img", {src:Data.Paths[i]}, "")));
            }
            return m(".gallery-container", {}, Images);
        }

        // Or just an empty element
        return m("div", "");
    }

    return MediaPiece;
})