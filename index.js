let input = document.getElementById('button');

function addingEventListener() {
    input.addEventListener('mouseover', function() {
        input.style.backgroundColor = "red";
    });
}

addingEventListener();