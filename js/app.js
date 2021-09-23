Vue.createApp({
    data() {
        return {
            //? Clocker Data
            clock: {
                status: "working", // "working" || "breaking"
                working: 50,
                breaking: 10,
                time: 3000,
                timerText: "00:00",
                playing: false, // true || false
                ringtone: "", // setting's ringtone
                fulltime: 3000,
                dasharray: 786, //clock progress full
                dashoffset: 0, //clock progress playing
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
        stopClock() {
            this.clock.playing = false
            this.setClockTime()
        },
        playClock() {
            this.clock.playing = true
        },
        pauseClock() {
            this.clock.playing = false
        },
        skipclock() {
            this.clock.playing = false
            switch (this.clock.status) {
                case "working":
                    this.clock.status = "breaking"
                    if (this.working.clock_spend < this.working.clock_expect) {
                        this.working.clock_spend++
                    } else {
                        this.working.clock_over++
                    }
                    break;
                case "breaking":
                    this.clock.status = "working"
                    break;
            }
            this.setClockTime()
        },
        playingclock() {
            if (this.clock.playing) {
                this.clock.time--
            }
            if (this.clock.time % 60 < 10) {
                this.clock.timerText = `${parseInt(this.clock.time / 60)}:0${this.clock.time % 60}`
            } else {
                this.clock.timerText = `${parseInt(this.clock.time / 60)}:${this.clock.time % 60}`
            }
            this.clock.dashoffset = this.clock.dasharray * ((this.clock.time / this.clock.fulltime))
        },
    },
    mounted() {
        this.getstrock()
        this.timer = setInterval(this.playingclock, 1000);
        this.setClockTime()
    },
    computed() {

    }
}).mount('#app');