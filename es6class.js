
//Using with ES6 Class

class Book {
    constructor(name, author, type) {
        this.name = name;
        this.author = author;
        this.type = type;
    }

}



class Display extends Book{
    add() {
        //console.log('Ading to UI');
        let tableBody = document.getElementById('tableBody');
        let uiString = `<tr>
                <td>${this.name}</td>
                <td>${this.author}</td>
                <td>${this.type}</td>
                </tr>`;

        tableBody.innerHTML += uiString;
    }

    clear() {
        let libraryForm = document.getElementById('libraryForm');
        libraryForm.reset();
    }

    show(type, showMessage) {
        let message = document.getElementById('message');

        let boldText;
        if (type === 'success') {
            boldText = 'Success'
        }
        else {
            boldText = 'Error!'
        }
        message.innerHTML = `
                    <div class="alert alert-${type} alert-dismissible fade show" role="alert">
                            <strong>${boldText}:</strong> ${showMessage}
                            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">×</span>
                            </button>
                        </div>`;

        setTimeout(function () {
            message.innerHTML = " ";
        }, 5000);

    }


    validate() {
        if (this.name.length < 2 && this.author.length < 2) {
            return false;
        }
        else
            return true;
    }

}



// Add submit event listener to libraryForm
let libraryForm = document.getElementById('libraryForm');
libraryForm.addEventListener('submit', function libraryFormSubmit(e) {
    e.preventDefault();
    //console.log("Clicked");

    let name = document.getElementById('bookName').value;
    let author = document.getElementById('author').value;
    let type;
    let fiction = document.getElementById('fiction');
    let programming = document.getElementById('programming');
    let cooking = document.getElementById('cooking');

    if (fiction.checked) {
        type = fiction.value;
    }
    else if (programming.checked) {
        type = programming.value;
    }
    else if (cooking.checked) {
        type = cooking.value;
    }


    let book = new Book(name, author, type);
    //console.log(book);

    let display = new Display(name, author, type);

    if (display.validate()) {
        display.add();
        display.clear();
        display.show('success', 'Your book has been successfully added');
    }
    else {
        // Show error to the user
        display.show('danger', 'Sorry you cannot add this book');
    }
});