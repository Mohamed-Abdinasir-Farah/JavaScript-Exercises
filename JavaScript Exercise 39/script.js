const fromLanguage = document.getElementById('from-language');
const toLanguage = document.getElementById('to-language');
const translateButton = document.getElementById('translate-button');
const translatedText = document.getElementById('translated-text');

loadLanguages();

translateButton.addEventListener('click', translateText);

async function loadLanguages() {
  const url = 'https://microsoft-translator-text.p.rapidapi.com/languages?api-version=3.0';
  const options = {
    method: 'GET',
    headers: {
      'X-RapidApi-Key':
        'a582fcf629mshb0d908e0dcf10ebp16abb0jsn5d6111bf8267',
      'X-RapidApi-Host':
        'microsoft-translator-text.p.rapidapi.com',
      'Content-Type':
        'application/json'
    }
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    const languages = result.translation;

    fromLanguage.innerHTML = '';
    toLanguage.innerHTML = '';

    for (const languageCode in languages) {
      const languageName = languages[languageCode].name;
      const fromOption = document.createElement('option');
      fromOption.value = languageCode;
      fromOption.textContent = languageName;
      fromLanguage.appendChild(fromOption);

      const toOption = document.createElement('option');
      toOption.value = languageCode;
      toOption.textContent = languageName;
      toLanguage.appendChild(toOption);
    }
    fromLanguage.value = 'en';
    toLanguage.value = 'so';
  } catch (error) {
    console.error('Error loading languages:', error);
  }
}

async function translateText() {
  const text = document.getElementById('translation-input').value;
  const from = fromLanguage.value;
  const to = toLanguage.value;

  if(!text.trim()) {
    alert('Please enter text to translate.');
    return;
  }

  translatedText.textContent = 'Translating...';
  
  const url = `https://microsoft-translator-text.p.rapidapi.com/translate?api-version=3.0&from=${from}&to=${to}`;
             

  const options = {
    method: 'POST',
    headers: {
      'X-RapidApi-Key': 'a582fcf629mshb0d908e0dcf10ebp16abb0jsn5d6111bf8267',
      'X-RapidApi-Host': 'microsoft-translator-text.p.rapidapi.com',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify([{ text: text }])
  };

  try {
    const response = await fetch(url, options);
    console.log('Status:', response.status);      
    const result = await response.json();
    console.log('Full result:', result);
    // console.log(JSON.stringify(result, null, 2));           

    translatedText.textContent = result[0].translations[0].text;
  } catch (error) {
    console.error('Error:', error);
    translatedText.textContent = 'Translation failed.';
  }
}
