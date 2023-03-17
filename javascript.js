function fetchData() {
    fetch("./data.json")
        .then(response => {
            if (!response.ok) {
                throw Error("ERROR")
            }
            return response.json();
        })
        .then(data => {
            console.log(data)
            const htmlVideo = data.list_video.map((item) => {
                return `
            <div class="video-item">
                <div class="video">
                    <img src="${item.image}" alt="disney trainer"/>
                </div>
                <div class="title">
                    <div class="img-chanel">
                        <img src="${item.img_chanel}" alt=""/>
                    </div>
                    <div class="video-title">
                        <div class="name">${item.title}</div>
                        <div class="chanel">${item.chanel}</div>
                        <span class="view">20Tr lượt xem</span> - <span class="time">2 ngày trước</span>
                    </div>
                </div>
            </div>
            `;
            }).join("");
            const htmlCategory = data.list_follow.map((item) => {
                return `
            <div class="item">
                <div class="icons-logo">
                    <img
                        src="${item.img}" />
                </div>
                <div class="category">
                    <span>${item.title}</span>
                </div>
            </div>
            `;
            }).join("");
            const htmlTab = data.list_tab.map((item) => {
                return `
                <div class="tab">${item.title}</div>
            `
            }).join("")
            document.querySelector(".list-video").innerHTML = htmlVideo;
            document.querySelector(".list-follow").innerHTML = htmlCategory;
            document.querySelector(".tablist").innerHTML = htmlTab;
        })
        .catch(error => {
            console.log(error);
        });
}

fetchData()

function fetchAdvertise() {
    fetch("./advertise.json")
        .then(response => {
            if (!response.ok) {
                throw Error("ERROR")
            }
            return response.json();
        })
        .then(data => {
            const htmlAdvertsie = data.list_advertise.map((item) => {
                return `
            <div class="item-advertise">
                <div class="dots"></div>
                <div class="avatar">
                    <img src="${item.img}"/>
                </div>
                <div class="description">
                    <span>${item.description}</span>
                    <p>${item.time}</p>
                </div>
                <div class="thumbnail">
                    <img src="${item.thumbnail}"/>
                </div>
            </div>
            `;
            }).join("");
            document.querySelector(".list-advertise").innerHTML = htmlAdvertsie;
        })
}

fetchAdvertise()

var menuIcon = document.querySelector(".bars")
var sideBar = document.querySelector(".guide-content")
var itemBar = document.querySelector(".item")
var tabList = document.querySelector(".tablist")
var listVieo = document.querySelector(".main")
menuIcon.onclick = function () {
    sideBar.classList.toggle("small-sidebar")
    tabList.classList.toggle("tab-list-click")
    listVieo.classList.toggle("main-onclick")
}

function handleOpenAdvertise() {
    var tableAvertise = document.getElementsByClassName("table-advertise");
    Array.from(tableAvertise).forEach((x) => {
        if (x.style.display === "block") {
            x.style.display = "none";
        }
        else {
            x.style.display = "block"
        }
    })
}


