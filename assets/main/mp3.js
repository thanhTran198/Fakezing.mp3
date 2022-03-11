var $ = document.querySelector.bind(document);
var $$ = document.querySelectorAll.bind(document);
var $$$ = document.getElementById.bind(document);




var individualChilds = $$('.topic-content__individual-option__li');
var subindividualChilds = $$('.individual-child__sub');
var chanNames = $$('.change-item');
var categoryNapbarItems = $$('.category__napbar-item');
var subCategaryItem = $$('.sub-categery__item');

//  thêm active bên trái khi click vào
categoryNapbarItems.forEach((categoryNapbarItem, index) => {
    const subCategoryNapbarItem = subCategaryItem[index];
    categoryNapbarItem.onclick = function() {
        console.log(categoryNapbarItem)
        $('.category__napbar-item.category__active').classList.remove('category__active');

        this.classList.add('category__active');

        if(categoryNapbarItem.innerText == 'Cá Nhân') {
            $('.topic-content__individual').style.display = 'block';
            $('.discover').style.display = 'none'
        }else if(categoryNapbarItem.innerText == 'Khám Phá') {
            $('.topic-content__individual').style.display = 'none';
            $('.discover').style.display = 'block'
        }
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
        const textChanName = chanName.innerText;
        const artist = $$$('change-name').innerText;
        
        //đổi tên cho nhau
        $$$('change-name').innerText = textChanName;
        chanName.innerText = artist;

        //chuyển active về chanName
        $('.topic-content__individual-option__li.active').classList.remove('active');
        $$$('change-name').classList.add('active');

        //ẩn đi cửa sổ danh mục cá nhân
        $('.topic-content__individual-option__li-icon--sub').style.display = 'none';
    };
});
 
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
const imgSliderDiscovers = $$('.discover-animation__slider')
const imgSliderDiscover1 = $('.discover-animation__slider-1')
const imgSliderDiscover2 = $('.discover-animation__slider-2')
const imgSliderDiscover3 = $('.discover-animation__slider-3')
const imgSliderDiscover4 = $('.discover-animation__slider-4')
const containerSlider = $('.discover-animation')
let sttImg = 1
const iconSliders = $$('.directional-icon-slider')
const nextBtn = $('.directional-icon-left')
const prevBtn = $('.directional-icon-right')

