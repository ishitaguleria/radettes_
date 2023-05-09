const videoElem = document.getElementById('video');
const errorElem = document.getElementById('error');
//Declare the MediaStreamConstraints object
const constraints = {
    audio: true,
    video: true
}

function openCamera() {
    navigator.mediaDevices.getUserMedia(constraints)
        .then(mediaStream => {
            
            videoElem.srcObject = mediaStream;

        }).catch(err => {
        
            errorElem.innerHTML = err;
            errorElem.style.display = "block";
        });

}