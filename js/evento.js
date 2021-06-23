/* Mostrar conteudo em DIV */
document.querySelectorAll('[wm-nav]').forEach(link => {
    const conteudo = document.getElementById('conteudo')

    link.onclick = function(e) {
        e.preventDefault()
        fetch(link.getAttribute('wm-nav'))
            .then(resp => resp.text())
            .then(html => conteudo.innerHTML = html)
    }
})

/* Removendo botão direito */ 
document.addEventListener('contextmenu', event => event.preventDefault());

/* Ocultar e Mostrar DIV */
var btn1 = document.getElementById('btn-diretoria');
var container1 = document.querySelector('.container-diretoria');
btn1.addEventListener('click', function() {
    
  if(container1.style.display === 'block') {
      container1.style.display = 'none';
  } else {
      container1.style.display = 'block';
  }
});

var btn2 = document.getElementById('btn-administrativo');
var container2 = document.querySelector('.container-administrativo');
btn2.addEventListener('click', function() {
    
  if(container2.style.display === 'block') {
      container2.style.display = 'none';
  } else {
      container2.style.display = 'block';
  }
});

var btn3 = document.getElementById('btn-comercial');
var container3 = document.querySelector('.container-comercial');
btn3.addEventListener('click', function() {
    
  if(container3.style.display === 'block') {
      container3.style.display = 'none';
  } else {
      container3.style.display = 'block';
  }
});

var btn4 = document.getElementById('btn-contabilidade');
var container4 = document.querySelector('.container-contabilidade');
btn4.addEventListener('click', function() {
    
  if(container4.style.display === 'block') {
      container4.style.display = 'none';
  } else {
      container4.style.display = 'block';
  }
});

var btn5 = document.getElementById('btn-financeiro');
var container5 = document.querySelector('.container-financeiro');
btn5.addEventListener('click', function() {
    
  if(container5.style.display === 'block') {
      container5.style.display = 'none';
  } else {
      container5.style.display = 'block';
  }
});

var btn6 = document.getElementById('btn-ti');
var container6 = document.querySelector('.container-ti');
btn6.addEventListener('click', function() {
    
  if(container6.style.display === 'block') {
      container6.style.display = 'none';
  } else {
      container6.style.display = 'block';
  }
});

var btn7 = document.getElementById('btn-rh');
var container7 = document.querySelector('.container-rh');
btn7.addEventListener('click', function() {
    
  if(container7.style.display === 'block') {
      container7.style.display = 'none';
  } else {
      container7.style.display = 'block';
  }
});

var btn8 = document.getElementById('btn-dp');
var container8 = document.querySelector('.container-dp');
btn8.addEventListener('click', function() {
    
  if(container8.style.display === 'block') {
      container8.style.display = 'none';
  } else {
      container8.style.display = 'block';
  }
});

var btn9 = document.getElementById('btn-marketing');
var container9 = document.querySelector('.container-marketing');
btn9.addEventListener('click', function() {
    
  if(container9.style.display === 'block') {
      container9.style.display = 'none';
  } else {
      container9.style.display = 'block';
  }
});

var btn10 = document.getElementById('btn-manutencao');
var container10 = document.querySelector('.container-manutencao');
btn10.addEventListener('click', function() {
    
  if(container10.style.display === 'block') {
      container10.style.display = 'none';
  } else {
      container10.style.display = 'block';
  }
});

var btn11 = document.getElementById('btn-logistica');
var container11 = document.querySelector('.container-logistica');
btn11.addEventListener('click', function() {
    
  if(container11.style.display === 'block') {
      container11.style.display = 'none';
  } else {
      container11.style.display = 'block';
  }
});

var btn12 = document.getElementById('btn-uge');
var container12 = document.querySelector('.container-uge');
btn12.addEventListener('click', function() {
    
  if(container12.style.display === 'block') {
      container12.style.display = 'none';
  } else {
      container12.style.display = 'block';
  }
});

var btn13 = document.getElementById('btn-go');
var container13 = document.querySelector('.container-go');
btn13.addEventListener('click', function() {
    
  if(container13.style.display === 'block') {
      container13.style.display = 'none';
  } else {
      container13.style.display = 'block';
  }
});

var btn14 = document.getElementById('btn-prevencao');
var container14 = document.querySelector('.container-prevencao');
btn14.addEventListener('click', function() {
    
  if(container14.style.display === 'block') {
      container14.style.display = 'none';
  } else {
      container14.style.display = 'block';
  }
});

var btn15 = document.getElementById('btn-comidinhas');
var container15 = document.querySelector('.container-comidinhas');
btn15.addEventListener('click', function() {
    
  if(container15.style.display === 'block') {
      container15.style.display = 'none';
  } else {
      container15.style.display = 'block';
  }
});

