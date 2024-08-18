const sliderData = [
    {
        id: 1,
        heading: "You will benefit from our SaaS marketing product",
        text: "Our team has developed a powerful tool to audit website content – a heatmap that features more than 100 reports for e-marketers and business owners."
    },
    {
        id: 2,
        heading: "We have 10+ years of experience in digital marketing",
        text: "The Plerdy team has rich experience in auditing, analyzing, and improving eCommerce websites to boost their conversion rates. So we are well aware of all the weak spots of eCommerce websites and know what data you need to run a usability audit of your website."
    },
    {
        id: 3,
        heading: "We enable generating hypotheses about what leads to low website conversions",
        text: "Thanks to the data gathered with the Plerdy heatmap about your website visitors’ behavior, you can generate hypotheses that potentially explain which functional flaws and problems are causing a low conversion on your website and how."
    },
    {
        id: 4,
        heading: "The analysis of the dynamic elements of the website",
        text: "Some services disregard such an important aspect as the clickability analysis of the dynamic elements when UX auditing, including drop-down menu, pop-up, and slider. However, thanks to the unique Plerdy auditing functionality, you will receive this information."
    },
    {
        id: 5,
        heading: "The analysis of both the desktop and mobile versions of the website",
        text: "n some areas, websites generate more than 60% of the traffic from their mobile versions, so it would be unwise not to audit the behavior of mobile users. With the Plerdy heatmap, you can run a UX auditing analysis separately for the desktop and mobile versions of your website."
    },
    {
        id: 6,
        heading: "The analysis of both the desktop and mobile versions of the website",
        text: "n some areas, websites generate more than 60% of the traffic from their mobile versions, so it would be unwise not to audit the behavior of mobile users. With the Plerdy heatmap, you can run a UX auditing analysis separately for the desktop and mobile versions of your website."
    }
]



$(document).ready(function(){

    $.map( sliderData, function( i ) {
        $('.slider').append(`
            <div class="slider__item">
                <h4>${i.heading}</h4>
                <p>${i.text}</p>
                <p class="slider__id">${i.id}</p>
            </div>    
        `);
      });
    

    $('.slider').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        variableWidth: true,
        arrows: true,
        prevArrow:`<svg class="slider__icon icon__prev"><use xlink:href="./sprite.svg#icon-prev"></use></svg>`,
        nextArrow: `<svg class="slider__icon icon__next"><use xlink:href="./sprite.svg#icon-next"></use></svg>`
        });
        
  });



