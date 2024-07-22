import{ getAuth , onAuthStateChanged } from "./Firebase/firebase.js"

    // AOS.init();
    // // Counter Animation
    //    $(window).on('scroll', function() {
    //     $('.counter').each(function() {
    //         var $this = $(this);
    //         var countTo = $this.attr('data-target');
    //         if ($(window).scrollTop() + $(window).height() > $this.offset().top && !$this.hasClass('counting')) {
    //             $this.addClass('counting');
    //             $({ countNum: $this.text() }).animate({ countNum: countTo }, {
    //                 duration: 2000,
    //                 easing: 'swing',
    //                 step: function () {
    //                     $this.text(Math.floor(this.countNum));
    //                 },
    //                 complete: function () {
    //                     $this.text(this.countNum);
    //                 }
    //             });
    //         }
    //     });
    //     }).trigger('scroll');
        
        // Check if user is already SignIn or not
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
          if (user) {
           console.log("User is hear")
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/auth.user
            const uid = user.uid;
            // ...
          } else {
           console.log("User is not hear")
            // User is signed out
            // ...
          }
        });