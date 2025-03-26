let books = [];

  function addBook() {
            const bookName = document.getElementById('bookName').value;
            const authorName = document.getElementById('authorName').value;
            const bookDescription = document.getElementById('bookDescription').value;
            const pagesNumber = parseInt(document.getElementById('pagesNumber').value);
            if (bookName && authorName && bookDescription && !isNaN(pagesNumber)) {
                const book = {
                    name: bookName,
                    authorName: authorName,
                    bookDescription: bookDescription,
                    pagesNumber: pagesNumber
                };
                books.push(book);
                showbooks();
                clearInputs();
            } else {
                alert('Please fill in all fields correctly.');
            }
        }

function showbooks() {
    const booksDiv = books.map((book, index) => `<h1>book Number: ${index + 1}</h1>
        <p><strong>Book Name: </strong>${book.name}</p>
        <p><strong>Author Name:</strong> ${book.authorName}</p>
        <p><strong>Book Description:</strong> ${book.bookDescription}</p>
        <p><strong>No. of Pages:</strong> ${book.pagesNumber} page(s)</p>
    <button onclick="editbook(${index})">Edit</button>
    <button onclick="deletebook(${index})">Delete</button>`
    );
    document.getElementById('books').innerHTML = booksDiv.join('');
}

 function clearInputs() {
            document.getElementById('bookName').value = '';
            document.getElementById('authorName').value = '';
            document.getElementById('bookDescription').value = '';
            document.getElementById('pagesNumber').value = '';
 }

 function deletebook(index) {
    books.splice(index, 1);
    showbooks();
 }

 function editbook(index){
    const booksDiv = books.map((book, index) => `<h1>book Number: ${index + 1}</h1>
    <p><strong>Book Name: </strong>${book.name}</p>
    <p><strong>Author Name:</strong> ${book.authorName}</p>
    <p><strong>Book Description:</strong> ${book.bookDescription}</p>
    <p><strong>No. of Pages:</strong> ${book.pagesNumber} page(s)</p>
<label for="replacebookName">Book Name:</label><br>
    <input type="text" value="${book.name}" id="replacebookName"><br><br>
    <label for="replaceauthorName">Author Name:</label><br>
    <textarea id="replaceauthorName" rows="4">${book.authorName}</textarea><br><br>
    <label for="replacebookDescription">Book Description</label><br>
    <textarea id="replacebookDescription" rows="4">${book.bookDescription}</textarea><br><br>
    <label for="replacepagesNumber">No. of Pages Time</label><br>
    <input type="number" id="replacepagesNumber" value="${book.pagesNumber}"><br><br>
    <button onclick="replaceBook(${index})">Replace Book</button>`
);
document.getElementById('books').innerHTML = booksDiv[index];
 }

 function replaceBook(index){
    
    const bookName = document.getElementById('replacebookName').value;
    const authorName = document.getElementById('replaceauthorName').value;
    const bookDescription = document.getElementById('replacebookDescription').value;
    const pagesNumber = parseInt(document.getElementById('replacepagesNumber').value);
    if (bookName && authorName && bookDescription && !isNaN(pagesNumber)) {
        const book = {
            name: bookName,
            authorName: authorName,
            bookDescription: bookDescription,
            pagesNumber: pagesNumber
        };
        books.splice(index, 1, book);
        showbooks();
    
    } else {
        alert('Please fill in all fields correctly.');
    
}


 }
