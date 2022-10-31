const digitalClock = () => {
    let d = new Date();
    let hh = d.getHours();
    let mm = d.getMinutes();
    let ss = d.getSeconds();
    let am_pm = 'AM';

    if (hh > 12) {
        hh = hh-12;
        am_pm = 'PM'
    }
    if (hh === 0) {
        hh = 12;
        am_pm = 'AM';
    }
    if (hh < 10) {
        hh = '0' + hh;
    }
    if (mm < 10) {
        mm = '0' + mm; 
    }
    if (ss < 10) {
        ss = '0' + ss;
    }

    let time = hh + ':' + mm + ':' + ss + ' ' + am_pm;
    document.getElementById('time').innerHTML = time;
    console.log(time);
}
digitalClock();
setInterval(digitalClock, 1000);
