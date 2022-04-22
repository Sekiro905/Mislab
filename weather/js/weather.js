function AJAX(url, success) {
    const xhr = new XMLHttpRequest();
    xhr.open('get', url, true);
    xhr.send();
    xhr.onreadystatechange = () => {
        if (xhr.readyState == 4) {
            if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304) {
                let res = JSON.parse(xhr.response);
                success(res);
            } else {
                console.log("请求失败");
            }
        }
    }
}
let sb = document.querySelector('.search-botton');
let getback = document.querySelector('.getback');
let search = document.querySelector('.search');
let future = document.querySelector('.future');
let today = document.querySelector('.today');
let index = document.querySelector('.index');
let fb = document.getElementById('future-botton');
let tb = document.getElementById('today-botton');
let ib = document.getElementById('index-botton');
let hlist = document.querySelector('.hlist');
let history = document.querySelector('.history');
let inputcity = document.querySelector('.city');
let mid = document.querySelector('.mid-content');
let cArray = [];
sb.onclick = () => {
    if (inputcity.value == '') {
        alert('亲，还未输入城市名哦~~~');
    } else {
        let city = document.querySelector('.city').value;
        inputcity.value = '';
        const promise = new Promise((resolve, reject) => {
            AJAX(`https://geoapi.qweather.com/v2/city/lookup?location=${city}&key=6d1942b0a3c64d498f33221c6fff3280&range=cn&number=1`, (res) => {
                console.log(res);
                if (res.code == '404') {
                    alert('请检查城市名是不是输错了捏~~~');
                    reject('请检查城市名是不是输错了捏~~~');
                } else {
                    fb.className = 'option';
                    ib.className = 'option';
                    tb.className = 'option-on';
                    search.style.display = 'none';
                    today.style.display = 'block';
                    getback.style.display = 'block';
                    document.querySelector('.cityname').innerText = '您搜索的城市：' + `${res.location[0].name}`;
                };
                resolve(res.location[0].id);
            });
        })
        async function weatherRequest() {
            try {
                let result = await promise;
                // 今日天气
                AJAX(`https://devapi.qweather.com/v7/weather/now?key=6d1942b0a3c64d498f33221c6fff3280&location=${result}`, (res) => {
                        console.log(res);
                        let tempNow = res.now.temp;
                        let weatNow = res.now.text;
                        let windDir = res.now.windDir;
                        let tempToday = document.querySelector('.tempNow');
                        let weatToday = document.querySelector('.weatNow');
                        let windDirToday = document.querySelector('.windDir');
                        tempToday.textContent = tempNow + '℃';
                        weatToday.textContent = weatNow;
                        windDirToday.textContent = windDir;
                    })
                    // 生活指数
                AJAX(`https://devapi.qweather.com/v7/indices/1d?key=6d1942b0a3c64d498f33221c6fff3280&location=${result}&type=1,2,3,5,8`, (res) => {
                        console.log(res);
                        let life = document.querySelectorAll('.life');
                        let tipToday = document.querySelector('.tip');
                        let lifeicon = document.querySelectorAll('.lifeicon span');
                        let lifetitle = document.querySelectorAll('.lifetitle');
                        let lifetips = document.querySelectorAll('.lifetip');
                        let tip = res.daily[4].text;
                        tipToday.textContent = tip;
                        for (let j = 0; j < res.daily.length - 1; j++) {
                            let lifename = res.daily[j].name;
                            let lifecat = res.daily[j].category;
                            let lifetip = res.daily[j].text;
                            lifetitle[j].innerHTML = lifename + ':' + lifecat;
                            lifetips[j].innerHTML = lifetip;
                            life[j].style.border = '1px solid purple';
                        }
                        lifeicon[0].innerHTML = '&#xe669;';
                        lifeicon[1].innerHTML = '&#xe623;';
                        lifeicon[2].innerHTML = '&#xe610;';
                        lifeicon[3].innerHTML = '&#xe6ee;';
                    })
                    // 未来天气
                AJAX(`https://www.yiketianqi.com/free/week?unescape=1&appid=37819443&appsecret=JX8Vvp3H&cityid=${result}`, (res) => {
                    console.log(res);
                    let fweabox = document.querySelectorAll('.futureWeather');
                    let date = document.querySelectorAll('.date');
                    let wea = document.querySelectorAll('.wea');
                    let temH = document.querySelectorAll('.temH');
                    let temL = document.querySelectorAll('.temL');
                    for (let i = 0; i < res.data.length; i++) {
                        date[i].innerHTML = res.data[i].date;
                        wea[i].innerHTML = res.data[i].wea;
                        temH[i].innerHTML = res.data[i]['tem_day'] + '℃' + '/';
                        temL[i].innerHTML = res.data[i]['tem_night'] + '℃';
                        fweabox[i].style.border = '1px solid yellow';
                    }
                })
            } catch (e) {
                console.log(e);
            }
        }
        weatherRequest();
        let boolean = cArray.includes(city);
        if (boolean == false) {
            cArray.push(city);
            let li = document.createElement('li');
            let cityspan = document.createElement('span');
            let removespan = document.createElement('span');
            cityspan.innerText = city;
            li.className = 'historycity';
            removespan.className = 'iconfont remove';
            removespan.innerHTML = '&#xe609;';
            cityspan.style.cursor = 'pointer';
            removespan.style.position = 'absolute';
            removespan.style.right = '2.5vw';
            removespan.style.top = '3px';
            li.appendChild(cityspan);
            li.appendChild(removespan);
            hlist.appendChild(li);
        }
        inputcity.onclick = () => {
            let cityli = document.getElementsByClassName('historycity');
            let remove = document.getElementsByClassName('remove');
            history.style.display = 'block';
            for (let i = 0; i < cityli.length; i++) {
                cityli[i].onclick = function() {
                    inputcity.value = this.firstChild.innerText;
                }
                remove[i].addEventListener('click', function(event) {
                    let a = this.parentNode;
                    cArray.forEach(function(value, index, cArray) {
                        if (value == a.firstChild.innerText) {
                            cArray.splice(index, 1);
                        }
                    })
                    hlist.removeChild(a);
                    event.stopPropagation();
                }, false);
            }
            mid.onclick = function(event) {
                x = event.target;
                if (x.className != inputcity.className) {
                    history.style.display = '';
                }
            }
        }
    }
}
getback.onclick = () => {
    search.style.display = '';
    future.style.display = '';
    today.style.display = '';
    index.style.display = '';
    tb.className = 'option';
    ib.className = 'option';
    fb.className = 'option';
    setTimeout(() => {
        getback.style.display = '';
    }, 10)
}
fb.onclick = function() {
    search.style.display = 'none';
    getback.style.display = 'block';
    future.style.display = 'block';
    today.style.display = '';
    history.style.display = '';
    index.style.display = '';
    tb.className = 'option';
    ib.className = 'option';
    this.className = 'option-on';
}
tb.onclick = function() {
    search.style.display = 'none';
    getback.style.display = 'block';
    future.style.display = '';
    today.style.display = 'block';
    index.style.display = '';
    history.style.display = '';
    fb.className = 'option';
    ib.className = 'option';
    this.className = 'option-on';
}
ib.onclick = function() {
    search.style.display = 'none';
    getback.style.display = 'block';
    future.style.display = '';
    history.style.display = '';
    today.style.display = '';
    index.style.display = 'flex';
    fb.className = 'option';
    tb.className = 'option';
    this.className = 'option-on';
}
