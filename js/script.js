$(document).ready(function(){
    $('.prev').click(function(){            // al click sul pilsante prev richiamo la fz prevImage
        pervImage();
    });
    $('.next').click(function(){            //al click sul pilsante next richiamo la fz nextImage
        nextImage();
    });

    // **********FUNZIONI************************
    function nextImage(){
        var activeImage = $('.images img.active');      //memorizzo in una var l'immagine attiva
        var cerchioAttivo =$('.nav i.active');
        activeImage.removeClass('active');              //toglere la classe
        cerchioAttivo.removeClass('active');
        if(activeImage.hasClass('last')){               //istruzioni per aggiungere la classe active
            $('.images img.first').addClass('active');
            $('.nav i.first').addClass('active');
        }else{
            activeImage.next().addClass('active');
            cerchioAttivo.next().addClass('active');
        }
    }

    //*******fz prev **********
    function prevImage(){
        var activeImage = $('.images img.active');      //memorizzo in una var l'immagine attiva
        var cerchioAttivo =$('.nav i.active');
        activeImage.removeClass('active');              //toglere la classe
        cerchioAttivo.removeClass('active');
        if(activeImage.hasClass('first')){              //mettere classe
            $('.images img.last').addClass('active');
            $('.nav i.last').addClass('active');
        }else{
            activeImage.prev().addClass('active');
            cerchioAttivo.prev().addClass('active');
        }
    };

});
