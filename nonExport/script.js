const firstNameInput = document.getElementById('first-name');
const lastNameInput = document.getElementById('last-name');
const genderSelect = document.getElementById('gender');
const addressTextarea = document.getElementById('address');
const storageOptionSelect = document.getElementById('storage-option');
const submitButton = document.querySelector('form button[type="submit"]');
const latestDataButton = document.getElementById('latest-data-button');
const allDataButton = document.getElementById('all-data-button');
const clearDataButton = document.getElementById('clear-data-button');
const dataContainer = document.getElementById('data-container');
  
// fungsi untuk mendapatkan data form
function getFormData() {
  return {
    firstName: firstNameInput.value,
    lastName: lastNameInput.value,
    gender: genderSelect.value,
    address: addressTextarea.value
  };
}
  
// fungsi untuk menambah data ke storage
function addDataToStorage(data, storageType) {
  let storedData = getDataFromStorage(storageType);
  if (!storedData) {
    storedData = [];
  }
  storedData.push(data);
  localStorage.setItem(storageType, JSON.stringify(storedData));
  
  console.log('\ndata telah ditambahkan ke '+storageType);
}
  
// fungsi untuk mendapatkan data dari storage
function getDataFromStorage(storageType) {
  const storedData = localStorage.getItem(storageType);
  if (storedData) {
    return JSON.parse(storedData);
  }
  return null;
}
  
// fungsi untuk menampilkan data
function renderData(data) {
  dataContainer.innerHTML = '';
  if (data) {
    const dataList = document.createElement('ul'); // tambahkan ul sebagai kontainer list
    data.forEach(function(item) {
      const dataListItem = document.createElement('li'); // ubah div menjadi li
      dataListItem.classList.add('data-item');
      const dataText = document.createTextNode(`${item.firstName}, ${item.lastName}, ${item.gender}, ${item.address}`);
      dataListItem.appendChild(dataText);
      dataList.appendChild(dataListItem); // tambahkan li ke ul
    });
    dataContainer.appendChild(dataList); // tambahkan ul ke dalam div
  } else {
    const noDataText = document.createTextNode('Belum ada data.');
    dataContainer.appendChild(noDataText);
  }
}
  
  
// fungsi untuk mendapatkan data terbaru
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
  
// fungsi untuk mendapatkan semua data
function allData() {
  const storedData = getDataFromStorage(storageOptionSelect.value);
  renderData(storedData);
}
  
// fungsi untuk menghapus semua data
function clearData(storageType) {
  const confirmDelete = confirm('Apakah Anda yakin ingin menghapus semua data?');
  if (confirmDelete) {
    const storageOptionSelect = document.getElementById('storage-option');
    localStorage.removeItem(storageOptionSelect.value);
    renderData(null);
    console.clear();
    console.log('\ndata telah dihapus dari ' + storageOptionSelect.options[storageOptionSelect.selectedIndex].text + ' Storage');
  }
}
  
  
// fungsi untuk mengirim data
function handleSubmit(event) {
  event.preventDefault();
  const formData = getFormData();
  addDataToStorage(formData, storageOptionSelect.value);
  renderData([formData]);
  firstNameInput.value = '';
  lastNameInput.value = '';
  addressTextarea.value = '';
}
  
// menambahkan event listener ke button submit
submitButton.addEventListener('click', handleSubmit);
  
// menambahkan event listener ke button latest data
latestDataButton.addEventListener('click', latestData);
  
// menambahkan event listener ke button all data
allDataButton.addEventListener('click', allData);
  
// menambahkan event listener ke button clear data
clearDataButton.addEventListener('click', clearData);