//Variables
const forms = document.querySelectorAll('#forms .container .form-check')

//methods
const createItems = () => {
    let items = []
    forms.forEach(form => {
        let label = form.querySelector('.form-check-label') ?  form.querySelector('.form-check-label') : "";
        let bool = form.querySelector('.form-check-input').checked ? true : false
        let details = form.querySelector('textarea').value ?  form.querySelector('textarea').value : ""
        items.push({label: label, checked: bool, details: details});
    })
    return items;
}
const createReport = () => {
    cleanResults();
    let items = createItems();

    console.log(items)

}
const cleanResults = () => {
    document.querySelector('.results').innerHtml = ''
}
// EVENTS
document.querySelector('.action').addEventListener('click', () => {
    createReport();
})