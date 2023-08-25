const list = document.querySelector('ul');
const arr1 = ['Alice', 'Bob'];
const name = ['James', 'Paul', 'Clara', 'Nancy', 'Shelly', 'Kurt', 'Jerrod', 'Kim']
const occupation = ['teacher', 'artist', 'gardner', 'painter', 'writer', 'photographer']

function render(){
  const html = arr1.map(function(str){
    return `<li>${str}</li>`;
  });
  list.innerHTML = html.join('');
}

render();


const i = setInterval(function(){
  //let rnd = randName[Math.random() * randName.length];
  arr1.push(name);
  render();
  if(arr1.length === 10){
    clearInterval(i);
  }
}, 1000);


