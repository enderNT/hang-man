
const textToEncrypt     = document.querySelector('#textToEncrypt');
const encryptedText     = document.querySelector('#encryptedText');
const encryptButton     = document.querySelector('#encryptButton');
const decryptButton     = document.querySelector('#decryptButton');
const copyButton        = document.querySelector('#copyButton');
const asideMessage      = document.querySelector('#asideMessage');
const asideNoMessage    = document.querySelector('#asideNoMessage');


textToEncrypt.addEventListener('keyup', (event) => {
    textToEncrypt.style.height = 'auto';
    let scHeight = event.target.scrollHeight;
    textToEncrypt.style.height = `${scHeight}px`;
});


encryptButton.addEventListener('click', (event) => {
    event.preventDefault();
    encryptedText.textContent = transformText('encrypt');
});


decryptButton.addEventListener('click', (event) => {
    event.preventDefault();
    encryptedText.textContent = transformText('decrypt');
});


copyButton.addEventListener('click', () => {
    navigator.clipboard.writeText(encryptedText.textContent).then(() => {
        copyButton.textContent = 'Copiado';
        copyButton.classList.remove('button--secondary');
        copyButton.classList.add('button--primary');
        setTimeout(() => {
            copyButton.textContent = 'Copiar';
            copyButton.classList.remove('button--primary');
            copyButton.classList.add('button--secondary');
        }, 2000);
    });
});