motionProcessing = function() {
    imgSliderDiscovers.forEach(()=>{
        if(sttImg == 1) {
            console.log('số 1')
            imgSliderDiscover1.style.transform = 'translateX(100%)';
            imgSliderDiscover1.style.opacity = '1';
    
            imgSliderDiscover2.style.transform = 'translateX(-100%)';
            imgSliderDiscover2.style.opacity = '1';
    
            imgSliderDiscover3.style.transform = 'translateX(-100%)';
            imgSliderDiscover3.style.opacity = '0';
    
            imgSliderDiscover4.style.transform = 'translateX(-100%)';
            imgSliderDiscover4.style.opacity = '1';
        }else if(sttImg == 2) {
            console.log('số 2')
            imgSliderDiscover2.style.transform = 'translateX(0%)';
            imgSliderDiscover2.style.opacity = '1';

            imgSliderDiscover3.style.transform = 'translateX(-200%)';
            imgSliderDiscover3.style.opacity = '1';

            imgSliderDiscover4.style.transform = 'translateX(-200%)';
            imgSliderDiscover4.style.opacity = '0';

            imgSliderDiscover1.style.transform = 'translateX(200%)';
            imgSliderDiscover1.style.opacity = '1';
        }else if(sttImg == 3) {
            console.log('số 3')
            imgSliderDiscover3.style.transform = 'translateX(-100%)';
            imgSliderDiscover3.style.opacity = '1';

            imgSliderDiscover4.style.transform = 'translateX(-300%)';
            imgSliderDiscover4.style.opacity = '1';

            imgSliderDiscover1.style.transform = 'translateX(100%)';

            imgSliderDiscover2.style.transform = 'translateX(100%)';
            imgSliderDiscover2.style.opacity = '1';

        }else if(sttImg == 4) {
            console.log('số 4')
            imgSliderDiscover4.style.transform = 'translateX(-200%)';
            imgSliderDiscover4.style.opacity = '1';

            imgSliderDiscover1.style.transform = 'translateX(0%)';
            imgSliderDiscover1.style.opacity = '1';

            imgSliderDiscover2.style.transform = 'translateX(0%)';
            imgSliderDiscover2.style.opacity = '0';
            
            imgSliderDiscover3.style.transform = 'translateX(0%)';
            imgSliderDiscover3.style.opacity = '1';
            // presently = function () {
            //     imgSliderDiscover2.style.opacity = '3';
            //     imgSliderDiscover4.style.opacity = '1';
            // }
            // setTimeout(presently, 5000)
        }
        // }else if(sttImg == 5) {
        //     console.log('số 5')
        //     imgSliderDiscover1.style.transform = 'translateX(100%)';
        //     imgSliderDiscover1.style.opacity = '0';
    
        //     imgSliderDiscover2.style.transform = 'translateX(-100%)';
    
        //     imgSliderDiscover3.style.transform = 'translateX(-100%)';
    
        //     imgSliderDiscover4.style.transform = 'translateX(-100%)';
        // }
    })
}
// xử lý dảo ảnh cho slider 
countPhotos = function() {
    motionProcessing()
    sttImg++
    if(sttImg >=5) {
        sttImg = 1
    }
}
// sét thời gian để tự chuyển ảnh
var setTimeSrart = setInterval(countPhotos, 5000);

// người dùng đưa chuột vào slider dừng lại
containerSlider.onmouseover = function() {
    clearInterval(setTimeSrart)
}
// người dùng đưa chuột ra khỏi slider thì chạy lại
containerSlider.onmouseout = function() {
    setTimeSrart = setInterval(countPhotos, 5000);
}

// xử lý khi người dùng click vào nút trái đổi ảnh slider
nextBtn.onclick = function() {
    console.log('tiến')
    sttImg--
    if(sttImg < 1) {
        sttImg = 4
    }
    motionProcessing()
}
// xử lý khi người dùng nhấn nút phải slider
prevBtn.onclick = function() {
    console.log('lùi')
    sttImg++
    if(sttImg > 4) {
        sttImg = 1
    }
    motionProcessing()
}

// xử lý thả tim cho bài hát đang phát
const heartBland = $('.container-name-music__icon-heart-bland')
const heartDark = $('.container-name-music__icon-heart-dark')
heartBland.onclick = function() {
    heartBland.style.display = 'none'
    heartDark.style.display = 'block'
}
heartDark.onclick = function() {
    heartDark.style.display = 'none'
    heartBland.style.display = 'block'
}
function resestHeart() {
    heartDark.style.display = 'none'
    heartBland.style.display = 'block'
}

// xử lý hát và render giao diện
const heading = $('.container-name-music__name-music')
const singerName = $('.container-name-music__name-music--sub')
const cdThumb = $('.name-music__img-img')
const audio = $('#audio')
const playBtn = $('.changeicon')
const iconPlay = $('.play-music__adjusted-play')
const iconPause = $('.play-music__adjusted-pause')
const progress = $('#progress')
const nextSong = $('.play-music__adjusted-forward')
const prevSong = $('.play-music__adjusted-backward')
const randumSong = $('.play-music__adjusted-shuffle')
const repeat = $('.play-music__adjusted-loop')
const listSong = $('.playlists__child-next--item')
const playList = $('.option-playlists__child-next')
const timeSong = $('.play-music__adjusted--time-the_song')
const timePlaying = $('.play-music__adjusted--time-play')
const volumeSong = $('.volumeSong')
const containerIconVolume = $('.volume-song')
const muteSong = $('.volume-song-mute')
const maxSong = $('.volume-song-max')



