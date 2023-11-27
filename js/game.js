var hodyKostka1 = [];
var hodyKostka2 = [];

document.getElementById('game').addEventListener('click', function() {
    hra();
});

document.getElementById('multiPlayer').addEventListener('click', function() {
    hraSSouperem();
});

function hra() {
    hodKostka(1, hodyKostka1);
    hodKostka(2, hodyKostka2);
}

function hraSSouperem() {
    hodKostka(1, hodyKostka1);
    hodKostka(2, hodyKostka2);

    var vyherce = determineWinner(hodyKostka1[hodyKostka1.length - 1], hodyKostka2[hodyKostka2.length - 1]);

    if (vyherce === 1) {
        document.getElementById('result1').innerHTML += '<p>Vyhrál jsi!</p>';
        document.getElementById('result2').innerHTML += '<p>Prohrál soupeř.</p>';
    } else if (vyherce === 2) {
        document.getElementById('result2').innerHTML += '<p>Vyhrál soupeř.</p>';
        document.getElementById('result1').innerHTML += '<p>Prohrál jsi!</p>';
    } else {
        document.getElementById('result1').innerHTML += '<p>Remíza!</p>';
        document.getElementById('result2').innerHTML += '<p>Remíza!</p>';
    }
}

function hodKostka(kostkaId, hody) {
    var h = Math.ceil(Math.random() * 6);
    hody.push(h);
    document.getElementById('cube' + kostkaId).src = 'img/kostka' + h + '.png';
    document.getElementById('result' + kostkaId).innerHTML = '<p>Hod Kostky'  + ': ' + h + '</p>';
    document.getElementById('result' + kostkaId).innerHTML += '<p>Počet hodů: ' + hody.length + '</p>';
    
    
}

function determineWinner(hod1, hod2) {
    if (hod1 > hod2) {
        return 1;
    } else if (hod1 < hod2) {
        return 2;
    } else {
        return 0; 
    }
}