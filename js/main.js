const menu = () => {
  document.querySelector('.btn-group-vertical').style.flexDirection = 'row';
  document.querySelectorAll('button.btn').forEach(btn => {
    btn.style.borderRadius = '0.18rem';
    btn.style.width = 'auto';
    btn.style.margin = '0 .2rem'
  });
}

const header = () => {
  const div = document.querySelector('.jumbotron');
  div.style.textAlign = 'right';
  div.style.backgroundColor = '#6B757D';
  div.style.color = '#fff';
  document.querySelector('.jumbotron a').className = 'btn btn-success btn-lg'
}

const cards = () => {
  const cardList = [];
  document.querySelectorAll('.card')[0].children[1].children[2].className = 'btn btn-success';
  document.querySelectorAll('.row .col-lg-3').forEach(item => {
    cardList.push(item.innerHTML);
  });
  document.querySelectorAll('.row .col-lg-3').forEach((item, index) => {
    const objectLiterals = {
      0: cardList[3],
      1: cardList[0],
      2: cardList[2],
      3: cardList[1],
    };
    item.innerHTML = objectLiterals[index];
  });
};

const lista = () => {
  document.querySelector('.active').className = 'list-group-item';
  let unorderedList = document.querySelector('.list-group').innerHTML;
  unorderedList = unorderedList + '<li class="list-group-item active">Quarto item</li>';
  unorderedList = unorderedList + '<li class="list-group-item">Quinto item</li>';
  document.querySelector('.list-group').innerHTML = unorderedList;
}

document.body.onload = () => {
  menu();
  header();
  cards();
  lista();
}