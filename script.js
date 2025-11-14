const symbolMap = {
    'A': '∣','B': '‒','C': 'ˁ','D': '●','E': '⋋','F': '⋌','G': '≺','H': '⋏','I': '≖','J': '≻','K': '⊼','L': '∦','M': '⋂','N': '⋃','O': '∅','P': '∸','Q': '∀','R': '∈','S': '∼','T': 'T','U': '∃','V': '⋎','W': 'w','X': 'X','Y': 'Y','Z': 'Ω'
};
const reverseSymbolMap = {};
for (const [key, value] of Object.entries(symbolMap)) reverseSymbolMap[value] = key;
reverseSymbolMap['ω'] = 'W';
reverseSymbolMap['Ω'] = 'Z';
let conversionType = 'alphabetToSymbol';
let history = [];
let lastInput = '';

function toggleConversion() {
    conversionType = conversionType === 'alphabetToSymbol' ? 'symbolToAlphabet' : 'alphabetToSymbol';
    document.getElementById('toggleButton').textContent = conversionType === 'alphabetToSymbol' ? 'Alphabet → Runora' : 'Runora → Alphabet';
    convertText();
}

function convertText() {
    const inputText = document.getElementById('inputText').value.toUpperCase();
    let outputText = '';
    if (conversionType === 'alphabetToSymbol') {
        for (let char of inputText) outputText += symbolMap[char] || char;
    } else {
        for (let char of inputText) outputText += reverseSymbolMap[char] || char;
    }
    document.getElementById('outputText').innerText = outputText;
    if (inputText.trim() && inputText !== lastInput) {
        history.push({ input: inputText, output: outputText });
        lastInput = inputText;
        updateHistory();
    }
}

function updateHistory() {
    const historyList = document.getElementById('historyList');
    historyList.innerHTML = history.slice(-5).map(item => `<div class="history-item" onclick="useHistoryItem('${item.input}')"><strong>${item.input}</strong> → ${item.output}</div>`).join('');
}

function useHistoryItem(input) {
    document.getElementById('inputText').value = input;
    convertText();
}

function copyOutput() {
    const outputText = document.getElementById('outputText').innerText;
    if (!outputText) {
        alert('No converted text to copy.');
        return;
    }

    if (navigator.clipboard && window.isSecureContext) {
        // Modern async clipboard API
        navigator.clipboard.writeText(outputText).then(() => {
            alert('Converted text copied to clipboard!');
        }).catch(err => {
            console.error('Failed to copy text using clipboard API:', err);
            fallbackCopyTextToClipboard(outputText);
        });
    } else {
        // Fallback for older browsers or insecure contexts
        fallbackCopyTextToClipboard(outputText);
    }
}

function fallbackCopyTextToClipboard(text) {
    const textArea = document.createElement('textarea');
    textArea.value = text;

    // Avoid scrolling to bottom
    textArea.style.top = "0";
    textArea.style.left = "0";
    textArea.style.position = "fixed";

    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
        const successful = document.execCommand('copy');
        if (successful) {
            alert('Converted text copied to clipboard!');
        } else {
            alert('Failed to copy text.');
        }
    } catch (err) {
        alert('Failed to copy text.');
        console.error('Fallback copy failed:', err);
    }

    document.body.removeChild(textArea);
}

function clearText() {
    document.getElementById('inputText').value = '';
    document.getElementById('outputText').innerText = '';
}

function clearHistory() {
    history = [];
    lastInput = '';
    updateHistory();
}

function toggleTheme() {
    const body = document.body;
    const themeToggle = document.querySelector('.theme-toggle');
    if (body.classList.contains('dark')) {
        body.classList.remove('dark');
        themeToggle.textContent = '☀️';
    } else {
        body.classList.add('dark');
        themeToggle.textContent = '🌙';
    }
    themeToggle.classList.add('rotate');
    setTimeout(() => themeToggle.classList.remove('rotate'), 500);
    localStorage.setItem('theme', body.classList.contains('dark') ? 'dark' : 'light');
}

function loadTheme() {
    const savedTheme = localStorage.getItem('theme');
    const themeToggle = document.querySelector('.theme-toggle');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark');
        themeToggle.textContent = '🌙';
    } else {
        document.body.classList.remove('dark');
        themeToggle.textContent = '☀️';
    }
}

window.onload = function () {
    loadTheme();
    document.getElementById('mainContent').style.display = 'flex';
    document.getElementById('inputText').addEventListener('input', convertText);
};
