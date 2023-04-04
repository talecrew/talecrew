const aboutTitle = $('#about .about-content .title-wrap');
const aboutContent = $('#about .about-content .content-wrap');
const businessTitle = $('#about .business-content .title-wrap');
const businessContent = $('#about .business-content .content-wrap');
const recruitSection = $('#recruit');
const coreValueTitle = $('#core-values .core-values-title');
const coreValueKey = $('#core-values .key');
const coreValueValue = $('#core-values .value');
const vision = $('#vision .content-wrap');
const header = $('header');

// header
$('header li').on('click', e => {
    const self = $(e.target);
    const isMobile = $(window).width() <= 768;
    let diff = 0;

    if (isMobile) diff -= 100;

    $('html, body').animate({
        scrollTop: $(`#${self.data('move_to')}`).offset().top + diff
    }, 800);
});

$('.autoplay').slick({
    centerMode: true,
    arrows: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    responsive: [
    {
        breakpoint: 1400,
        arrows: false,
        settings: {
            centerMode: true,
            slidesToShow: 4
        }
    },
    {
        breakpoint: 1300,
        arrows: false,
        settings: {
            centerMode: true,
            slidesToShow: 4
        }
    },
    {
        breakpoint: 1023,
        arrows: false,
        settings: {
            centerMode: true,
            slidesToShow: 3
        }
    },
    {
        breakpoint: 767,
            settings: {
                centerMode: true,
                slidesToShow: 3
            }
        }
    ]
});

// 작품 상세보기(모바일)
$('.desc-wrap ').on('click', e => {
    if ($(window).width() > 768) return;
    $(e.target).find('link-btn').click();
});

// 작품 상세보기
$('.link-btn').on('click', e => {
    const self = $(e.target);
    window.open(self.data('url'), '_blank');
});

// 채용 바로가기
$('.recruit-btn').on('click', e => {
    const self = $(e.target);
    window.open(self.data('url'), '_blank');
});

let scrollTimeout = 0;
$(window).on('scroll', () => {
    const scrollTop = $(window).scrollTop();
    const scroll = $(window).scrollTop() + $(window).height();
    const diff = 200;

    // header
    if (scrollTop > $('#about').offset().top && !header.hasClass('in')) {
        header.addClass('in');
    } else if (scrollTop < $('#about').offset().top && header.hasClass('in')) {
        header.removeClass('in');
    }

    // about title
    if (scroll > aboutTitle.offset().top + diff && !aboutTitle.hasClass('in')) {
        aboutTitle.addClass('in');
    }

    // about content
    if (scroll > aboutContent.offset().top + diff && !aboutContent.hasClass('in')) {
        aboutContent.addClass('in up');
    }

    // about business title
    if (scroll > businessTitle.offset().top + diff && !businessTitle.hasClass('in')) {
        businessTitle.addClass('in');
    }

    // about business content
    if (scroll > businessContent.offset().top + diff && !businessContent.hasClass('in')) {
        businessContent.addClass('in up');
    }

    // recruit
    if (scroll > recruitSection.offset().top + diff && !recruitSection.hasClass('in')) {
        recruitSection.find('.recruit-left').addClass('in show');
        recruitSection.find('.recruit-right').addClass('in');
    }

    // core-value
    let coreValueKeyTimeout = 0;
    let coreValueValueTimeout = 0;
    if (scroll > coreValueTitle.offset().top + diff && !coreValueTitle.hasClass('in')) {
        coreValueTitle.addClass('in');
        clearTimeout(coreValueKeyTimeout);
        coreValueKeyTimeout = setTimeout(e => {
            $('#core-values .content-table').find('.fade').not('.in').addClass('in show');
        }, 80);

        clearTimeout(coreValueValueTimeout);
        coreValueValueTimeout = setTimeout(e => {
            $('#core-values .content-table').find('.fade').not('in').addClass('in show');
        }, 80);
    }

    if (scroll > vision.offset().top && !vision.hasClass('in')) {
        vision.addClass('in show');
    }
});

$(document).ready(() => {
    setTimeout(() => {
        $('#intro .logo').addClass('in');
    }, 300);

    setTimeout(() => {
        $('#intro .text').addClass('in');
        $('#intro .down').addClass('up');
    }, 500);
});