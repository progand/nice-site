jQuery(function () {
    
    TweenLite.from('#caption', 2, {rotation:360, rotationPoint: '50% 50%', textAlign: 'center', position: 'absolute', top: '50%',
                                   left: '50%', display: 'block', ease:Power3.easeInOut, onComplete: function(){
                                       $('#caption').show();
                                   }});
    
    TweenLite.from('#splash-partners-block', 1, {delay: 2, opacity:"0", ease:Power2.easeInOut});    
    TweenLite.from('#splash-partners-block-partners', 1, {delay: 4.1, top:"-20px", opacity:"0", ease:Power2.easeInOut});
    TweenLite.from('#splash-partners-block', 2, {delay: 5.1, bottom:"50%", ease:Back.easeOut});
    TweenMax.to('#splash-partners-block-partners', 70, {repeat: -1, delay: 7.1, left: '-2220px', ease:Linear.easeNone});

     
});