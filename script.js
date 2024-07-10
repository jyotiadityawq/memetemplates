const memeListContainer = document.getElementById('meme-list');
const popupContainer = document.getElementById('popup-container');
const popupImg = document.getElementById('popup-img');
const downloadBtn = document.getElementById('download-btn');
const closeBtn = document.getElementById('close-btn');

const memeFiles = [];
for (let i = 1; i <= 200; i++) {
    memeFiles.push(`memes${i}.png`);
}

for (let i = 0; i < memeFiles.length; i++) {
    const img = document.createElement('img');
    img.src = `assets/${memeFiles[i]}`;
    img.alt = `Meme ${i + 1}`;
    img.onclick = (function(file) {
        return function() {
            popupContainer.classList.add('show');
            popupImg.src = `assets/${file}`;
            downloadBtn.onclick = () => {
                const link = document.createElement('a');
                link.href = `assets/${file}`;
                link.download = file;
                link.click();
            };
        };
    })(memeFiles[i]);
    memeListContainer.appendChild(img);
}

closeBtn.onclick = () => {
    popupContainer.classList.remove('show');
};

popupContainer.onclick = e => {
    if (e.target === popupContainer) {
        popupContainer.classList.remove('show');
    }
};
