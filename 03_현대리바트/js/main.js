let s = 0;
let photo = $('.msImgBox');
let pager = $('.msPager ul li');
let btnPrev = $('.msPrev');
let btnNext = $('.msNext');
let all = photo.size();

//이벤트 및 초기값 설정
// 헤더 서브 메뉴
$('.h_gnb .lnb')
    .mouseover(function () {
        $('.h_gnb .lnb .sub').hide();
        $(this).find('.sub').show();
    })
    .mouseout(function () {
        $(this).find('.sub').hide();
    });

// 초기값을 세팅
photo.eq(s).css({
    left: 0,
});
pager.eq(s).addClass('active');

// 페이져 클릭
pager.on({
    click: function () {
        let j = $(this).index();
        pager.removeClass('active');
        $(this).addClass('active');
        if (j > s) {
            moveToLeft(j);
        } else {
            moveToRight(j);
        }
    },
});
// 좌우 버튼
btnPrev.on({
    click: function () {
        let n = s - 1;
        if (n < 0) {
            n = all - 1;
        }
        pager.eq(n).click();
    },
});
btnNext.on({
    click: function () {
        let n = s + 1;
        if (n == all) {
            n = 0;
        }
        pager.eq(n).click();
    },
});

// 함수 정의
function moveToLeft(i) {
    let currentPhoto = photo.eq(s);
    let newPhoto = photo.eq(i);
    currentPhoto.stop().animate({ left: '-100%' }, 1500);
    newPhoto.css({ left: '100%' }).stop().animate({ left: 0 }, 1500);
    s = i;
}

function moveToRight(i) {
    let currentPhoto = photo.eq(s);
    let newPhoto = photo.eq(i);
    currentPhoto.stop().animate({ left: '100%' }, 1500);
    newPhoto.css({ left: '-100%' }).stop().animate({ left: 0 }, 1500);
    s = i;
}
