document.addEventListener('DOMContentLoaded', function() {
    let addEmojiBtn = document.getElementById('addEmojiBtn');
    let formContainer = document.getElementById('formContainer');
    let emojiForm = document.getElementById('emojiForm');

    addEmojiBtn.addEventListener('click', function() {
        formContainer.classList.toggle('hidden');
    });

    emojiForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        let emoji = document.getElementById('emoji').value;
        let nome = document.getElementById('nome').value;
        let descricao = document.getElementById('descricao').value;

        let newRow = document.createElement('tr');
        newRow.innerHTML = `<td>${emoji}</td><td>${nome}</td><td>${descricao}</td>`;

        document.querySelector('#emojiTable tbody').appendChild(newRow);

        emojiForm.reset();
        formContainer.classList.add('hidden');
    });
});
