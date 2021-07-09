

        var swiper = new Swiper('.swiper-container', {
          effect: 'coverflow',
          grabCursor: true,
          centeredSlides: true,
          slidesPerView: 'auto',
          coverflowEffect: {
            rotate: 0,
            stretch: 0,
            depth: 200,
            modifier: 1,
            slideShadows: true,
          },
          pagination: {
            el: '.swiper-pagination',
          },
          loop: true,
        });

        function toggleMenu(){
            const menuToggle = document.querySelector('.toggle');
            const navigation = document.querySelector('.navigation')
            menuToggle.classList.toggle('active')
            navigation.classList.toggle('active')
        }
        
        function imagen1(){
            window.open("miembro1.html","_self");
        }

        window.addEventListener("load", aleatorio, false);
        
        var textos = new Array()
        textos[0] = '" Aveces hay que pasar por caminos difíciles para llegar a lugares maravillosos. "';
        textos[1] = '" Vive feliz, tan feliz que no sepas si vives, sueñas o estás en tu moto. "';
        textos[2] = '" Cuatro ruedas mueven el cuerpo, dos ruedas mueven el alma. "';
        textos[3] = '" La felicidad no es cuestión de posesiones, es cuestión de hechos y vivencias. "';
        textos[4] = '" No puedes volver atrás y cambiar el principio, pero puedes comenzar de donde estás y cambiar el final. "';
        textos[5] = '" Perder un mapa es el inicio de una gran aventura. "';
        textos[6] = '" Cómo voy a huir de mi locura, si con ella me siento LIBRE. "';
        textos[7] = '" Motívame, apóyame o apartate de mí camino. "';
        textos[8] = '" Muy pocos saben el desorden de emociones que provoca una moto. "';
        textos[9] = '" No importa si avanzas lentamente, lo que importa es que jamás te detengas. "';
        textos[10] = '" Aprende a vencer tus miedos y sale a recorrer TÚ CAMINO. "';
        textos[11] = '" Nacimos para cometer errores y aprender de ellos, no para fingir que somos perfectos. "';
        textos[12] = '" No importa la moto que tengas, lo que importa es la DISFRUTES. "';
        textos[13] = '" La imaginación te puede llevar a muchos lados, pero una moto te los puede hacer REALIDAD. "';
        textos[14] = '" Concentrate en escuchar lo hermoso que suena tú moto y no en escuchar tus problemas. "';
        textos[15] = '" Los LÍDERES no crean seguidores, crean más LÍDERES. "';
        textos[16] = '" Para llevarse bien no se necesitan las mismas ideas, se necesita el mismo respeto. "';
        textos[17] = '" Cualquier cosa que acelere tú corazón vale la pena...!!! "';
        textos[18] = '" Seguir cuando no crees que puedes más, es lo que te hace diferente a los demás. "';

        function aleatorio() {
            document.getElementById("resultado").innerHTML = "";//Limpia el mensaje anterior
            nro = Math.floor(Math.random() * (textos.length - 0) + 0);//obtienes el valor aleatorio siempre acorde al tamaño de tu array
            document.getElementById("resultado").innerHTML = textos[nro];//imprime resultado
        }      
