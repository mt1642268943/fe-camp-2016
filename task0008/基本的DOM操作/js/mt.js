const [insertBtn, deleteBtn, updateBtn]
    = Array.from(document.querySelectorAll('#buttons button'));

const datalist = document.getElementById('datalist');
const rowtext = document.getElementById('rowtext');

function getAllCheckedRows(){
    return Array.from(datalist.querySelectorAll('li input:checked'))
            .map(el=>el.parentNode.parentNode);
}

function createNewRow(){
    var row = document.createElement('li');
    row.innerHTML = `<label><input type="checkbox"/>${rowtext.value}</label>`;
    return row;
}

insertBtn.addEventListener('click', evt=>{
    var checkedRows = getAllCheckedRows();
if(checkedRows.length){
    checkedRows.forEach(row=>
    row.insertAdjacentElement('afterend', createNewRow()));
}else{
    datalist.appendChild(createNewRow());
}
});

deleteBtn.addEventListener('click', evt=>{
    var checkedRows = getAllCheckedRows();
if(checkedRows.length){
    checkedRows.forEach(row=>row.remove());
}
});

updateBtn.addEventListener('click', evt=>{
    var checkedRows = getAllCheckedRows();
if(checkedRows.length){
    checkedRows.forEach(row=>row.childNodes[0].childNodes[1].textContent = rowtext.value);
}
});
