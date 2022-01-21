document.addEventListener("DOMContentLoaded", function() {});


fetch('http://localhost:3000/books')
.then(r=>r.json())
.then(data => data.forEach(showBooks))

function showBooks(books) {
    const titles = document.getElementById('list')
    const booksLi = document.createElement('li')
    booksLi.innerText = books.title
    titles.append(booksLi)
    booksLi.addEventListener('click', e => {

         const bookInfo = document.getElementById('show-panel')
         const bookH2 = document.createElement('h2')
         const bookPic = document.createElement('img')
         const bookDesc = document.createElement('p')
         const bookUsers = document.createElement('li')
         bookH2.innerText = books.author
         bookPic.src = books.img_url
         bookDesc.innerText = books.description
         bookUsers.innerText = books.username
         bookInfo.append(bookH2, bookPic, bookDesc, bookUsers)
         console.log(bookUsers.innerText)
    })
}