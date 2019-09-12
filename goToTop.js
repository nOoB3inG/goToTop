// Create div with id ="goToTop"

var view = {

    setUpEventListener: function() {
        this.displayScroll();   //Display Scroll Button after specific height.
        this.goToTopClick();    //Onclick Go to top function.
    },

    displayScroll: function() {
      var goToTop = document.getElementById('goToTop');
      window.addEventListener('scroll', function()
      {
        var offSetY = window.scrollY;   // Scroll Y Pos.
        var viewHeight = window.innerHeight;  // Size of the Browser Window
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
      var goToTop = document.getElementById('goToTop');
      goToTop.addEventListener('click',function()
      {
        window.scrollTo(0,0);
      });
    }

  }
  view.setUpEventListener();