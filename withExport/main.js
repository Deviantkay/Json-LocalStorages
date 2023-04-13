import { addDataToStorage, getDataFromStorage, clearData} from './lib/storage.js';
import { renderData } from './lib/render.js';
import { getFormData } from './lib/form.js';

const storageOptionSelect = document.getElementById('storage-option');
const submitButton = document.querySelector('form button[type="submit"]');
const latestDataButton = document.getElementById('latest-data-button');
const allDataButton = document.getElementById('all-data-button');
const clearDataButton = document.getElementById('clear-data-button');

function latestData() {
  const storedData = getDataFromStorage(storageOptionSelect.value);
  if (storedData && storedData.length > 0) {
    const latestData = storedData[storedData.length - 1];
    const latestDataArr = [latestData];
    renderData(latestDataArr);
  } else {
    renderData(null);
  }
}

function allData() {
  const storedData = getDataFromStorage(storageOptionSelect.value);
  renderData(storedData);
}

function handleSubmit(event) {
  event.preventDefault();
  const formData = getFormData();
  addDataToStorage(formData, storageOptionSelect.value);
  renderData([formData]);
  submitButton.disabled = true;
  setTimeout(function() {
    submitButton.disabled = false;
  }, 3000);
}

latestDataButton.addEventListener('click', latestData);
allDataButton.addEventListener('click', allData);
clearDataButton.addEventListener('click', function() { clearData(storageOptionSelect.value); });
submitButton.addEventListener('click', handleSubmit);
