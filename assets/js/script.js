$(function () {
    $('[data-toggle="tooltip"]').tooltip();

    $('#quienes-somos').click(function(){
        alert("Somos la mejor empresa de viajes del País")
    });

    $('#destacados').click(function(){
        alert("Comparte en los mejores lugares de Chile y el Mundo")
    });
    
    $('#contacto').click(function(){
        alert("Que esperas para vivir una nueva experiencia?")
    });

    $('.titulo1').click(function(){
        $('.texto1').toggle();
    });
    $('.titulo2').click(function(){
        $('.texto2').toggle();
    });
    $('.titulo3').click(function(){
        $('.texto3').toggle();
    });

    $('.titulo4').click(function(){
        $('.texto4').toggle();
    })

    $(".ocultar-mostrar").click(function(){
        $(".ocultar-mostrar").slideToggle(1500); 
        $(".ocultar-mostrar").toggle('show');
    });
    $(".ocultar-mostrar2").click(function(){
        $(".ocultar-mostrar2").slideToggle(1500); 
        $(".ocultar-mostrar2").toggle('show');
    });
    $(".ocultar-mostrar3").click(function(){
        $(".ocultar-mostrar3").slideToggle(1500); 
        $(".ocultar-mostrar3").toggle('show');
    });
 
  })



document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
