// 1. Show an alert box on click on a link.


// 2. Display some Mobile images in browser. On click on an
//image Show the message in alert to user.

function mobile1(){
    alert("Thanks for Purchasing this OPPO A57 ")
}
function mobile2(){
    alert('Thanks for Purchasing this huawei')
}
function mobile3(){
    alert('Thanks for Purchasing this Samsung')
}
function mobile4(){
    alert('Thanks for Purchasing this Iphone 15')
}

//3. Display 10 student records in table and each row should contain a delete
// button. If you click on a button to delete a record, entire row should be
// deleted.

function deleteRow(button) {
    // Get the row containing the button
    var row = button.parentNode.parentNode;
    // Delete the row
    row.parentNode.removeChild(row);
}

// 5. Show a counter in browser. Counter should increase on click on increase
// button and decrease on click on decrease button. And show updated counter
// value in browser.


var counter=0;
function increase(){
    counter++

    console.log(counter)
    document.getElementById('counter').innerHTML=counter
}
function reset(){
    counter=0;
    document.getElementById('counter').innerHTML=counter
}

function decrease(){
    counter--

    document.getElementById('counter').innerHTML=counter
}