var btn16 = document.getElementById('btn-atacadaolag');
var container16 = document.querySelector('.container-atacadaolag');
btn16.addEventListener('click', function() {
    
  if(container16.style.display === 'block') {
      container16.style.display = 'none';
  } else {
      container16.style.display = 'block';
  }
});

var btn17 = document.getElementById('btn-barra');
var container17 = document.querySelector('.container-barra');
btn17.addEventListener('click', function() {
    
  if(container17.style.display === 'block') {
      container17.style.display = 'none';
  } else {
      container17.style.display = 'block';
  }
});

var btn18 = document.getElementById('btn-cambeba');
var container18 = document.querySelector('.container-cambeba');
btn18.addEventListener('click', function() {
    
  if(container18.style.display === 'block') {
      container18.style.display = 'none';
  } else {
      container18.style.display = 'block';
  }
});

var btn19 = document.getElementById('btn-centro');
var container19 = document.querySelector('.container-centro');
btn19.addEventListener('click', function() {
    
  if(container19.style.display === 'block') {
      container19.style.display = 'none';
  } else {
      container19.style.display = 'block';
  }
});

var btn20 = document.getElementById('btn-cidade2000');
var container20 = document.querySelector('.container-cidade2000');
btn20.addEventListener('click', function() {
    
  if(container20.style.display === 'block') {
      container20.style.display = 'none';
  } else {
      container20.style.display = 'block';
  }
});

var btn21 = document.getElementById('btn-iguatu');
var container21 = document.querySelector('.container-iguatu');
btn21.addEventListener('click', function() {
    
  if(container21.style.display === 'block') {
      container21.style.display = 'none';
  } else {
      container21.style.display = 'block';
  }
});

var btn22 = document.getElementById('btn-juazeiro');
var container22 = document.querySelector('.container-juazeiro');
btn22.addEventListener('click', function() {
    
  if(container22.style.display === 'block') {
      container22.style.display = 'none';
  } else {
      container22.style.display = 'block';
  }
});

var btn23 = document.getElementById('btn-luciano');
var container23 = document.querySelector('.container-luciano');
btn23.addEventListener('click', function() {
    
  if(container23.style.display === 'block') {
      container23.style.display = 'none';
  } else {
      container23.style.display = 'block';
  }
});

var btn24 = document.getElementById('btn-maracanau');
var container24 = document.querySelector('.container-maracanau');
btn24.addEventListener('click', function() {
    
  if(container24.style.display === 'block') {
      container24.style.display = 'none';
  } else {
      container24.style.display = 'block';
  }
});

var btn25 = document.getElementById('btn-messejana');
var container25 = document.querySelector('.container-messejana');
btn25.addEventListener('click', function() {
    
  if(container25.style.display === 'block') {
      container25.style.display = 'none';
  } else {
      container25.style.display = 'block';
  }
});

var btn26 = document.getElementById('btn-northshopping');
var container26 = document.querySelector('.container-northshopping');
btn26.addEventListener('click', function() {
    
  if(container26.style.display === 'block') {
      container26.style.display = 'none';
  } else {
      container26.style.display = 'block';
  }
});

var btn27 = document.getElementById('btn-parangaba');
var container27 = document.querySelector('.container-parangaba');
btn27.addEventListener('click', function() {
    
  if(container27.style.display === 'block') {
      container27.style.display = 'none';
  } else {
      container27.style.display = 'block';
  }
});

var btn28 = document.getElementById('btn-rodolfo');
var container28 = document.querySelector('.container-rodolfo');
btn28.addEventListener('click', function() {
    
  if(container28.style.display === 'block') {
      container28.style.display = 'none';
  } else {
      container28.style.display = 'block';
  }
});

var btn29 = document.getElementById('btn-dumont');
var container29 = document.querySelector('.container-dumont');
btn29.addEventListener('click', function() {
    
  if(container29.style.display === 'block') {
      container29.style.display = 'none';
  } else {
      container29.style.display = 'block';
  }
});

var btn30 = document.getElementById('btn-derby');
var container30 = document.querySelector('.container-derby');
btn30.addEventListener('click', function() {
    
  if(container30.style.display === 'block') {
      container30.style.display = 'none';
  } else {
      container30.style.display = 'block';
  }
});

var btn31 = document.getElementById('btn-junco');
var container31 = document.querySelector('.container-junco');
btn31.addEventListener('click', function() {
    
  if(container31.style.display === 'block') {
      container31.style.display = 'none';
  } else {
      container31.style.display = 'block';
  }
});