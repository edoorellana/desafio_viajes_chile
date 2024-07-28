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
 
  })



document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
