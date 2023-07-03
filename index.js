const form = document.getElementById('task-form');
const taskName = document.getElementById('task-name');
const taskNote = document.getElementById('task-note');
const imgApproved = '<img src="./images/aprovado.png" alt="Emoji celebrando">';
const imgDisapproved = '<img src="./images/reprovado.png" alt="Emoji decepcionado">';
const spanApproved = '<span class="result approved"> Aprovado </span>';
const spanDisapproved = '<span class="result disapproved"> Reprovado </span>';
const noteRequired = parseFloat(prompt('Por favor, insira a nota mínima para aprovação: '));
const tasks = [];
const notes = [];
let lines = '';

form.addEventListener('submit', function(e) {
   e.preventDefault();
   addLine();
   updateTable();
   updateFinalMedia();
}) 

function addLine() {

   if(tasks.includes(taskName.value)) {
      alert(`A atividade: ${taskName.value} já foi inserida, tente outra!`)
   }else {
      tasks.push(taskName.value);
      notes.push(parseFloat(taskNote.value));
      
      let line = '<tr>';
      line += `<td>${taskName.value}</td>`;
      line += `<td>${taskNote.value}</td>`;
      line += `<td>${taskNote.value >= noteRequired ? imgApproved : imgDisapproved}</td>`;
      line += '</tr>';
   
      lines += line;
   }

   taskName.value = '';
   taskNote.value = '';
}

function updateTable() {
   const tableBody = document.querySelector('tbody');
   tableBody.innerHTML = lines;
}

function calculateFinalMedia() {
   let addNotes = 0;

   for (let i = 0; i < notes.length; i++) {
      addNotes += notes[i];
   }

   return (addNotes / notes.length).toFixed(1);
}

function updateFinalMedia() {
   const finalMedia = calculateFinalMedia();

   document.getElementById('final-media-value').innerHTML = finalMedia;
   document.getElementById('final-media-result').innerHTML = finalMedia >= noteRequired ? spanApproved : spanDisapproved;
}