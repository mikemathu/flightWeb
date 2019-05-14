let sliderImages = document.querySelectorAll('.slide'),
         arrowLeft = document.querySelector('#arrow-left'),
         arrowRight = document.querySelector('#arrow-right'),
         current = 0;
         index = 1;

     //Clear all images
     function reset(){
         for(let i = 0; i < sliderImages.length; i++){
             sliderImages[i].style.display = 'none';
             }
     } 

     //Initiate slider
     function startSlide(){
         reset();
         if(index > sliderImages.length){index = 1}
         sliderImages[index-1].style.display = "block";
         index++;
         setTimeout(startSlide,5000);         
     }
        //Show prev
     function slideLeft(){
         reset();
         sliderImages[current - 1].style.display = 'block';
         current--;
     }

     //Show next
     function slideRight(){
         reset();
         sliderImages[current + 1].style.display ='block';
         current++;
    }

     //Left arrow click
     arrowLeft.addEventListener('click',function(){
         if(current ===  0){ 
             current = sliderImages.length;
         }
         slideLeft();
     }); 

     //Right arrow click
     arrowRight.addEventListener('click',function(){
         if(current === sliderImages.length - 1){
             current = -1;
         }
         slideRight();
     });
    startSlide();

    /*Pop up form*/

    // Get modal element
var modal = document.getElementById('simpleModal');
// Get open modal button
var modalBtn1 = document.getElementById('modalBtn1');
var modalBtn2 = document.getElementById('modalBtn2');
var modalBtn3 = document.getElementById('modalBtn3');
var modalBtn4 = document.getElementById('modalBtn4');
var modalBtn5 = document.getElementById('modalBtn5');
var modalBtn6 = document.getElementById('modalBtn6');
var modalBtn7 = document.getElementById('modalBtn7');
// Get close button
var closeBtn = document.getElementsByClassName('closeBtn')[0];
var  closeBtn1 = document.getElementsByClassName('closeBtn');

// Listen for open click
modalBtn1.addEventListener('click', openModal);
modalBtn2.addEventListener('click', openModal);
modalBtn3.addEventListener('click', openModal);
modalBtn4.addEventListener('click', openModal);
modalBtn5.addEventListener('click', openModal);
modalBtn6.addEventListener('click', openModal);
modalBtn7.addEventListener('click', openModal);
// Listen for close click
closeBtn.addEventListener('click', closeModal);
closeBtn1.addEventListener('click', closeModal);
// Listen for outside click
window.addEventListener('click', outsideClick);

// Function to open modal
function openModal(){
  modal.style.display = 'block';
}

// Function to close modal
function closeModal(){
  modal.style.display = 'none';
}

// Function to close modal if outside click
function outsideClick(e){
  if(e.target == modal){
    modal.style.display = 'none';
  }
}