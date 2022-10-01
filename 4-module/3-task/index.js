function highlight (table) {
  let tbody = table.querySelector('tbody');
  let trs = tbody.getElementsByTagName('tr');

  for (let i = 0; i < trs.length; i++) {
    let statusCell = trs[i].cells[3];
    if (!statusCell.hasAttribute('data-available')) {
      trs[i].setAttribute('hidden','');
    } else if (statusCell.dataset.available === "true") {
      trs[i].classList.add('available');
    } else {
      trs[i].classList.add('unavailable');
    }
  }

  for (let i = 0; i < trs.length; i++) {
    let genderCell = trs[i].cells[2];
    if (genderCell.textContent === "m") {
      trs[i].classList.add('male')
    } else if (genderCell.textContent === "f") {
      trs[i].classList.add('female');
    }
  }

  for (let i = 0; i < trs.length; i++) {
    let ageCell = trs[i].cells[1];
    if (+ageCell.textContent < 18) {
      ageCell.parentElement.style.textDecoration = 'line-through'
    }
  }

  console.log(trs);
}
