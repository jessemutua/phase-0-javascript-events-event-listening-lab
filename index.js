let input = document.getElementById('button');

function addingEventListener() {
    input.addEventListener('click', function() {
        alert('I was clicked!');
    });
}

addingEventListener();