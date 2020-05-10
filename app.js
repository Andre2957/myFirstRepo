 let songs=[
    "Ava Max - Kings and Queens",
    "Dream Theater - Take Your Fingers From My Hair",
    "Flo Rida - Low",
    "John Cena - John Cena Theme",
    "Eminem, Tech9, Tupac (remix) - Till I Die"
    ]
let mp3=".mp3"
let listInfo=[];
let currentSong;


function createList() {
    var songList=document.createElement("ol")
    for (let i = 0; i < songs.length; i++) {
        var item=document.createElement("li")
        item.appendChild(document.createTextNode(songs[i]))
        songList.appendChild(item)
       
        listInfo[i]={listPosition:i,songName:songs[i]}
    }
    document.querySelectorAll("div")[2].appendChild(songList)
}
createList()
    
    for (let i = 0;i < songs.length; i++) {
         
            document.querySelectorAll("li")[i].addEventListener("click",function(){
                document.querySelectorAll("source")[0].src="songs/"+document.querySelectorAll("li")[i].innerHTML+mp3
            
                document.querySelectorAll("audio")[0].load()

                document.querySelectorAll("progress")[0].value=0

                
                document.getElementById("songName").innerHTML=document.querySelectorAll("li")[i].innerHTML
                currentSong=document.getElementById("songName").innerHTML
                
                for (let i = 0; i < document.getElementsByTagName("li").length; i++) {
    
                    if (currentSong==document.getElementsByTagName("li")[i].    innerHTML){
                        document.getElementsByTagName("li")[i].style.   backgroundColor="#9696e4"
                    }
                    else{
                        document.getElementsByTagName("li")[i].style.   backgroundColor=""
                    }   
                        

                    
                }
            })
    }

document.getElementById("play").addEventListener("click",function(){
    document.querySelectorAll('audio')[0].play()
    
})
    
document.getElementById("pause").addEventListener("click",function(){
    document.querySelectorAll('audio')[0].pause()
})  
    
document.getElementById("volumeSlider").addEventListener("input",function(){

        
    document.querySelectorAll('audio')[0].volume=document.getElementById("volumeSlider").value
    
})



document.querySelectorAll('audio')[0].addEventListener("timeupdate",function(){

    if (document.querySelectorAll('audio')[0].currentTime > 0){

        document.querySelectorAll("progress")[0].max=document.querySelectorAll('audio')[0].duration

        document.querySelectorAll("progress")[0].value =document.querySelectorAll('audio')[0].currentTime
        
        if (document.querySelectorAll("progress")[0].value==document.querySelectorAll("progress")[0].max) {
            for (let i = 0; i < listInfo.length; i++) {
        
                if(currentSong==listInfo[i].songName){
                    document.querySelectorAll("source")[0].src="songs/"+document.querySelectorAll("li")[i+1].innerHTML+mp3
                    console.log(document.querySelectorAll("source")[0].src)
                    document.querySelectorAll("audio")[0].load()
                    document.querySelectorAll("audio")[0].play()
                    currentSong=listInfo[i+1].songName
                    document.getElementById("songName").innerHTML=currentSong
                    for (let i = 0; i < document.getElementsByTagName("li").length; i++) {
    
                        if (currentSong==document.getElementsByTagName("li")[i].    innerHTML){
                            document.getElementsByTagName("li")[i].style.   backgroundColor="#9696e4"
                        }
                        else{
                            document.getElementsByTagName("li")[i].style.   backgroundColor=""
                        }   
                    }

                    break;
                }
            }        
        }
    }
    
})

document.querySelectorAll("progress")[0].addEventListener("click",function(event){
    if (document.querySelectorAll('audio')[0].currentTime>0) {
        
        let clickPos=(event.pageX-this.offsetLeft)/200
        document.querySelectorAll('audio')[0].currentTime=clickPos*document.querySelectorAll('audio')[0].duration
    }
        
})


document.getElementById("fb").addEventListener("click",function(){
    
    if (document.querySelectorAll('audio')[0].currentTime<5) {
        for (let i = 0;  i< songs.length; i++) {
        
            if (currentSong==listInfo[i].songName) {
                
                document.querySelectorAll("source")[0].src="songs/" +document.querySelectorAll("li")[i-1].innerHTML+mp3
                document.querySelectorAll("audio")[0].load()
                document.querySelectorAll("audio")[0].play()
                
                currentSong=listInfo[i-1].songName
                break;
            }
            
        }
    for (let i = 0; i < document.getElementsByTagName("li").length; i++) {
    
    if (currentSong==document.getElementsByTagName("li")[i].    innerHTML){
        document.getElementsByTagName("li")[i].style.   backgroundColor="#9696e4"
        
    }
}
        
    }


    document.getElementById("songName").innerHTML=currentSong


    if (document.querySelectorAll('audio')[0].currentTime>0) {
        document.querySelectorAll('audio')[0].currentTime=0

        document.querySelectorAll('audio')[0].play()

    }

    for (let i = 0; i < document.getElementsByTagName("li").length; i++) {
    
        if (currentSong==document.getElementsByTagName("li")[i].    innerHTML){
            document.getElementsByTagName("li")[i].style.   backgroundColor="#9696e4"
        }
        else{
            document.getElementsByTagName("li")[i].style.   backgroundColor=""
        }   
    }


})

document.getElementById("b").addEventListener("click",function(){

    document.querySelectorAll('audio')[0].currentTime=document.querySelectorAll('audio')[0].currentTime-5


})

document.getElementById("f").addEventListener("click",function(){

    document.querySelectorAll('audio')[0].currentTime=document.querySelectorAll('audio')[0].currentTime+5


})


document.getElementById("ff").addEventListener("click",function(){

    for (let i = 0;  i< songs.length; i++) {
        
        if (currentSong==listInfo[i].songName) {
            
            document.querySelectorAll("source")[0].src="songs/" +document.querySelectorAll("li")[i+1].innerHTML+mp3
            document.querySelectorAll("audio")[0].load()
            document.querySelectorAll("audio")[0].play()
            
            currentSong=listInfo[i+1].songName
            break;
        }
        
    }

    document.getElementById("songName").innerHTML=currentSong

    for (let i = 0; i < document.getElementsByTagName("li").length; i++) {
    
        if (currentSong==document.getElementsByTagName("li")[i].    innerHTML){
            document.getElementsByTagName("li")[i].style.   backgroundColor="#9696e4"
        }
        else{
            document.getElementsByTagName("li")[i].style.   backgroundColor=""
        }   
    }    
})
