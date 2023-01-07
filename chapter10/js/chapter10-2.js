const origin = document.querySelector('#origin')
const result = document.querySelector('#result')
const first_array = [2,4,6,8,10]

function tail(array){
    if(array.length === 1){
        return array;
      }
      else if (array.length > 1){
        return array.slice(1);
      }
}

origin.innerText = first_array
result.innerText = tail(first_array)