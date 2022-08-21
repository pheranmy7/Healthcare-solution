// Group C (Health): health mgt that checks condition of patient before administered
// 1 tolulope folorunso
// 2 Obembe Sunday Dapo
// 3 kolade oluwatobiloba
// 4 bolarinwa timilehin
// 5 onipede ayoola
// 6 ayenumuro ayomide

const button = document.querySelector('.prompt-input');
let messageBox = document.querySelector('.msg');
let reset = document.querySelector('.reset');
let userDisease = document.querySelector('#condition');

const healthSysMgt = [
  { disease: 'malaria', drug: 'Artemether' },
  { disease: 'typhoid', drug: 'Cipro' },
  { disease: 'dementia', drug: 'Risperidol' },
  { disease: 'ulcer', drug: 'Omeprazole' },
  { disease: 'asthma', drug: 'corticosteroids inhaler' },
  { disease: 'eczema', drug: 'Topical JAK inhibitor' },
  { disease: 'diabetes', drug: 'Insulin Injections' },
  { disease: 'headache', drug: 'Paracetamol' },
  { disease: 'cough', drug: 'Procold' },
  { disease: 'catarrh', drug: 'Procold' },
];

function displayLoader() {
  document.querySelector('.overlay').classList.toggle('hidden');
  document.querySelector('.loader').classList.toggle('hidden');
}

function sendDisease() {
  // Get user disease
  // check if user enter disease
  if (!userDisease.value) {
    displayMsg('Field is required');
    return;
  }
  displayLoader();
  getDrug(userDisease.value);
  userDisease.value = '';
}

function getDrug(disease) {
  setTimeout(() => {
    let drugName = healthSysMgt.filter((i) => {
      return i.disease === disease;
    });

    if (!drugName.length) {
      displayMsg(
        `This "${disease.toUpperCase()}" is not found, check your spelling or try again`
      );
    } else {
      displayMsg(`The drug for your disease is ${drugName[0].drug}`);
    }
    displayLoader();
  }, 1500);
}

function displayMsg(message) {
  messageBox.textContent = message;
}

button.addEventListener('click', sendDisease);
reset.addEventListener('click', function () {
  messageBox.textContent = '🚑🚑🚑';
  userDisease.value = '';
});
