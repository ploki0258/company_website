import { Page } from "./components/Page.js";

Page.loader("index");

const options = {
    data() {
        return {
            items: [
                {
                    backgroundImage: "../images/index_bg.jpg",
                    title: "創新科技解決方案1",
                    content: "為您的企業打造最佳數位體驗1",
                    btn: "立即諮詢1",
                    btnLink: "/contact.html",
                },
                {
                    backgroundImage: "../images/index_bg.jpg",
                    title: "創新科技解決方案2",
                    content: "為您的企業打造最佳數位體驗2",
                    btn: "立即諮詢2",
                    btnLink: "/about.html",
                },
            ],
            item: {},
            currentIndex: 0,
            action: "in",
        };
    },
    methods: {
        initItem() {
            this.item = this.items[this.currentIndex];
        },
        setCurrentIndex(index) {
            this.action = "out";
            setTimeout(() => {
                this.currentIndex = index;
                this.initItem();
                this.action = "in";
            }, 800);
        },
        setPrevCurrentIndex() {
            console.log(`Prev ${this.currentIndex}`);
            if (this.currentIndex <= 0) {
                this.currentIndex = this.items.length - 1;
            }
            console.log(`Prev2 ${this.currentIndex}`);
            this.action = "out";
            setTimeout(() => {
                this.currentIndex--;
                this.initItem();
                this.action = "in";
            }, 800);
        },
        setNextCurrentIndex() {
            console.log(`Next ${this.currentIndex}`);

            if (this.currentIndex >= this.items.length - 1) {
                this.currentIndex = 0;
            }
            console.log(`Next2 ${this.currentIndex}`);
            this.action = "out";
            setTimeout(() => {
                this.currentIndex++;
                this.initItem();
                this.action = "in";
            }, 800);
        },
        actionAnimationClass() {
            // 左近右出
            if (this.action === "in") {
                return "animate__backInLeft";
            }
            return "animate__backOutRight";
        },
    },
    mounted() {
        console.log("mounted");
        this.initItem();
    },
};

const { createApp } = Vue;

createApp(options).mount("#swiper-app");
