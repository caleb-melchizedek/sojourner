// Wrap every letter in a span
 var textWrapper1 = document.querySelector('.ml11 .letters');
 console.log(textWrapper1)
 textWrapper1.innerHTML = textWrapper1.textContent.replace(/([^\x00-\x80]|\w|[?\,\"])/g, "<span class='letter'>$&</span>");

 var textWrapper2 = document.querySelector('.ml12 .letters');
 console.log(textWrapper2)
 textWrapper2.innerHTML = textWrapper2.textContent.replace(/([^\x00-\x80]|\w|[?\,\"])/g, "<span class='letter'>$&</span>");

 var textWrapper3 = document.querySelector('.ml13 .letters');
 console.log(textWrapper3)
 textWrapper3.innerHTML = textWrapper3.textContent.replace(/([^\x00-\x80]|\w|[?\,\"])/g, "<span class='letter'>$&</span>");



anime.timeline({loop: true})
  .add({
    targets: '.ml11 .line',
    scaleY: [0,1],
    opacity: [0.5,1],
    easing: "easeOutExpo",
    duration: 700
  }).add({
    targets: '.ml12 .line',
    scaleY: [0,1],
    opacity: [0.5,1],
    easing: "easeOutExpo",
    duration: 700
  }).add({
    targets: '.ml13 .line',
    scaleY: [0,1],
    opacity: [0.5,1],
    easing: "easeOutExpo",
    duration: 700
  })


  .add({
    targets: '.ml11 .line',
    translateX: [0, document.querySelector('.ml11 .letters').getBoundingClientRect().width + 10],
    easing: "easeOutExpo",
    duration: 700,
    delay: 50
  }).add({
    targets: '.ml12 .line',
    translateX: [0, document.querySelector('.ml11 .letters').getBoundingClientRect().width + 10],
    easing: "easeOutExpo",
    duration: 700,
    delay: 50
  }).add({
    targets: '.ml13 .line',
    translateX: [0, document.querySelector('.ml11 .letters').getBoundingClientRect().width + 10],
    easing: "easeOutExpo",
    duration: 700,
    delay: 50
  })


  
  .add({
    targets: '.ml11 .letter',
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 600,
    offset: '-=775',
    delay: (el, i) => 34 * (i+1)
  }).add({
    targets: '.ml12 .letter',
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 600,
    offset: '-=775',
    delay: (el, i) => 34 * (i+1)
  }).add({
    targets: '.ml13 .letter',
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 600,
    offset: '-=775',
    delay: (el, i) => 34 * (i+1)
  })

  
  .add({
    targets: '.ml11, .ml12, .ml13',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 2000
  });