  const apiUrl = 'http://192.168.1.112:2500/api/authors';

    async function fetchAuthors() {
      const res = await fetch(apiUrl);
      const data = await res.json();
      renderAuthors(data);
    }

    async function fetchAuthorById() {
      const id = document.getElementById('viewId').value;
      if (!id) return alert('أدخل رقم المؤلف!');
      const res = await fetch(`${apiUrl}/${id}`);
      if (!res.ok) return alert('لم يتم العثور على المؤلف');
      const author = await res.json();
      renderAuthors([author]);
    }

  async function deleteAuthorById() {
  const id = document.getElementById('deleteId').value.trim();
  if (!id) return alert('أدخل رقم المؤلف!');
  
  const confirmed = confirm('هل أنت متأكد من الحذف؟');
  if (!confirmed) return;

  try {
    const res = await fetch(`${apiUrl}/${id}`, { method: 'DELETE' });
    const result = await res.json();

    if (res.ok) {
      alert(result.message || 'تم الحذف بنجاح');
      fetchAuthors();
    } else {
      alert(result.error || 'فشل في الحذف');
    }
  } catch (err) {
    console.error('حدث خطأ في الحذف:', err);
    alert('حدث خطأ غير متوقع');
  }
}



    async function addAuthor() {
      const name = document.getElementById('addName').value;
      if (!name) return alert('أدخل اسم المؤلف!');
      await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name })
      });
      alert('تمت الإضافة');
      fetchAuthors();
    }

    async function updateAuthor() {
      const id = document.getElementById('editId').value;
      const name = document.getElementById('editName').value;
      if (!id || !name) return alert('أدخل رقم واسم المؤلف!');
      await fetch(`${apiUrl}/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name })
      });
      alert('تم التعديل');
      fetchAuthors();
    }

function renderAuthors(authors) {
  const tbody = document.getElementById('authors');
  tbody.innerHTML = '';
  authors.forEach(author => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${author.name}</td>
      <td>${author.ID}</td>
    `;
    tbody.appendChild(row);
  });

    }

    // يمكنك تفعيل السطر التالي إذا أردت تحميل جميع المؤلفين عند فتح الصفحة
    // fetchAuthors();
 





const categoriesApiUrl = 'http://192.168.1.112:2500/api/categories';

async function fetchCategories() {
  const res = await fetch(categoriesApiUrl);
  const data = await res.json();
  renderCategories(data);
}

async function fetchCategoryById() {
  const id = document.getElementById('viewCategoryId').value;
  if (!id) return alert('أدخل رقم الفئة!');
  const res = await fetch(`${categoriesApiUrl}/${id}`);
  if (!res.ok) return alert('لم يتم العثور على الفئة');
  const category = await res.json();
  renderCategories([category]);
}

async function deleteCategoryById() {
  const id = document.getElementById('deleteCategoryId').value.trim();
  if (!id) return alert('أدخل رقم الفئة!');
  
  const confirmed = confirm('هل أنت متأكد من الحذف؟');
  if (!confirmed) return;

  try {
    const res = await fetch(`${categoriesApiUrl}/${id}`, { method: 'DELETE' });
    const result = await res.json();

    if (res.ok) {
      alert(result.message || 'تم الحذف بنجاح');
      fetchCategories();
    } else {
      alert(result.error || 'فشل في الحذف');
    }
  } catch (err) {
    console.error('حدث خطأ في الحذف:', err);
    alert('حدث خطأ غير متوقع');
  }
}

async function addCategory() {
  const name = document.getElementById('addCategoryName').value;
  if (!name) return alert('أدخل اسم الفئة!');
  await fetch(categoriesApiUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name })
  });
  alert('تمت الإضافة');
  fetchCategories();
}

async function updateCategory() {
  const id = document.getElementById('editCategoryId').value;
  const name = document.getElementById('editCategoryName').value;
  if (!id || !name) return alert('أدخل رقم واسم الفئة!');
  await fetch(`${categoriesApiUrl}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name })
  });
  alert('تم التعديل');
  fetchCategories();
}

function renderCategories(categories) {
  const tbody = document.getElementById('categories');
  tbody.innerHTML = '';
  categories.forEach(category => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${category.name}</td>
      <td>${category.ID}</td>
    `;
    tbody.appendChild(row);
  });
}


const booksApiUrl = 'http://192.168.1.112:2500/api/books';

async function fetchBooks() {
  const res = await fetch(booksApiUrl);
  const data = await res.json();
  renderBooks(data);
}

async function fetchBookById() {
  const id = document.getElementById('viewBookId').value;
  if (!id) return alert('أدخل رقم الكتاب!');
  const res = await fetch(`${booksApiUrl}/${id}`);
  if (!res.ok) return alert('لم يتم العثور على الكتاب');
  const book = await res.json();
  renderBooks([book]);
}

async function deleteBookById() {
  const id = document.getElementById('deleteBookId').value.trim();
  if (!id) return alert('أدخل رقم الكتاب!');
  const confirmed = confirm('هل أنت متأكد من الحذف؟');
  if (!confirmed) return;

  try {
    const res = await fetch(`${booksApiUrl}/${id}`, { method: 'DELETE' });
    const result = await res.json();
    if (res.ok) {
      alert(result.message || 'تم الحذف بنجاح');
      fetchBooks();
    } else {
      alert(result.error || 'فشل في الحذف');
    }
  } catch (err) {
    console.error('خطأ:', err);
    alert('حدث خطأ غير متوقع');
  }
   fetchBooks();
}

async function addBook() {
  const title = document.getElementById('addTitle').value;
  const authorID = document.getElementById('addAuthorId').value;
  const categoryID = document.getElementById('addCategoryId').value;
  const publishedDate = document.getElementById('addPublishedDate').value;

  if (!title || !authorID || !categoryID || !publishedDate)
    return alert('املأ جميع الحقول!');

  await fetch(booksApiUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title, authorID, categoryID, publishedDate })
  });

  alert('تمت الإضافة');
  fetchBooks();
}

async function updateBook() {
  const id = document.getElementById('editBookId').value;
  const title = document.getElementById('editTitle').value;
  const authorID = document.getElementById('editAuthorId').value;
  const categoryID = document.getElementById('editCategoryId').value;
  const publishedDate = document.getElementById('editPublishedDate').value;

  if ( !id ||!title || !authorID || !categoryID || !publishedDate)
    return alert('املأ جميع الحقول للتعديل!');

  await fetch(`${booksApiUrl}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title, authorID, categoryID, publishedDate })
  });

  alert('تم التعديل');
  fetchBooks();
}

function renderBooks(books) {
  const tbody = document.getElementById('books');
  tbody.innerHTML = '';
  books.forEach(book => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${book.title}</td>
      <td>${book.ID}</td>
      <td>${book.Author?.name || '---'}</td>
      <td>${book.Category?.name || '---'}</td>
      <td>${book.publishedDate?.split('T')[0]}</td>
    `;
    tbody.appendChild(row);
  });
}
