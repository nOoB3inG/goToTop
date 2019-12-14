// Create div with id ="goToTop"
let view = {

    setUpEventListener: function() {
        this.displayScroll();   //Display Scroll Button after specific height.
        this.goToTopClick();    //Onclick Go to top function.
    },

    displayScroll: function() {
      let goToTop = document.getElementById('goToTop');
      window.addEventListener('scroll', () =>
      {
        let offSetY = window.scrollY;   // Scroll Y Pos.
        let viewHeight = window.innerHeight;  // Size of the Browser Window
        viewHeight /= 2;        // Divide viewHeight 

        if(offSetY >= viewHeight)
        {
          goToTop.style.display = 'block';
          goToTop.classList.add('goToTopdisplay');
        }
        else
        {
          goToTop.style.display = 'none';
        }
      });
    },

    goToTopClick: function()
    {
      let goToTop = document.getElementById('goToTop');
      goToTop.addEventListener('click',() => window.scrollTo(0,0));
    }

  }
  view.setUpEventListener();
