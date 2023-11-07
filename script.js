Shery.imageEffect(".back", {
    style: 4,
    config: {"uColor":{"value":false},"uSpeed":{"value":1,"range":[0.1,1],"rangep":[1,10]},"uAmplitude":{"value":1.53,"range":[0,5]},"uFrequency":{"value":2.73,"range":[0,10]},"geoVertex":{"range":[1,64],"value":30.68},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":2.148190111735243},"gooey":{"value":true},"infiniteGooey":{"value":true},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":false},"maskVal":{"value":1,"range":[1,5]},"scrollType":{"value":0},"noEffectGooey":{"value":false},"onMouse":{"value":1},"noise_speed":{"value":0.58,"range":[0,10]},"metaball":{"value":0.18,"range":[0,2],"_gsap":{"id":3}},"discard_threshold":{"value":0.62,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
    gooey:true,
});
var elems = document.querySelectorAll(".elem");

elems.forEach(function (elem) {
    var allh1 = elem.querySelectorAll("h1");
    var index = 0;
    var animating = false;
    document.querySelector(".main").addEventListener("click", function () {
        if (!animating) {
            animating = true;
            gsap.to(allh1[index], {
                top: "-=100%",
                ease: Expo.easeInOut,
                duration: 0.8,
                onComplete: function () {
                    gsap.set(this._targets[0], { top: "100%" });
                    animating = false;
                },
            });

            index === allh1.length - 1 ? (index = 0) : index++;

            gsap.to(allh1[index], {
                top: "-=100%",
                ease: Expo.easeInOut,
                duration: 1,
            })
        }
    })

})
