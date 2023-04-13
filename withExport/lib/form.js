import { addDataToStorage } from './storage.js';
import { renderData } from './render.js';

const firstNameInput = document.getElementById('first-name');
const lastNameInput = document.getElementById('last-name');
const genderSelect = document.getElementById('gender');
const addressTextarea = document.getElementById('address');
const storageOptionSelect = document.getElementById('storage-option');


function getFormData() {
  return {
    firstName: firstNameInput.value,
    lastName: lastNameInput.value,
    gender: genderSelect.value,
    address: addressTextarea.value
  };
}

function handleSubmit(event) {
  event.preventDefault();
  const formData = getFormData();
  addDataToStorage(formData, storageOptionSelect.value);
  renderData([formData]);
  firstNameInput.value = '';
  lastNameInput.value = '';
  addressTextarea.value = '';
}

export { getFormData, handleSubmit };