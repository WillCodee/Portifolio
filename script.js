//script do menu toggle de fechamento
    document.querySelectorAll('.menu a').forEach(link => { /*faz iteração sobre os cliques*/
        link.addEventListener('click', () => { /*espera ouvir os cliques*/
            document.getElementById('menu-toggle').checked = false;
            /*encontra os chekbox do menu e depois fecha*/
        });
    });

    //script para efeito de video ao tocar
   const videos = document.querySelectorAll('video')

   videos.forEach(videoAtual => {
    videoAtual.addEventListener('play',function(){
        videos.forEach(outroVideo => {
            if(outroVideo !== videoAtual){
                outroVideo.pause()
            }
        })
    })
})


//Script do Slicer da Sessão de Certificados
let count = 1
document.getElementById("radio1").checked = true;

setInterval( function(){
    nextImage()
},5000)

function nextImage(){
    count++
    if(count>3){
        count = 1
    }

    document.getElementById("radio"+count).checked = true;
}


