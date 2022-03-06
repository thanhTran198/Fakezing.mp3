var $ = document.querySelector.bind(document);
var $$ = document.querySelectorAll.bind(document);
var $$$ = document.getElementById.bind(document);

var individualChilds = $$('.topic-content__individual-option__li');
var subindividualChilds = $$('.individual-child__sub');
var chanNames = $$('.change-item');
var categoryNapbarItems = $$('.category__napbar-item');
var subCategaryItem = $$('.sub-categery__item');

categoryNapbarItems.forEach((categoryNapbarItem, index) => {
    const subCategoryNapbarItem = subCategaryItem[index];
    categoryNapbarItem.onclick = function() {
        $('.category__napbar-item.category__active').classList.remove('category__active');

        this.classList.add('category__active');
        // $('.topic-content__individual').style.display = 'block';
    };
});

individualChilds.forEach((individualChild, index) => {
    const subindividualChild = subindividualChilds[index];
    individualChild.onclick = function() {
        //gỡ bỏ class
        $('.topic-content__individual-option__li.active').classList.remove('active');
        $('.individual-child__sub.dlblock').classList.remove('dlblock');
        
        //thên class
        this.classList.add('active');
        subindividualChild.classList.add('dlblock');
    };
});

// ẩn hiện cửa sổ danh mục cá nhân
function topicIndividual() {
    if($('.topic-content__individual-option__li-icon--sub').style.display.endsWith('none')) {
        $('.topic-content__individual-option__li-icon--sub').style.display = 'block';
    }else {
        $('.topic-content__individual-option__li-icon--sub').style.display = 'none';
    };

};

chanNames.forEach((chanName, index) => {
    chanName.onclick = function() {
        //lấy text của 2 item sắp đổi tên cho nhau
        const textChanName = chanName.innerText;
        const artist = $$$('change-name').innerText;
        //lấy các class của 2 item lưu vòa biến
        // const classChanName = $$$('change-name').classList;
        // const classChannameChild = chanName.classList;
        
        //đổi tên cho nhau
        $$$('change-name').innerText = textChanName;
        chanName.innerText = artist;
        //đổi class cho nhau
        // $$$('change-name').classList = classChannameChild;
        // chanName.classList = classChanName;

        //chuyển active về chanName
        $('.topic-content__individual-option__li.active').classList.remove('active');
        $$$('change-name').classList.add('active');

        //ẩn đi cửa sổ danh mục cá nhân
        $('.topic-content__individual-option__li-icon--sub').style.display = 'none';
    };
});


// chuyển ảnh
window.addEventListener("load", function() {
    const slider = $('.slider');
    const sliderMain = $('.slider-main');
    const sliderItems = $$('.discover-animation__img');
    const nextBtn = $('.directional-icon-left');
    const prevBtn = $('.directional-icon-right');
    const dotItems = $$('.slider-dot-item');
    var sliderX = 0;

    prevBtn.addEventListener("click", function() {
        let sliderItem = sliderItems[sliderX];
        sliderItem.style.marginLeft = '-288px';
        sliderX++;
        if(sliderX >= sliderItems.length) {
            sliderX = 0;
        }
    })
    nextBtn.addEventListener("click", function() {
        let sliderItem = sliderItems[sliderX];
        if(sliderItem.style.marginLeft = '-288px') {
            sliderItem.style.marginLeft = '288px';
            sliderX--;
        }
    })
})

 
var hoverTheSongs = $$('.playlists__child-next--item');

hoverTheSongs.forEach((hoverTheSong)=> {
    hoverTheSong.onmouseover = function() {
        hoverTheSong.style = "background-color:rgba(255, 255, 255, 0.123);"
    }
}) // sửa lại phần hover ở trên thanh bên phải tìm kiếm





// zingchart - line chart
var xValues = ['11:00','13:00',"15:00",'17:00','19:00','21:00','23:00','01:00','03:00','05:00','07:00','09:00'];

new Chart("myisChart", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [{ 
      data: [3800,3850,3600,3800,4150,2100,1700,1720,3800,4000,3000,6300],
      borderColor: "blue",
      pointBorderWidth: "400px",
      fill: false
    }, { 
      data: [4200,4600,4500,4200,4500,2200,1650,1630,4300,5000,4000,5000],
      borderColor: "green",
      fill: false
    }, { 
      data: [5800,5900,5700,5600,4600,2200,1600,1610,6300,6300,5000,6300],
      borderColor: "red",
      fill: false,
    }]
  },
  options: {
    legend: {display: false},
    scales: {
        xAxes: [{
            ticks: {
                display: false
            }
        }]
    },
    scales: {
        yAxes: [{
            ticks: {
                display: false
            }
        }]
    },
    layout: {
        padding: 20
    }
  }
});

const listUserFolows = $$('.list-happy-pictureframe')
listUserFolows.forEach((listUserFolow)=> {
    let stackUp = 0
    
    listUserFolow.style.left = listUserFolow.offsetLeft + 10 + 'px';
    stackUp ++
})

//  slider đảo ảnh tag khám phá
let sliderIndex1 = 1;
const sliderDiscover = $$('.discover-animation__slider')
changeImg1Replate = function() {
    sliderDiscover.forEach((item, index) => {
        // console.log(index)
        if(index == sliderIndex1) {
            sliderDiscover[index].classList.replace('container-discover__slider-item-1', 'container-discover__slider-item-none')
            console.log('đã chạy')
        }
    })
}
changeImg1Replate()