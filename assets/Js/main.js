const buyBtns = document.querySelectorAll('.js-buy-ticket');
        const modal = document.querySelector('.js-modal');
        const modalClose = document.querySelector('.js-modal-close');
        const modalContainer = document.querySelector('.js-modal-container')

        


        // Phan model show/hide
        function showBuyTickets(){
                modal.classList.add('open');
            }

        function hideBuyTickets(){
                modal.classList.remove('open'); 
            }

        for (const item of buyBtns){  
            item.addEventListener('click', showBuyTickets);
        }
        
        modalClose.addEventListener('click', hideBuyTickets);

        modal.addEventListener('click', hideBuyTickets);

        modalContainer.onclick = function(e){
            e.stopPropagation();
        }



        // Responsive 
        var header = document.getElementById('header');
        var mobileMenu = document.querySelector('.js-menu-btn');
        var headerHeight = header.clientHeight;

        // open/close menu btn
        mobileMenu.onclick = function() {
            if(header.clientHeight === headerHeight){
                header.style.height = 'auto';
            } else{
                header.style.height = '46px';
            }
        }

        // auto close when choose menu
        var menuItems = document.querySelectorAll('#nav li a[href*="#"]')
        var subNav = document.querySelector('.subnav');
        //var checksubNav = 0;

        for (var i = 0; i < menuItems.length; i++){
            var menuItem = menuItems[i];
            
            menuItem.onclick = function (e){
            var isParentMenu = this.nextElementSibling && this.nextElementSibling.classList.contains('subnav');
            
            
                if(!isParentMenu){    // Hide
                    header.style.height = '46px';

                }else{                // Show
                    e.preventDefault();    //Bo qua hanh vi mac dinh
                    header.style.height = 'auto';
                    //checksubNav++;
                }
                // if(checksubNav%2==0){
                //     subNav.style.position = 'absolute';
                // }else{
                //     subNav.style.position = 'initial';
                // }
            }
        }     
        
        
        // Auto doi slide

        var slider1 = document.querySelector('.slider-1');
        var slider2 = document.querySelector('.slider-2');
        var slider3 = document.querySelector('.slider-3');
        var slider4 = document.querySelector('.slider-4');

        // console.log(slider1)

        var slides = [slider1, slider2, slider3, slider4];

        var slideIndex = 0;
        var vitrislide = 0;

        autoShowSlider();
        function autoShowSlider(){
            var thoigian = setInterval(function(){
                

                for(var i = 0 ; i < slides.length; i++){
                    slides[i].classList.remove('open-slide');
                    slides[i].classList.add('close-slide');
                    
                }
                
                if(vitrislide == slides.length - 1){
                    slides[0].classList.remove('close-slide');
                    slides[0].classList.add('open-slide');

                }
                else{
                    slides[vitrislide].nextElementSibling.classList.remove('close-slide');
                    slides[vitrislide].nextElementSibling.classList.add('open-slide');
                    // Đây là then chốt của auto slide nó sẽ chuyển sang cái thằng tiếp theo.
                }

                vitrislide++;
                if(vitrislide >= slides.length){
                    vitrislide = 0;
                }
                console.log(vitrislide);
            },2000)



        }



        

  

        
 
 
        

















        












        












        












        












        












        












        












        












        












        












        












        












        












        












        












        