//1. Adding a new item to the list of items:
let li = $('<li></li>');
let inputValue = $('#input').val();
  li.append(inputValue);

if (inputValue === '') {
  alert("You must write something!");
} else {
  $('#list').append(li); //didn't fully understand how this section of code works
}

//2. Crossing out an item from the list of items:
function crossOut() {
  li.toggleClass('strike');
}

  li.on('dblclick', function crossOut() {
    li.toggleClass('strike');
});

//3(i). Adding the delete button "X":
let crossOutButton = $('<crossOutButton></crossOutButton>'); //why is it an open and close tag
  crossOutButton.append(document.createTextNode ('X'));
  li.append(crossOutButton);

  crossOutButton.on('click',deleteListItem);

  function deleteListItem() {
    li.addCLass('delete');
  }
