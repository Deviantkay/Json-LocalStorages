#  JavaScript Web Storage 
![latar](https://getflywheel.com/layout/wp-content/uploads/2019/02/The_Best_Java_Script_Libraries_1800x500-1.jpg )
  
---
  
Web Storage adalah sebuah API yang digunakan untuk menyimpan data pada browser. Dua jenis Web Storage adalah Local Storage dan Session Storage. Cookies bukanlah bagian dari Web Storage, meskipun Cookies juga dapat digunakan untuk menyimpan data pada browser.
  
Local Storage dan Session Storage adalah penyimpanan data pada browser yang bersifat permanen dan tidak akan hilang ketika browser ditutup. Namun, perbedaannya terletak pada waktu hidup dari data tersebut. Data yang disimpan di Local Storage akan tetap ada sampai data tersebut dihapus secara manual atau dihapus oleh pengguna melalui pengaturan browser. Sementara itu, data yang disimpan di Session Storage hanya akan ada selama sesi browser masih berlangsung. Artinya, data tersebut akan hilang ketika browser ditutup.
  
Cookies juga dapat digunakan untuk menyimpan data pada browser. Cookies memiliki waktu hidup yang dapat ditentukan oleh pengembang situs web. Cookies juga memiliki kapasitas penyimpanan yang lebih kecil dibandingkan dengan Local Storage dan Session Storage. Cookies dapat digunakan untuk menyimpan informasi seperti preferensi pengguna atau informasi login. Namun, Cookies juga memiliki beberapa kelemahan seperti rentan terhadap serangan CSRF dan XSS.
  
Dengan menggunakan Web Storage, pengembang situs web dapat menyimpan data pada browser pengguna dan mengakses data tersebut pada saat yang akan datang. Hal ini sangat berguna untuk mengoptimalkan pengalaman pengguna pada situs web. Misalnya, pengembang situs web dapat menyimpan preferensi pengguna atau riwayat belanja pada Local Storage dan mengakses data tersebut pada kunjungan berikutnya.
  
---
  
##  Tampilan
  **Tampilan awal**
  ![Sebelumisi](/images1.png)
  <br>
  **Tampilan setelah di isi**
  ![Sesudahisi](/images2.png)
  
  
---
  
##  Project Tree
  
- 📂 [__JS Web Storage__](#javascript-web-storage)
  - 📂[Non Export](nonexport)
    - 📄 [Index](nonexport/index.html)
    - 📄 [Script](nonexport/main.js)
    - 📄 [Style](nonexport/style.css)
  - 📂[With Export](withexport)
    - 📄 [Index](withexport/index.html)
    - 📄 [Script](withexport/main.js)
    - 📄 [Style](withexport/style.css)
    - 📂[Export Lib](withexport/lib/)
      - 📄 [data](withexport/lib/data.js)
      - 📄 [form](withexport/lib/form)
      - 📄 [render](withexport/lib/render.js)
      - 📄 [storage](withexport/lib/storage.js)
  - 📄 [readme.md](readme.md)
---
  
##  Table Of Content
- [JavaScript Web Storage](#javascript-web-storage)
  - [Tampilan](#tampilan)
  - [Project Tree](#project-tree)
  - [Table Of Content](#table-of-content)
  - [Jawaban](#jawaban)
    - [Penjelasan HTML](#penjelasan-html)
    - [Penjelasan CSS](#penjelasan-css)
    - [Penjelasan JS](#penjelasan-js)
---
  
##  Jawaban
  
###  Penjelasan HTML
  
  
```html
  <form>
    <div>
      <label for="first-name">Nama Depan:</label>
      <input type="text" id="first-name" name="first-name">
    </div>
    <div>
      <label for="last-name">Nama Belakang:</label>
      <input type="text" id="last-name" name="last-name">
    </div>
    <div>
      <label for="gender">Gender:</label>
      <select id="gender" name="gender">
        <option value="Laki-laki">Laki-laki</option>
        <option value="Perempuan">Perempuan</option>
      </select>
    </div>
    <div>
      <label for="address">Alamat:</label>
      <textarea id="address" name="address"></textarea>
    </div>
    <div>
      <label for="storage-option">Pilihan Storage:</label>
      <select id="storage-option" name="storage-option">
        <option value="session">Session</option>
        <option value="local">Local</option>
        <option value="cookie">Cookie</option>
      </select>
    </div>
    <div>
      <button type="submit">Submit</button>
    </div>
    </form>
    <div class="center">
      <button id="latest-data-button">Latest Data</button>
      <button id="all-data-button">All Data</button>
      <button id="clear-data-button">Clear Data</button>
    </div>
    <div id="data-container">Belum Ada Data Yang Ditampilkan</div>
```
  
Pada kode diatas, terdapat sebuah form yang memiliki input text, select, dan textarea. Form ini digunakan untuk menginputkan data-data yang akan disimpan. Form ini juga memiliki sebuah tombol submit yang akan digunakan untuk menyimpan data-data yang telah diinputkan.
  
Setelah form, terdapat sebuah div yang berisi tiga buah tombol. Tombol ini digunakan untuk menampilkan data-data yang telah disimpan, memfilter data yang ditampilkan hanya ke yang baru saja diinput, dan menghapus data-data yang telah disimpan pada storage yang dipilih. fungsi dari tombol ini akan dibahas pada bagian Javascript.

Lebih panjangnya, tombol-tombol pada div tersebut bereaksi terhadap apa yang sedang dipilih di select storage-option. Jika storage-option dipilih session, maka tombol latest-data-button akan menampilkan data-data yang baru saja diinputkan, dan tombol all-data-button akan menampilkan semua data-data yang telah disimpan. Jika storage-option dipilih local, maka tombol latest-data-button akan menampilkan data-data yang baru saja diinputkan, dan tombol all-data-button akan menampilkan semua data-data yang telah disimpan. Jika storage-option dipilih cookie, maka tombol latest-data-button akan menampilkan data-data yang baru saja diinputkan, dan tombol all-data-button akan menampilkan semua data-data yang telah disimpan.
  
Setelah tombol, terdapat sebuah div yang akan digunakan untuk menampilkan data-data yang telah disimpan.

[⬆️Back to top⬆️](#javascript-web-storage)
  
###  Penjelasan CSS
  
  
```css
/* Style untuk form */
form {
    display: flex;
    flex-direction: column;
    max-width: 400px;
    margin: 50px auto;
    padding: 20px;
    background-color: #f5f5f5;
    border-radius: 5px;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.3);
}
  
form div {
    margin-bottom: 10px;
}
  
label {
    font-weight: bold;
    margin-bottom: 5px;
}
  
input[type="text"],
select,
textarea {
    padding: 10px;
    border: 2px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    width: 100%;
}
  
textarea {
    resize: none;
    height: 100px;
    overflow: hidden;
}
  
button[type="submit"] {
    background-color: #4CAF50;
    color: white;
    padding: 10px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}
  
button[type="submit"]:hover {
    background-color: #3e8e41;
}
  
/* Style untuk button Latest Data, All Data, dan Clear Data */
  
.center{
    text-align: center;
}
  
#latest-data-button,
#all-data-button,
#clear-data-button {
    background-color: #008CBA;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    margin: 0 auto;
    margin-bottom: 10px;
    padding: 10px;
}
  
#latest-data-button:hover,
#all-data-button:hover,
#clear-data-button:hover {
    background-color: #006080;
}
  
/* Style untuk kontainer data */
#data-container {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px 50px;
    background-color: #f5f5f5;
    border-radius: 15px;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.3);
    margin-top: 20px;
}
  
#data-container h2 {
    font-size: 1.5rem;
    margin-bottom: 10px;
}
  
#data-container p {
    margin-bottom: 5px;
    font-weight: bold;
}
  
#data-container ul {
    list-style: decimal;
    padding: 0;
    margin: 0;
}
  
#data-container li {
    margin-bottom: 5px;
}
```

CSS Diatas digunakan untuk memberikan style pada form, tombol, dan kontainer data. Pada form, terdapat beberapa style yang digunakan untuk memberikan style pada label, input, select, dan textarea. Pada tombol, terdapat beberapa style yang digunakan untuk memberikan style pada tombol latest-data-button, all-data-button, dan clear-data-button. Pada kontainer data, terdapat beberapa style yang digunakan untuk memberikan style pada h2, p, ul, dan li. 

[⬆️Back to top⬆️](#javascript-web-storage)
###  Penjelasan JS
  
```js
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
```
  
Pada kode diatas, seluruh input dan button sudah diambil menggunakan `document.getElementById()` dan `document.querySelector()`. Hal ini diperlukan untuk mendapatkan data dari form dan menambahkan event listener ke masing-masing button.
  
Untuk menyimpan nilai, variabel `firstNameInput`, `lastNameInput`, `genderSelect`, `addressTextarea`, `storageOptionSelect`, `submitButton`, `latestDataButton`, `allDataButton`, `clearDataButton`, dan `dataContainer` dideklarasikan menggunakan `const`. Sedangkan variabel `formData` dideklarasikan menggunakan `let` karena nilainya akan berubah setiap kali fungsi `handleSubmit()` dijalankan.
  
Selanjutnya, `getFormData()` digunakan untuk mendapatkan data dari form. Fungsi ini akan mengembalikan sebuah objek yang berisi data dari masing-masing input. yang mana isi function ini adalah mengambil nilai dari masing-masing input menggunakan `value` property.
  
Selanjutnya, `addDataToStorage()` digunakan untuk menambahkan data ke storage. Fungsi ini menerima dua parameter, yaitu data dan storageType. Parameter pertama adalah data yang akan ditambahkan ke storage, sedangkan parameter kedua adalah jenis storage yang akan digunakan. Fungsi ini akan mengecek apakah data sudah ada di storage atau belum. Jika belum, maka data akan ditambahkan ke storage. Jika sudah ada, maka data akan ditambahkan ke array yang sudah ada di storage. Setelah itu, data akan diubah menjadi string menggunakan `JSON.stringify()` dan disimpan ke storage menggunakan `localStorage.setItem()`. Fungsi ini juga akan mencetak data yang ditambahkan ke storage ke console berupa string dengan format `data telah ditambahkan ke"/>{storageType}` menggunakan `console.log()`.

Selanjutnya, `getDataFromStorage()` digunakan untuk mendapatkan data dari storage. Fungsi ini menerima satu parameter, yaitu storageType. Parameter ini digunakan untuk menentukan jenis storage yang akan digunakan. Fungsi ini akan mengambil data dari storage menggunakan `localStorage.getItem()` dan mengubahnya menjadi objek menggunakan `JSON.parse()`. Fungsi ini akan mengembalikan data dari storage jika data sudah ada di storage, jika tidak, maka akan mengembalikan nilai `null`. Fungsi ini juga akan mencetak data yang diambil dari storage ke console berupa string dengan format `data telah diambil dari"/>{storageType}`.
  
Selanjutnya, `renderData()` digunakan untuk menampilkan data. Fungsi ini menerima satu parameter, yaitu data. Parameter ini berisi data yang akan ditampilkan. Fungsi ini akan menghapus semua data yang ada di `dataContainer` menggunakan `innerHTML = ''`. Jika data yang diterima tidak kosong, maka data akan ditampilkan ke `dataContainer` menggunakan `appendChild()`. Jika data yang diterima kosong, maka akan ditampilkan teks `Belum ada data.`. 
  
Selanjutnya, `latestData()` digunakan untuk mendapatkan data terbaru. Fungsi ini akan mengambil data dari storage menggunakan `getDataFromStorage()` dan mengecek apakah data sudah ada di storage atau belum. Jika sudah ada, maka data terakhir akan diambil dari array data dan ditampilkan ke `dataContainer` menggunakan `renderData()`. Jika belum ada, maka akan ditampilkan teks `Belum ada data.`.
  
Selanjutnya, `allData()` digunakan untuk mendapatkan semua data. Fungsi ini akan mengambil data dari storage menggunakan `getDataFromStorage()` dan mengecek apakah data sudah ada di storage atau belum. Jika sudah ada, maka data akan ditampilkan ke `dataContainer` menggunakan `renderData()`. Jika belum ada, maka akan ditampilkan teks `Belum ada data.`.
  
Selanjutnya, `clearData()` digunakan untuk menghapus semua data. Fungsi ini akan menampilkan dialog konfirmasi menggunakan `confirm()` dan mengecek apakah user menekan tombol OK atau Cancel. Jika user menekan tombol OK, maka data akan dihapus dari storage menggunakan `localStorage.removeItem()` dan `renderData()` akan dipanggil dengan parameter `null` untuk menampilkan teks `Belum ada data.`. Jika user menekan tombol Cancel, maka data tidak akan dihapus dari storage.
  
Selanjutnya, `handleSubmit()` digunakan untuk mengirim data. Fungsi ini akan mencegah halaman untuk direfresh menggunakan `event.preventDefault()`. Selanjutnya, data dari form akan diambil menggunakan `getFormData()` dan ditambahkan ke storage menggunakan `addDataToStorage()`. Setelah itu, data yang ditambahkan akan ditampilkan ke `dataContainer` menggunakan `renderData()`. Selanjutnya, nilai dari masing-masing input akan dikosongkan menggunakan `value = ''`.
  
Selanjutnya, event listener akan ditambahkan ke masing-masing button menggunakan `addEventListener()`. Event listener ini akan memanggil fungsi yang sesuai ketika button tersebut diklik.
  
Dalam pembuatan javascript yang mampu mendukung pekerjaan yang diberikan ini, diperlukan banyak sekali built-in javascript method seperti `JSON.stringify()`, `JSON.parse()`, `localStorage.setItem()`, `localStorage.getItem()`, `localStorage.removeItem()`, `console.log()`, `console.clear()`, `document.getElementById()`, `document.querySelector()`, `document.createElement()`, `document.createTextNode()`, `element.appendChild()`, `element.addEventListener()`, `element.innerHTML = ''`, `element.value = ''`, `element.options[element.selectedIndex].text`, `element.selectedIndex`, `element.selectedOptions`, dan `confirm()`. yang mana rangkuman fungsinya adalah sebagai berikut :
- `JSON.stringify()` digunakan untuk mengubah objek menjadi string.
- `Json.parse()` digunakan untuk mengubah string menjadi objek.
- `localStorage.setItem()` digunakan untuk menyimpan data ke storage.
- `localStorage.getItem()` digunakan untuk mengambil data dari storage.
- `localStorage.removeItem()` digunakan untuk menghapus data dari storage.
- `console.log()` digunakan untuk mencetak data ke console.
- `console.clear()` digunakan untuk membersihkan console.
- `document.getElementById()` digunakan untuk mengambil elemen berdasarkan id.
- `document.querySelector()` digunakan untuk mengambil elemen berdasarkan selector.
- `document.createElement()` digunakan untuk membuat elemen baru.
- `document.createTextNode()` digunakan untuk membuat text baru.
- `element.appendChild()` digunakan untuk menambahkan elemen baru ke elemen lain.
- `element.addEventListener()` digunakan untuk menambahkan event listener ke elemen.
- `element.innerHTML = ''` digunakan untuk menghapus semua isi dari elemen.
- `element.value = ''` digunakan untuk mengosongkan nilai dari elemen.
- `element.options[element.selectedIndex].text` digunakan untuk mengambil teks dari option yang dipilih.
- `element.selectedIndex` digunakan untuk mengambil index dari option yang dipilih.
- `element.selectedOptions` digunakan untuk mengambil semua option yang dipilih.
- `confirm()` digunakan untuk menampilkan dialog konfirmasi.
  
Selain itu, diperlukannya penggunaan `if` maupun `if...else` untuk mengecek kondisi apakah data sudah ada di storage atau belum, dan juga penggunaan `for` untuk melakukan perulangan saat diperlukan.
  
Melihat kode javascript yang dibuat di atas memerlukan banyak sekali function di dalamnya, maka sangat disarankan untuk menggunakan export dan import untuk memisahkan kode javascript yang dibuat menjadi beberapa file, sehingga kode javascript yang dibuat akan lebih terstruktur, mudah untuk dipelihara dan dapat berjalan lebih cepat ketimbang hanya tersedia 1 file. Dalam pemisahan ini, diperlukan sekitar 5 file javascript, yaitu :
- `data.js` digunakan untuk menyimpan data-data yang dibutuhkan.
- `storage.js` digunakan untuk menyimpan fungsi-fungsi yang berhubungan dengan storage.
- `render.js` digunakan untuk menyimpan fungsi-fungsi yang berhubungan dengan render.
- `form.js` digunakan untuk menyimpan fungsi-fungsi yang berhubungan dengan form.
- `main.js` digunakan untuk penggabungan semua file javascript yang dibuat sebelumnya dengan file `index.html`.
  
Sehingga penyusunan kodenya dapat dilihat dibawah ini
1. Data.js
   ```js
    const formData = {
    firstName: '',
    lastName: '',
    gender: '',
    address: '';};
    const data = [];
    export {formData, data};
   ```
2. Storage.js
    ```js
      import { getFormData, handleSubmit } from './form.js';
      import { renderData } from './render.js';
  
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
  
      function getDataFromStorage(storageType) {
        const storedData = localStorage.getItem(storageType);
        if (storedData) {
          return JSON.parse(storedData);
        }
        return null;
      }
  
      function clearData(storageType) {
        const confirmDelete = confirm('Apakah Anda yakin ingin menghapus semua data?');
        if (confirmDelete) {
          localStorage.removeItem(storageType);
          renderData(null);
          console.clear();
          console.log('\ndata telah dihapus dari ' + storageType + ' Storage');
        }
      }
  
      export { addDataToStorage, getDataFromStorage, clearData};
    ```
3. Render.js
   ```js
    function renderData(data) {
      const dataContainer = document.getElementById('data-container');
      dataContainer.innerHTML = '';
      if (data) {
        const dataList = document.createElement('ul');
        data.forEach(function(item) {
          const dataListItem = document.createElement('li');
          dataListItem.classList.add('data-item');
          const dataText = document.createTextNode(`${item.firstName}, ${item.lastName}, ${item.gender}, ${item.address}`);
          dataListItem.appendChild(dataText);
          dataList.appendChild(dataListItem);
        });
        dataContainer.appendChild(dataList);
      } else {
        const noDataText = document.createTextNode('Belum ada data.');
        dataContainer.appendChild(noDataText);
      }
    }
  
    export { renderData };
   ```
4. Form.js
   ```js
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
   ```
  
5. Main.js
   ```js
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
   ```

fungsi `export` digunakan untuk mengexport data-data yang dibutuhkan, sedangkan fungsi `import` digunakan untuk mengimport data-data yang dibutuhkan. Dalam penggunaannya, `export` dan `import` dapat dilihat pada kode diatas. Pada kode diatas, `export` digunakan pada file `data.js`, `storage.js`, `render.js`, `form.js`, dan `main.js` untuk mengexport data-data yang dibutuhkan. Sedangkan `import` digunakan pada file `storage.js`, `render.js`, `form.js`, dan `main.js` untuk mengimport data-data yang dibutuhkan seperti misalnya kita hanya membutuhkan fungsi `getFormData` pada file `form.js`, maka kita hanya perlu mengimport fungsi `getFormData` saja, bukan seluruh data yang ada pada file `form.js`, begitu pula sebaliknya.

Perlu menjadi catatan, bahwa `export` dan `import` hanya dapat digunakan pada file yang menggunakan ekstensi `.js`. Jika file yang digunakan tidak menggunakan ekstensi `.js`, maka `export` dan `import` tidak dapat digunakan. Terdapat catatan lainnya adalah `export` dan `import` hanya dapat digunakan pada browser yang mendukung ES6. Jika browser yang digunakan tidak mendukung ES6, maka `export` dan `import` tidak dapat digunakan, namun hal ini tidak perlu dikhawatirkan karena pada rata-rata browser yang digunakan sudah mendukung ES6 (dalam hal ini hanya browser Internet Explorer masih belum mendukung ES6 yang mana pada saat ini Microsoft telah mengganti Internet Explorer dengan Microsoft Edge yang sudah mendukung ES6 dan lebih baru), serta diperlukannya perubahan pada pemanggilan script javascript pada file html dengan menambahkan `type="module"` pada tag script seperti pada kode di bawah ini.

```html
<script src="js/data.js" type="module"></script>
```

[⬆️Back to top⬆️](#javascript-web-storage)
  