//listen for submit
document.getElementById('cipher1').addEventListener('submit', encryption);
document.getElementById('cipher2').addEventListener('submit', decrypt);

let alph = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
//encrypt
function encryption(e) {
  // this is apl set

  let input = $('#plainText').val();
  input = input.toLowerCase();
  input = input.split("");
  
  let result = "";
  input.forEach(letter => {
      alph.forEach((checker, index) => {
          if (letter == checker) {
              let position = index - 5;
              if (position <= 0) {
                  position = 26 + position 
                  result +=  alph[position];
              } else {
                  result +=  alph[index - 5];
              }
          }
      });
  });
  result = result.toUpperCase();

let toNumber  = result.split('');
  toNumber.forEach((letter,index) =>{
      alph.forEach((checker, index) => {
          if (letter == checker) {
              console.log(index);
          }
      });
  })
  $("#encrypted").val(result);
  console.log(result);
   e.preventDefault();
};

function decrypt(e){
  let input = $('#plainText').val();
  input = input.toLowerCase();
  input = input.split("");
  
  let result = "";
  input.forEach(letter => {
      alph.forEach((checker, index) => {
          if (letter == checker) {
              let position = index + 5;
              if (position >= 26) {
                  position = position - 26 
                  result +=  alph[position];
              } else {
                  result +=  alph[index + 5];
              }
          }
      });
  });
  result = result.toUpperCase();
  $("#decrypted").val(result);
  console.log(result);
  e.preventDefault();
}


 