const app = {
    currentIndex: 0,
    isPlaying: false,
    isRandum: false,
    isRepeat: false,
    isProgress: true,
    songs: [
        {
            name: "Sắp 30",
            singer: "Trịnh Đình Quang",
            path: "./assets/songs/Sap-30-Trinh-Dinh-Quang.mp3",
            image: "./assets/img-songs/sap-30-TDQ.jpg"
        },
        {
            name: "Bông Hoa Đẹp Nhất",
            singer: "Quân AP",
            path: "./assets/songs/Bong-Hoa-Dep-Nhat-QuanA_P.mp3",
            image: "./assets/img-songs/Bong_hoa_dep_nhat-quanAP.jpg"
        },
        {
            name: "Nhắm Mắt Thấy Mùa Hè",
            singer: "Hà Anh Tuấn",
            path: "./assets/songs/nham_mat_thay_mua_he_ha_anh_tuan.mp3",
            image: "./assets/img-songs/nham_mat_thay_mua_he_ha_anh_tuan.jpg"
        },
        {
            name: "Ai Chung Tình Được Mãi",
            singer: "Phạm Hoàng Dung",
            path: "./assets/songs/ai_chung_tinh_duoc_mai_dinh_tung_huy_dunghoangpham_cover.mp3",
            image: "./assets/img-songs/ai-chung-tinh-duoc-mai-cover.jpg"
        },
        {
            name: "Anh Từng Cố Gắn",
            singer: "Nhật Phong",
            path: "./assets/songs/nhat_phong_anh_tung_co_gang_official_mv.mp3",
            image: "./assets/img-songs/anh-tung-co-gan-nhat-phong.jpg"
        },
        {
            name: "Đừng Quên Tên Anh",
            singer: "Hoa Vinh",
            path: "./assets/songs/dung_quen_ten_anh_hoa_vinh_official_music_video_4k.mp3",
            image: "./assets/img-songs/dung-quen-ten-anh_hoa-vinh.jpg"
        },
        {
            name: "Lá Xa Lìa Cành",
            singer: "Lê Bảo Bình",
            path: "./assets/songs/la_xa_lia_canh_le_bao_binh_official_mv_4k.mp3",
            image: "./assets/img-songs/la-xa-lia-canh_le-bao-binh.jpg"
        },
        {
            name: "Ngày Chưa Giông Bão",
            singer: "Tùng Dương",
            path: "./assets/songs/ngay_chua_giong_bao_studio_version_tung_duong.mp3",
            image: "./assets/img-songs/ngay-chua-giong-bao_tung-duong.webp"
        },
        {
            name: "Nhắm Mắt Thấy Mùa Hè",
            singer: "Hà Anh Tuấn",
            path: "./assets/songs/nham_mat_thay_mua_he_ha_anh_tuan.mp3",
            image: "./assets/img-songs/nham_mat_thay_mua_he_ha_anh_tuan.jpg"
        },
        {
            name: "Sóng Gió (cover)",
            singer: "Hương Ly",
            path: "./assets/songs/song_gio_k_icm_x_jack_huong_ly_cover.mp3",
            image: "./assets/img-songs/song-gio_huong-ly.jpg"
        },
        {
            name: "Xem Như Em Chẳng May",
            singer: "Chu Thúy Quỳnh",
            path: "./assets/songs/xem_nhu_em_chang_may_chu_thuy_quynh_ft_trung_ngon.mp3",
            image: "./assets/img-songs/xem-nhu-em-chang-may.jpg"
        },
        {
            name: "Đơn Giản Em Yêu Anh",
            singer: "Phạm Hoàng Dung",
            path: "./assets/songs/don_gian_em_yeu_anh_pham_bao_nam_x_dunghoangpham_cove.mp3",
            image: "./assets/img-songs/don-gian-em-yeu-anh.jpg"
        },
        {
            name: "Hạt Mưa Vương Vấn",
            singer: "Phạm Hoàng Dung",
            path: "./assets/songs/Hat-Mua-Vuong-Van-DungHoangPham-Cove.mp3",
            image: "./assets/img-songs/hat-mua-vuong-van.jpg"
        },
        {
            name: "Thất Tình",
            singer: "Trịnh Đình Quang",
            path: "./assets/songs/That-Tinh-Trinh-Dinh-Quang.mp3",
            image: "./assets/img-songs/that-tinh-TDQ.jpg"
        },
    ],

    render: function() {
        // lặp qua các phần tử của mảng và return ra giao diện
        const htmls = this.songs.map((song, index) => {
            return `
                <li class="playlists__child-next--item ${index == this.currentIndex ? 'active-song' : ''}" data-index="${index}">
                    <div class="playlists__child-next--item-container">
                        <img class="playlists__child-next--item-img" src="${song.image}" alt="">
                        <i class="playlists__child-next--item-icon ti-control-play"></i>
                    </div>
                    <div>
                        <h4 class="playlists__child-next--item__music-name">${song.name}</h4>
                        <a href="#" class="playlists__child-next--item__name-singer">${song.singer}</a>
                    </div>
                </li>
            `
        })
        $('.option-playlists__child-next').innerHTML = htmls.join('')
    },

    // dùng để lấy ra bài hát đầu tiên của mảng
    defineProperty: function() {
        Object.defineProperty(this, 'currentSong', {
            get: function() {
                return this.songs[this.currentIndex]
            }
        })
    },

    handleEvents: function() {
        const _this = this
        const audioDuration = audio.duration
        // xử lý khi click play
        playBtn.onclick = function() {
            if(_this.isPlaying) {
                _this.isPlaying = false
                audio.pause()
                iconPause.style.display = 'none'
                iconPlay.style.display = 'block'
            }else {
                _this.isPlaying = true
                audio.play()
                iconPause.style.display = 'block'
                iconPlay.style.display = 'none';
            }
        }

        // khi tiến độ bài hát thay đổi
        audio.ontimeupdate = function() {
            if(audio.duration && _this.isProgress == true) {
                const progressPercent = Math.floor(audio.currentTime / audio.duration * 100)
                progress.value = progressPercent
            }

            // thời gian đang Phát
            let seconds = Number(audio.currentTime.toFixed(0))
            let subSeconds = seconds % 60 
            let second = ('0' + subSeconds).slice(-2)
            let subMinute = Math.floor(seconds % 3600 / 60)
            let minute = ('0' + subMinute).slice(-2)
            timePlaying.innerText = minute + ':' + second

            // Tổng thời gian bài hát
            if(audio.duration) {
                const timeSongs = Number(audio.duration.toFixed(0))
                let subMimuteTimeSong = timeSongs / 60
                let mimuteTimeSong = ('0' + subMimuteTimeSong.toFixed(0)).slice(-2)
                let subSecondTimeSong = timeSongs % 60
                let secondTimeSong = ('0' + subSecondTimeSong.toFixed(0)).slice(-2)
                timeSong.innerText = mimuteTimeSong + ':' + secondTimeSong
            }
        }

        // xử lý khi người dùng thả chuột ở thanh kéo tua bài hát
        progress.onmouseup = function(e) {
            _this.isProgress = true
        }
        // xử lý khi người dùng nhấn chuột ở thanh kéo tua bài hát
        progress.onmousedown = function(e) {
            _this.isProgress = false
        }

        // xử lý khi tua bài Hát
        progress.onchange = function(e) {
            const seekTime = audio.duration / 100 * e.target.value;
            // xét tua bài hát
            audio.currentTime = seekTime
        }
        //  khi next bài Hát
        nextSong.onclick = function() {
            if(_this.isRandum) {
                _this.playRandumSong()
            }else {
                _this.nextSong();
                iconPause.style.display = 'block';
                iconPlay.style.display = 'none';
            }
                audio.play();
                _this.render();
                _this.scrollToActiveSong()
                resestHeart()
        }
        //  khi lui bài hát
        prevSong.onclick = function() {
            if(_this.isRandum) {
                _this.playRandumSong()
            }else {
                _this.prevSong();
                iconPause.style.display = 'block';
                iconPlay.style.display = 'none';
            }
            audio.play();
            _this.render();
            _this.scrollToActiveSong()
            resestHeart()
        }
        //xử lý khi randum bật/tắt bài hát
        randumSong.onclick = function() {
            if(_this.isRandum == false) {
                _this.isRandum = true
                randumSong.classList.add('active-btn')
            }else {
                _this.isRandum = false
                randumSong.classList.remove('active-btn')
            }
        }
        // xử lý khi lặp lại 1 bài Hát
        repeat.onclick = function(e) {
            if(_this.isRepeat == false) {
                _this.isRepeat = true
                repeat.classList.add('active-btn')
            }else {
                _this.isRepeat = false
                repeat.classList.remove('active-btn')
            }
        }

        // xử lý khi bài hát kết thúc
        audio.onended = function() {
            if(_this.isRepeat) {
                audio.play()
            }else {
                if(_this.isRandum == true) {
                    _this.playRandumSong()
                }else {
                    _this.nextSong()
                }
                audio.play()
                _this.render()
            }
        }
        // lắng nghe hành vi click vào playlist
        playList.onclick = function(e) {
            const songNode = e.target.closest('.playlists__child-next--item:not(.active-song)')
            if(songNode || e.target.closest('.option')) {
                // xử lý click vào Song
                if(songNode) {
                    _this.currentIndex = songNode.getAttribute('data-index')
                    _this.loadCurrentSong()
                    audio.play()
                    iconPause.style.display = 'block';
                    iconPlay.style.display = 'none';
                    _this.render()
                }
                // xử lý khi click vào Song option
                if(e.target.closest('.option')) {

                }
            }
        }
        // xử lý âm thanh
        volumeSong.onchange = function(e) {
            audio.volume = e.target.value
            if(e.target.value == 0) {
                muteSong.style.display = 'block'
                maxSong.style.display = 'none'
            }else {
                muteSong.style.display = 'none'
                maxSong.style.display = 'block'
            }
        }
        containerIconVolume.onclick = function() {
            if(muteSong.style.display == 'none') {
                muteSong.style.display = 'block'
                maxSong.style.display = 'none'
            }else {
                muteSong.style.display = 'none'
                maxSong.style.display = 'block'
            }
        }
    },
    scrollToActiveSong: function() {
        setTimeout(() => {
            $('.playlists__child-next--item.active-song').scrollIntoView({
                behavior: 'smooth',
                block:'nearest'
            })
        })
        console.log('chạy')
    },

    loadCurrentSong: function() {
        heading.textContent = this.currentSong.name;
        singerName.textContent = this.currentSong.singer;
        cdThumb.src = this.currentSong.image;
        audio.src = this.currentSong.path;
    },
    nextSong: function() {
        this.currentIndex++
        if(this.currentIndex >= this.songs.length) {
            this.currentIndex = 0;
        }
        this.loadCurrentSong();
    },
    prevSong: function() {
        this.currentIndex--
        if(this.currentIndex < 0) {
            this.currentIndex = this.songs.length - 1;
        }
        this.loadCurrentSong();
    },
    playRandumSong: function() {
        let newIndex
        do {
            newIndex = Math.floor(Math.random() * this.songs.length)
        } while (newIndex == this.currentIndex)
        this.currentIndex = newIndex
        this.loadCurrentSong()
    },

    start: function() {
            // định nghĩa các thuộc tính cho ojbect
            this.defineProperty();

            // lắng nghe / xử lý các sự kiện
            this.handleEvents();

            // tải thông tin bài hát đầu tiên vào giao diện khi chạy ứng dụng
            this.loadCurrentSong();

            // render playlist
            this.render()
            
    }
}
app.start()
