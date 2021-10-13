Vue.createApp({
    data() {
        return {
            //? ---------- ---------- tab Data ---------- ----------
            tabAnimation: {
                enter: "",
                leave: ""
            },
            //? Clocker Data
            clock: {
                status: "working", // "working" || "breaking"
                working: 50,
                breaking: 10,
                fulltime: 3000,
                time: 3000,
                timerText: "00:00",
                playing: false, // true || false
                dasharray: 786, //clock progress full
                dashoffset: 0, //clock progress playing
                ringtone: "ringtone3" //setting's ringtone
            },
            //? Working Task
            working: {
                id: "000", //項目建立時之時間戳
                title: "項目名稱",
                clock_expect: 5, //預期時間
                clock_spend: 3, //花費時間
                clock_over: 0, //超出時間
                completed: false, //項目完成狀態 完成: true | 未完成: false
                date_create: "yyyy/mm/dd", //建立日期
                date_limit: { //項目期限
                    year: 2021,
                    month: 9,
                    day: 8,
                },
                date_complete: "yyyy/mm/dd", //完成日期
            },
            //? filter
            filter: {
                list: true,
                completed: "day",
                ringtone: "working"
            },
            //? TODO list Data 
            list: [
                //?
                {
                    id: "001", //項目建立時之時間戳
                    title: "測試項目 001",
                    clock_expect: 8, //預期時間
                    clock_spend: 1, //花費時間
                    clock_over: 0, //超出時間
                    completed: false, //項目完成狀態 完成: true | 未完成: false
                    date_create: "yyyy/mm/dd", //建立日期
                    date_limit: { //項目期限
                        year: 2021,
                        month: 9,
                        day: 8,
                    },
                    date_complete: "yyyy/mm/dd", //完成日期
                },
                //?
                {
                    id: "002", //項目建立時之時間戳
                    title: "測試項目 002",
                    clock_expect: 8, //預期時間
                    clock_spend: 2, //花費時間
                    clock_over: 0, //超出時間
                    completed: true, //項目完成狀態 完成: true | 未完成: false
                    date_create: "yyyy/mm/dd", //建立日期
                    date_limit: { //項目期限
                        year: 2021,
                        month: 9,
                        day: 8,
                    },
                    date_complete: "yyyy/mm/dd", //完成日期
                },
                {
                    id: "003", //項目建立時之時間戳
                    title: "測試項目 003",
                    clock_expect: 8, //預期時間
                    clock_spend: 4, //花費時間
                    clock_over: 0, //超出時間
                    completed: false, //項目完成狀態 完成: true | 未完成: false
                    date_create: "yyyy/mm/dd", //建立日期
                    date_limit: { //項目期限
                        year: 2021,
                        month: 9,
                        day: 8,
                    },
                    date_complete: "yyyy/mm/dd", //完成日期
                },
                {
                    id: "004", //項目建立時之時間戳
                    title: "測試項目 004",
                    clock_expect: 8, //預期時間
                    clock_spend: 8, //花費時間
                    clock_over: 0, //超出時間
                    completed: true, //項目完成狀態 完成: true | 未完成: false
                    date_create: "yyyy/mm/dd", //建立日期
                    date_limit: { //項目期限
                        year: 2021,
                        month: 9,
                        day: 8,
                    },
                    date_complete: "yyyy/mm/dd", //完成日期
                },
                {
                    id: "005", //項目建立時之時間戳
                    title: "測試項目 005",
                    clock_expect: 4, //預期時間
                    clock_spend: 4, //花費時間
                    clock_over: 4, //超出時間
                    completed: true, //項目完成狀態 完成: true | 未完成: false
                    date_create: "yyyy/mm/dd", //建立日期
                    date_limit: { //項目期限
                        year: 2021,
                        month: 9,
                        day: 8,
                    },
                    date_complete: "yyyy/mm/dd", //完成日期
                },
                {
                    id: "001", //項目建立時之時間戳
                    title: "測試項目 001",
                    clock_expect: 8, //預期時間
                    clock_spend: 1, //花費時間
                    clock_over: 0, //超出時間
                    completed: false, //項目完成狀態 完成: true | 未完成: false
                    date_create: "yyyy/mm/dd", //建立日期
                    date_limit: { //項目期限
                        year: 2021,
                        month: 9,
                        day: 8,
                    },
                    date_complete: "yyyy/mm/dd", //完成日期
                },
                //?
                {
                    id: "002", //項目建立時之時間戳
                    title: "測試項目 002",
                    clock_expect: 8, //預期時間
                    clock_spend: 2, //花費時間
                    clock_over: 0, //超出時間
                    completed: true, //項目完成狀態 完成: true | 未完成: false
                    date_create: "yyyy/mm/dd", //建立日期
                    date_limit: { //項目期限
                        year: 2021,
                        month: 9,
                        day: 8,
                    },
                    date_complete: "yyyy/mm/dd", //完成日期
                },
                {
                    id: "003", //項目建立時之時間戳
                    title: "測試項目 003",
                    clock_expect: 8, //預期時間
                    clock_spend: 4, //花費時間
                    clock_over: 0, //超出時間
                    completed: false, //項目完成狀態 完成: true | 未完成: false
                    date_create: "yyyy/mm/dd", //建立日期
                    date_limit: { //項目期限
                        year: 2021,
                        month: 9,
                        day: 8,
                    },
                    date_complete: "yyyy/mm/dd", //完成日期
                },
                {
                    id: "004", //項目建立時之時間戳
                    title: "測試項目 004",
                    clock_expect: 8, //預期時間
                    clock_spend: 8, //花費時間
                    clock_over: 0, //超出時間
                    completed: true, //項目完成狀態 完成: true | 未完成: false
                    date_create: "yyyy/mm/dd", //建立日期
                    date_limit: { //項目期限
                        year: 2021,
                        month: 9,
                        day: 8,
                    },
                    date_complete: "yyyy/mm/dd", //完成日期
                },
                {
                    id: "005", //項目建立時之時間戳
                    title: "測試項目 005",
                    clock_expect: 4, //預期時間
                    clock_spend: 4, //花費時間
                    clock_over: 4, //超出時間
                    completed: true, //項目完成狀態 完成: true | 未完成: false
                    date_create: "yyyy/mm/dd", //建立日期
                    date_limit: { //項目期限
                        year: 2021,
                        month: 9,
                        day: 8,
                    },
                    date_complete: "yyyy/mm/dd", //完成日期
                },
            ],
            temp: {},
            //? Editor Data
            item: {
                id: "", //項目建立時之時間戳
                title: " ",
                clock_expect: 0, //預期時間
                clock_spend: 0, //花費時間
                clock_over: 0, //超出時間
                completed: true, //項目完成狀態 完成: true | 未完成: false
                date_create: "yyyy/mm/dd", //建立日期
                date_limit: { //項目期限
                    year: 2021,
                    month: 9,
                    day: 8,
                },
                date_complete: "yyyy/mm/dd", //完成日期
            },

            //? Setting Data
            setting: {
                work: [
                    25, 30, 35, 40,
                    45, 50, 55, 60,
                    75, 90, 120, 150
                ],
                break: [
                    5, 10, 15, 20,
                    25, 30, 45, 60
                ],
                ringtone: {
                    music_1: "ringtone1",
                    music_2: "ringtone2",
                    music_3: "ringtone3",
                    music_4: "ringtone4",
                    music_5: "ringtone5",
                    music_6: "ringtone6",
                }
            }
        }
    },
    methods: {
        //? ---------- ---------- tab ---------- ----------
        tabAnimationPosition(position) {
            switch (position) {
                case "right":
                    this.tabAnimation.enter = "slide-left-enter"
                    this.tabAnimation.leave = "slide-right-leave"
                    break;

                case "left":
                    this.tabAnimation.enter = "slide-right-enter"
                    this.tabAnimation.leave = "slide-left-leave"
                    break;
                default:
                    break;
            }
        },
        selectTabs(e) {
            let tab_item = document.querySelectorAll(".tab-item")
            let tab_active = document.querySelector(".tab-header .active")
            let tab_content = document.querySelectorAll(".tab-content")
            let tab_content_active = document.querySelector(".tab-body .active")
            let selectIndex = "";
            // console.log(e.target);
            //? 取得目標的 Index
            tab_item.forEach(item => {
                if (item.dataset.tabTarget == e.target.dataset.tabTarget) {
                    selectIndex = item.dataset.tabIndex
                }
            })

            //? 判斷動畫方向
            if (tab_active.dataset.tabIndex < selectIndex) {
                //right to left |<<<|
                this.tabAnimationPosition("right");
            } else if (tab_active.dataset.tabIndex > selectIndex) {
                //left to right |>>>|
                this.tabAnimationPosition("left");
            }

            if (tab_active.dataset.tabIndex !== selectIndex) {
                //? 標記目標選項
                // remove old active
                tab_item.forEach((item) => {
                    item.classList.remove("active")
                })
                // add new active
                tab_item.forEach(item => {
                    if (item.dataset.tabTarget == e.target.dataset.tabTarget) {
                        item.classList.add("active")
                    }
                })
                //? 顯示對應內容
                // render active content
                tab_content.forEach((item) => {
                    // tab 清除所有內容標記
                    item.classList.remove("active")
                    // tab 判斷選項標記內容
                    if (item.dataset.tabContent == e.target.dataset.tabTarget) {
                        item.classList.add(this.tabAnimation.enter)
                    }
                })
                tab_content_active.classList.add(this.tabAnimation.leave)
                setTimeout(() => {
                    tab_content.forEach((item) => {
                        if (item.dataset.tabContent == e.target.dataset.tabTarget) {
                            item.classList.add("active")
                            item.classList.remove(this.tabAnimation.enter)
                        }
                    })
                    tab_content_active.classList.remove(this.tabAnimation.leave)
                }, 200);
            }
        },
        //? ---------- ---------- reset data ---------- ----------
        resetClock() {
            this.clock = {
                status: "working", // "working" || "breaking"
                working: 50,
                breaking: 10,
                fulltime: 3000,
                time: 3000,
                timerText: "00:00",
                playing: false, // true || false
                dasharray: 786, //clock progress full
                dashoffset: 0, //clock progress playing
                ringtone: "ringtone1" //setting's ringtone
            }
        },
        resetWorking() {
            this.working = {
                id: "000", //項目建立時之時間戳
                title: "無指定項目",
                clock_expect: 8, //預期時間
                clock_spend: 0, //花費時間
                clock_over: 0, //超出時間
                completed: false, //項目完成狀態 完成: true | 未完成: false
                date_create: null, //建立日期
                date_limit: { //項目期限
                    year: 2021,
                    month: 9,
                    day: 8,
                },
                date_complete: "yyyy/mm/dd", //完成日期
            }
        },
        //? ---------- ---------- localstorage ---------- ----------
        setLocalClock() {
            localStorage.setItem('clock', JSON.stringify(this.clock))
        },
        getLocalClock() {
            this.clock = JSON.parse(localStorage.getItem('clock'));
            if (this.clock == null) {
                this.resetClock()
            }
        },
        setLocalWorking() {
            localStorage.setItem('working', JSON.stringify(this.working))
        },
        getLocalWorking() {
            this.working = JSON.parse(localStorage.getItem('working'));
            if (this.working == null) {
                this.resetWorking()
            }
        },
        setLocallist() {},
        getLocallist() {},
        //? ---------- ---------- Clock Action ---------- ----------
        getstrock() {
            let stroke = document.querySelector('.clock-bar').getTotalLength()
            this.clock.dasharray = stroke
            this.clock.dashoffset = stroke
        },
        setClockTime() {
            switch (this.clock.status) {
                case "working":
                    this.clock.time = this.clock.working * 60
                    this.clock.fulltime = this.clock.working * 60
                    break;
                case "breaking":
                    this.clock.time = this.clock.breaking * 60
                    this.clock.fulltime = this.clock.breaking * 60
                    break;
            }
        },

        renderClock() {
            if (this.clock.time % 60 < 10) {
                this.clock.timerText = `${parseInt(this.clock.time / 60)}:0${this.clock.time % 60}`
            } else {
                this.clock.timerText = `${parseInt(this.clock.time / 60)}:${this.clock.time % 60}`
            }
            this.clock.dashoffset = this.clock.dasharray * ((this.clock.time / this.clock.fulltime))
        },
        switchClock() {
            switch (this.clock.status) {
                case "working":
                    this.clock.status = "breaking"
                    break;
                case "breaking":
                    this.clock.status = "working"
                    break;
            }
        },
        playingClock() {
            if (this.clock.playing) {
                this.clock.time--;
                this.setLocalWorking()
            }
            if (this.clock.time <= 0) {
                this.switchClock()
                this.setClockTime()
                this.clock.playing = false
            }
            this.renderClock()
        },
        stopClock() {
            this.clock.playing = false
            this.setClockTime()
            this.renderClock()
        },
        playClock() {
            this.clock.playing = true
            this.renderClock()
        },
        pauseClock() {
            this.clock.playing = false
            this.renderClock()
        },
        skipClock() {
            this.clock.playing = false
            if (this.clock.status == "working") {
                if (this.working.clock_spend < this.working.clock_expect) {
                    this.working.clock_spend++
                } else {
                    if (this.working.clock_over < (8 - this.working.clock_expect)) {
                        this.working.clock_over++
                    }
                }
            }
            this.setLocalWorking()
            this.switchClock()
            this.setClockTime()
            this.renderClock()
        },
        //? setting part
        setWorkTime(item) {
            this.stopClock()
            this.clock.working = item
            this.setClockTime()
        },
        setBreakTime(item) {
            this.stopClock()
            this.clock.breaking = item
            this.setClockTime()
        },
        setBreakRingtone(item) {
            this.clock.ringtone = item
        }
    },
    mounted() {
        this.getLocalClock()
        this.getLocalWorking()
        this.getstrock()
        this.setClockTime()
        this.renderClock()
        this.timer = setInterval(this.playingClock, 1000);
    }
}).mount('#app');