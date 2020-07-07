

//Using with Object Prototyping



//Constructor
function Book(name,author,type){
    this.name=name;
    this.author=author;
    this.type=type;

}

//Display Constructor
function Display(){

}

Display.prototype.add=function(book)
{
    console.log('Ading to UI');
    let tableBody=document.getElementById('tableBody');
    let uiString=`<tr>
                <td>${book.name}</td>
                <td>${book.author}</td>
                <td>${book.type}</td>
                </tr>`;

    tableBody.innerHTML+=uiString;
}

Display.prototype.clear=function()
{
    let libraryForm=document.getElementById('libraryForm');
    libraryForm.reset();
}

Display.prototype.show=function(type,showMessage)
{
    let message = document.getElementById('message');

    let boldText;
    if(type==='success')
    {
        boldText='Success'
    }
    else
    {
        boldText='Error!'
    }
    message.innerHTML=`
                    <div class="alert alert-${type} alert-dismissible fade show" role="alert">
                            <strong>${boldText}:</strong> ${showMessage}
                            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">×</span>
                            </button>
                        </div>`;

    setTimeout(function(){
        message.innerHTML=" ";
    },5000);
                        
}


//Display Validation
Display.prototype.validate=function(book)
{
    if(book.name.length<2 && book.author.length<2)
    {
        return false;
    }
    else
    return true;
}



// Add submit event listener to libraryForm
let libraryForm=document.getElementById('libraryForm');
libraryForm.addEventListener('submit', function libraryFormSubmit(e){
    e.preventDefault();
    //console.log("Clicked");

    let name=document.getElementById('bookName').value;
    let author=document.getElementById('author').value;
    let type;
    let fiction=document.getElementById('fiction');
    let programming=document.getElementById('programming');
    let cooking=document.getElementById('cooking');

    if(fiction.checked)
    {
        type=fiction.value;
    }
    else if(programming.checked)
    {
        type=programming.value;
    }
    else if(cooking.checked)
    {
        type=cooking.value;
    }


    let book= new Book(name,author,type);
    //console.log(book);

    let display= new Display();

    if(display.validate(book))
    {
        display.add(book);
        display.clear();
        display.show('success', 'Your book has been successfully added');
    }
    else
    {
        // Show error to the user
        display.show('danger', 'Sorry you cannot add this book');
    }
});



