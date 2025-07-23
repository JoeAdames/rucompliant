//Variables
const forms = document.querySelectorAll('#forms .container .form-check')

//methods
const createItems = () => {
    let items = []
    forms.forEach(form => {
        let label = form.querySelector('.form-check-label') ?  form.querySelector('.form-check-label').textContent : "";
        let bool = form.querySelector('.form-check-input').checked ? true : false
        let details = form.querySelector('textarea').value ?  form.querySelector('textarea').value : ""
        items.push({label: label, checked: bool, details: details});
    })
    return items;
}
const createReport = () => {
    cleanResults();
    //create new container and child elements
    const container = document.createElement('div');
    container.classList.add('container');
    let items = createItems();
    items.forEach(item => {
        const row = document.createElement('div');
            row.classList.add('row');
            const colLabel = document.createElement('div');
            colLabel.classList.add('col');
            colLabel.textContent = item.label
            const colCheck = document.createElement('div');
            colCheck.classList.add('col');
            colCheck.textContent = item.checked
            const colDetails = document.createElement('div');
            colDetails.classList.add('col');
            colDetails.textContent = item.details;
            
            row.append(colLabel, colCheck, colDetails);
            container.append(row);
    })
    document.querySelector('.results').append(container);
}
const cleanResults = () => {
    document.querySelector('.results').innerHtml = ''
}
// EVENTS
document.querySelector('.action').addEventListener('click', () => {
    createReport();
})