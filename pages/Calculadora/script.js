function insertToDisplay(data) {
    const display = document.querySelector('#display');

    if (display.value === '0' || display.value === 'Error') {
        display.value = data;
    } else {
        display.value += data;
    }
}


 function clean() {
    document.querySelector('#display').value = ''
 }

 function back() {
    const display = document.querySelector('#display')
    display.value = display.value.slice(0,-1)
 }

 function result() {
    const display = document.querySelector('#display')
    try {
        display.value = eval(display.value)
    } catch {
        display.value = 'Error'
    }
 }