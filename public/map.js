/* Start Things Going After the Scene is Loaded
 ——————————————————————————————————————————————*/
document.querySelector('a-scene').addEventListener('loaded', function () {
 
  //var element = document.querySelector('#some-id');
  var playerEl = document.querySelector('#player');
  
    $("body").on("keydown",(e)=>{
    
    switch(e.keyCode){
      //R KEY PRESSED  
      case 82: 
        playerEl.body.el.setAttribute("position","0 20 0");
        break;
    }
     
  });
  

  
  $("body").on("keyup",(e)=>{
    
  });

  var totalTime = 0;
  //GAME WORLD UPDATE FUNCTION
  function update(dt){
    totalTime += dt;
    if(playerEl.object3D.position.y < 0.8){
      let x = playerEl.object3D.position.x;
      let z = playerEl.object3D.position.z;
      playerEl.body.el.setAttribute("position",`${x} 1.6 ${z}`);
      playerEl.body.el.setAttribute("velocity","0 0 0");
    }
  }
  //GAME LOOP
  var frameRate = 1000/60;
  var lastFrame = 0;
  var startTime = 0;
  var currentFrame;
  function gameLoop(time){  
    // time in ms accurate to 1 micro second 1/1,000,000th second
      currentFrame = Math.round((time - startTime) / frameRate);
      var deltaTime = (currentFrame - lastFrame) * frameRate;
      update(deltaTime);
      lastFrame = currentFrame;
      requestAnimationFrame(gameLoop);
    }
  window.requestAnimationFrame(gameLoop);
  
  //track 144835558
  var bgm = document.createElement('audio');
  var bgmUrlStart = 'https://api.soundcloud.com/tracks/';
  var bgmUrlEnd = '/stream?client_id=b9d11449cd4c64d461b8b5c30650cd06';
  bgm.src = bgmUrlStart + 144835558 + bgmUrlEnd;
  bgm.crossorigin = 'anonymous';
  bgm.autoplay = 'autoplay';
  bgm.loop = true;
  bgm.volume = 0.2;
  document.body.appendChild(bgm);
            
  //button to play music on IOS
  this.b = document.createElement('button');
  this.b.innerHTML = 'PLAY';
  this.b.addEventListener('click', onSelect.bind(this));
  document.body.appendChild(this.b);
  
  function onSelect(){
    bgm.src = bgmUrlStart + this.sel.val + bgmUrlEnd;
    bgm.crossorigin = 'anonymous';
    bgm.autoplay = 'autoplay';
    
    bgm.play();
    bgm.volume = 0.2;
  }
  
});