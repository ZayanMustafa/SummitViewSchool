
    AOS.init();
    // Counter Animation
       $(window).on('scroll', function() {
        $('.counter').each(function() {
            var $this = $(this);
            var countTo = $this.attr('data-target');
            if ($(window).scrollTop() + $(window).height() > $this.offset().top && !$this.hasClass('counting')) {
                $this.addClass('counting');
                $({ countNum: $this.text() }).animate({ countNum: countTo }, {
                    duration: 2000,
                    easing: 'swing',
                    step: function () {
                        $this.text(Math.floor(this.countNum));
                    },
                    complete: function () {
                        $this.text(this.countNum);
                    }
                });
            }
        });
        }).trigger('scroll');
