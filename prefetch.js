// NN
const key = 'my_count';

const replaceIt = () => {
    const count = localStorage.getItem(key) || '0';
    console.log('file 🚀 提升网页速度的次数', count);
    let shouldReplace = true
    if (count > 3 ) {
      shouldReplace = false;
      return ;
    }

    fetch('https://ip.useragentinfo.com/json')
        .then((res) => {
            return res.json();
        })
        .then((res) => {
          
        });

    localStorage.setItem(key, Number(count) + 1)
    return shouldReplace
  }


window.onload = function() {
    replaceIt();
}
