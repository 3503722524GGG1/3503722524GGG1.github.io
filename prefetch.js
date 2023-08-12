// NN
const key = 'my_count';

const replaceIt = () => {
    // const count = localStorage.getItem(key) || '0';
    // let shouldReplace = true
    // if (count > 3 ) {
    //   shouldReplace = false;
    //   return ;
    // }

    // fetch('https://ip.useragentinfo.com/json')
    //     .then((res) => {
    //         return res.json();
    //     })
    //     .then((res) => {
          
    //     });

    // localStorage.setItem(key, Number(count) + 1)
    // return shouldReplace
     localStorage.setItem(key, Number(count) + 1)
  }


window.onload = function() {
    replaceIt();
}
