Vue.createApp({
    data() {
        return {
            //? Clocker Data
            clock: {
                status: "working", // "working" || "breaking"
                working: 50,
                breaking: 10,
                fulltime: 3000,
                time: 3000,
                timerText: "00:00",
                playing: false, // true || false
                ringtone: "", // setting's ringtone
                dasharray: 786, //clock progress full
                dashoffset: 0, //clock progress playing
                ringtone: "" //setting's ringtone
            },
            selectItem: {},

            //? TODO list Data 
            list: [],
            temp: {},
            item: {
                id: "", //項目建立時之時間戳
                title: "項目名稱",
                clock_expect: 0, //預期時間
                clock_spend: 0, //花費時間
                clock_over: 0, //超出時間
                completed: true, //項目完成狀態 完成: true | 未完成: false
                date_create: "yyyy/mm/dd", //建立日期
                date_limit: { //項目期限
                    year: 2021,
                    month: 09,
                    day: 08,
                },
                date_complete: "yyyy/mm/dd", //完成日期
            },

            //? Working Task
            working: {
                id: "", //項目建立時之時間戳
                title: "項目名稱",
                clock_expect: 5, //預期時間
                clock_spend: 3, //花費時間
                clock_over: 0, //超出時間
                completed: true, //項目完成狀態 完成: true | 未完成: false
                date_create: "yyyy/mm/dd", //建立日期
                date_limit: { //項目期限
                    year: 2021,
                    month: 09,
                    day: 08,
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
                    25, 30, 35, 40,
                    45, 50, 55, 60
                ],
                ringtone: {
                    music_1: new Audio("ringtone1.mp3"),
                    music_2: new Audio("ringtone2.mp3"),
                }
            }
        }
    },
    methods: {
        //? Clock Action
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
                this.clock.time--
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
        skipclock() {
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
        }
    },
    mounted() {
        this.getstrock()
        this.timer = setInterval(this.playingClock, 1000);
        this.setClockTime()
        this.renderClock()
    }
}).mount('#app');