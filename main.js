var granimInstance = new Granim({
    element: '#canvas-basic',
    name: 'basic-gradient',
    direction: 'left-right',
    opacity: [1, 1],
    isPausedWhenNotInView: true,
    states : {
        "default-state": {
            gradients: [
                ['#AA076B', '#61045F'],
                ['#02AAB0', '#00CDAC'],
                ['#DA22FF', '#9733EE']
            ]
        }
    }
});
// var typed = new Typed('.Hi', {
//     strings: ["Her Man"],
//     typeSpeed: 120,
//     showCursor: false,


//   });

// var typed2 = new Typed('.Words', {
//     strings: ['<a href="https://www.instagram.com/iamyourdaddyloveyou/">@iamyourdaddyloveyou</a>'],
//     typeSpeed: 120,
//     startDelay: 1200,
//     backSpeed: 20,
//     backDelay: 500,
//     showCursor: false,
//     loop:true,


//     });
