let usPreview = document.getElementById('us-preview');
let rightAusImgbox = document.getElementById("rightAusImgbox");
let qrPreview = document.getElementById("qr-preview");
let QRcode = document.getElementById('QRcode');
let previewBox = document.getElementById('preview-box');
let preImg = document.getElementById('pre-img');
let previewBox2 = document.getElementById('preview-box2');
let preImg2 = document.getElementById('pre-img2');
let operators = document.querySelectorAll('#pre-function span');
let operators2 = document.querySelectorAll('#pre-function2 span');

usPreview.onmouseover = () => {
    usPreview.style.opacity = 1;
}
usPreview.onmouseout = () => {
    usPreview.style.opacity = "";
    usPreview.style.color = 'white';
}
usPreview.onclick = () => {
    preImg2.style.transform = 'scale3d(1,1,1) rotate(0deg)';
    previewBox2.style.display = 'block';
    document.documentElement.style.overflowY = 'hidden';
    previewBox2.style.animation = 'getbig .5s linear forwards';
}
qrPreview.onmouseover = () => {
    qrPreview.style.opacity = 1;
}
qrPreview.onmouseout = () => {
    qrPreview.style.opacity = "";
    qrPreview.style.color = 'white';
}
qrPreview.onclick = () => {
    preImg.style.transform = 'scale3d(1,1,1) rotate(0deg)';
    previewBox.style.display = 'block';
    document.documentElement.style.overflowY = 'hidden';
    previewBox.style.animation = 'getbig .5s linear forwards';
}
operators[0].onclick = () => {
    previewBox.style.display = 'none';
    document.documentElement.style.overflowY = 'scroll';
}
operators[1].onclick = () => {
    preImg.style.transform += `scale(2)`;
}
operators[2].onclick = () => {
    preImg.style.transform += `scale(0.5)`;
}
operators[3].onclick = () => {
    preImg.style.transform += 'scale3d(1,1,1) rotate(90deg)';
}
operators[4].onclick = () => {
    preImg.style.transform += 'scale3d(1, 1, 1) rotate(-90deg)';
}
operators2[0].onclick = () => {
    previewBox2.style.display = 'none';
    document.documentElement.style.overflowY = 'scroll';
}
operators2[1].onclick = () => {
    preImg2.style.transform += `scale(2)`;
}
operators2[2].onclick = () => {
    preImg2.style.transform += `scale(0.5)`;
}
operators2[3].onclick = () => {
    preImg2.style.transform += 'scale3d(1,1,1) rotate(90deg)';
}
operators2[4].onclick = () => {
    preImg2.style.transform += 'scale3d(1, 1, 1) rotate(-90deg)';
}