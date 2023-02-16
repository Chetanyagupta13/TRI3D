let imageDisplayElement = document.getElementById('imageSrc');
let imageInputElement = document.getElementById('image');
let cropHeight = document.getElementById('height');
let cropWidth = document.getElementById('width');
let cropButton = document.getElementById('cropbtn');
let downloadButton = document.getElementById('download');
let canvasOutput = document.getElementById('canvasOutput');
let imgName = "";

imageInputElement.addEventListener('change', (e)=>{
    imgName = e.target.files[0].name;
    imageDisplayElement.src = URL.createObjectURL(e.target.files[0]);
});

cropButton.addEventListener('click', (e)=>{
    let src = cv.imread(imageDisplayElement);
    let mat = new cv.Mat();
    let dsize = new cv.Size(parseInt(cropHeight.value), parseInt(cropWidth.value));
    cv.resize(src, mat, dsize, 0, 0, cv.INTER_AREA);
    cv.imshow('canvasOutput', mat);
    mat.delete();
    src.delete();
});

downloadButton.addEventListener('click', (e)=>{
    const link = document.createElement('a')
    link.href = canvasOutput.toDataURL();
    link.download = imgName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
})



