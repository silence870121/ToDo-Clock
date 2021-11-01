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
            //?Date
            date: {
                today: '',
                time: '',
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
                date_limit: "2022-01-01", // 項目期限
                date_complete: "yyyy/mm/dd", //完成日期
            },
            //? filter
            filter: {
                analysis: "task",
                setting: "breaking"
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
                    date_limit: "2022-01-01", //項目期限
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
                    date_limit: "2022-01-01", //項目期限
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
                    date_limit: "2022-01-01", //項目期限
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
                    date_limit: "2022-01-01", //項目期限
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
                    date_limit: "2022-01-01", //項目期限
                    date_complete: "yyyy/mm/dd", //完成日期
                },
                {
                    id: "006", //項目建立時之時間戳
                    title: "測試項目 006",
                    clock_expect: 8, //預期時間
                    clock_spend: 1, //花費時間
                    clock_over: 0, //超出時間
                    completed: false, //項目完成狀態 完成: true | 未完成: false
                    date_create: "yyyy/mm/dd", //建立日期
                    date_limit: "2022-01-01", //項目期限
                    date_complete: "yyyy/mm/dd", //完成日期
                },
                //?
                {
                    id: "007", //項目建立時之時間戳
                    title: "測試項目 007",
                    clock_expect: 8, //預期時間
                    clock_spend: 2, //花費時間
                    clock_over: 0, //超出時間
                    completed: true, //項目完成狀態 完成: true | 未完成: false
                    date_create: "yyyy/mm/dd", //建立日期
                    date_limit: "2022-01-01", //項目期限
                    date_complete: "yyyy/mm/dd", //完成日期
                },
                {
                    id: "008", //項目建立時之時間戳
                    title: "測試項目 008",
                    clock_expect: 8, //預期時間
                    clock_spend: 4, //花費時間
                    clock_over: 0, //超出時間
                    completed: false, //項目完成狀態 完成: true | 未完成: false
                    date_create: "yyyy/mm/dd", //建立日期
                    date_limit: "2022-01-01", //項目期限
                    date_complete: "yyyy/mm/dd", //完成日期
                },
                {
                    id: "009", //項目建立時之時間戳
                    title: "測試項目 009",
                    clock_expect: 8, //預期時間
                    clock_spend: 8, //花費時間
                    clock_over: 0, //超出時間
                    completed: true, //項目完成狀態 完成: true | 未完成: false
                    date_create: "yyyy/mm/dd", //建立日期
                    date_limit: "2022-01-01", //項目期限
                    date_complete: "yyyy/mm/dd", //完成日期
                },
                {
                    id: "010", //項目建立時之時間戳
                    title: "測試項目 010",
                    clock_expect: 4, //預期時間
                    clock_spend: 4, //花費時間
                    clock_over: 4, //超出時間
                    completed: true, //項目完成狀態 完成: true | 未完成: false
                    date_create: "yyyy/mm/dd", //建立日期
                    date_limit: "2022-01-01", //項目期限
                    date_complete: "yyyy/mm/dd", //完成日期
                },
                {
                    id: "011", //項目建立時之時間戳
                    title: "測試項目 011",
                    clock_expect: 8, //預期時間
                    clock_spend: 1, //花費時間
                    clock_over: 0, //超出時間
                    completed: false, //項目完成狀態 完成: true | 未完成: false
                    date_create: "yyyy/mm/dd", //建立日期
                    date_limit: "2022-01-01", //項目期限
                    date_complete: "yyyy/mm/dd", //完成日期
                },
                //?
                {
                    id: "012", //項目建立時之時間戳
                    title: "測試項目 012",
                    clock_expect: 8, //預期時間
                    clock_spend: 2, //花費時間
                    clock_over: 0, //超出時間
                    completed: true, //項目完成狀態 完成: true | 未完成: false
                    date_create: "yyyy/mm/dd", //建立日期
                    date_limit: "2022-01-01", //項目期限
                    date_complete: "yyyy/mm/dd", //完成日期
                },
                {
                    id: "013", //項目建立時之時間戳
                    title: "測試項目 013",
                    clock_expect: 8, //預期時間
                    clock_spend: 4, //花費時間
                    clock_over: 0, //超出時間
                    completed: false, //項目完成狀態 完成: true | 未完成: false
                    date_create: "yyyy/mm/dd", //建立日期
                    date_limit: "2022-01-01", //項目期限
                    date_complete: "yyyy/mm/dd", //完成日期
                },
                {
                    id: "014", //項目建立時之時間戳
                    title: "測試項目 014",
                    clock_expect: 8, //預期時間
                    clock_spend: 8, //花費時間
                    clock_over: 0, //超出時間
                    completed: true, //項目完成狀態 完成: true | 未完成: false
                    date_create: "yyyy/mm/dd", //建立日期
                    date_limit: "2022-01-01", //項目期限
                    date_complete: "yyyy/mm/dd", //完成日期
                },
                {
                    id: "015", //項目建立時之時間戳
                    title: "測試項目 015",
                    clock_expect: 4, //預期時間
                    clock_spend: 4, //花費時間
                    clock_over: 4, //超出時間
                    completed: true, //項目完成狀態 完成: true | 未完成: false
                    date_create: "yyyy/mm/dd", //建立日期
                    date_limit: "2022-01-01", //項目期限
                    date_complete: "yyyy/mm/dd", //完成日期
                },
            ],
            temp: {},
            //? Editor Data
            editor: {
                status: 'create', //create | edit
                item: {
                    id: "", //項目建立時之時間戳
                    title: "無輸入文字",
                    clock_expect: 0, //預期時間
                    clock_spend: 0, //花費時間
                    clock_over: 0, //超出時間
                    completed: false, //項目完成狀態 完成: true | 未完成: false
                    date_create: '', //建立日期
                    date_limit: '',
                    date_complete: '2021-10-20', //完成日期
                }
            },
            //? Analysis Data
            analysis: {
                data: [ // Daily Complete Colck
                    {
                        date: "2021-11-01",
                        task: 1,
                        clock: 5,
                    },
                    {
                        date: "2021-11-02",
                        task: 2,
                        clock: 10,
                    },
                    {
                        date: "2021-11-03",
                        task: 3,
                        clock: 15,
                    },
                    {
                        date: "2021-11-04",
                        task: 4,
                        clock: 20,
                    },
                    {
                        date: "2021-11-05",
                        task: 5,
                        clock: 25,
                    },
                    {
                        date: "2021-11-06",
                        task: 6,
                        clock: 30,
                    },
                    {
                        date: "2021-11-07",
                        task: 7,
                        clock: 35,
                    },
                    {
                        date: "2021-11-08",
                        task: 8,
                        clock: 40,
                    },
                    {
                        date: "2021-11-09",
                        task: 9,
                        clock: 45,
                    },
                    {
                        date: "2021-11-10",
                        task: 10,
                        clock: 50,
                    },
                ],
                completed: {
                    today: 0,
                    week: 0
                },
                chart: {
                    dateFrom: "2021-01-01",
                    dateTo: "2022-10-30",
                    height: 0.3,
                    week: [{
                            date: "2021-10-24",
                            task: 10,
                            clock: 24,
                            data: 0
                        },
                        {
                            date: "2021-10-25",
                            task: 9,
                            clock: 25,
                            data: 0
                        },
                        {
                            date: "2021-10-26",
                            task: 8,
                            clock: 26,
                            data: 0
                        },
                        {
                            date: "2021-10-27",
                            task: 7,
                            clock: 27,
                            data: 0
                        },
                        {
                            date: "2021-10-28",
                            task: 6,
                            clock: 28,
                            data: 0
                        },
                        {
                            date: "2021-10-29",
                            task: 5,
                            clock: 29,
                            data: 0
                        },
                        {
                            date: "2021-10-30",
                            task: 4,
                            clock: 30,
                            data: 0
                        },
                    ],
                }
            },
            weekName: [
                "Sun.", "Mon.", "Tue.", "Wed", "Thu.", "Fri.", "Sat."
            ],
            //? Setting Data
            setting: {
                work: [
                    25, 30, 35, 40,
                    45, 50, 55, 60,
                    75, 90, 120, 150
                ],
                break: [
                    5, 10, 15, 30
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
        selectTabs(tab) {
            let tab_item = document.querySelectorAll(".tab-item")
            let tab_active = document.querySelector(".tab-header .active")
            let tab_content = document.querySelectorAll(".tab-content")
            let tab_content_active = document.querySelector(".tab-body .active")
            let selectIndex = "";
            // console.log(tab);
            //? 取得目標的 Index
            tab_item.forEach(item => {
                if (item.dataset.tabTarget == tab) {
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
                    if (item.dataset.tabTarget == tab) {
                        item.classList.add("active")
                    }
                })
                //? 顯示對應內容
                // render active content
                tab_content.forEach((item) => {
                    // tab 清除所有內容標記
                    item.classList.remove("active")
                    // tab 判斷選項標記內容
                    if (item.dataset.tabContent == tab) {
                        item.classList.add(this.tabAnimation.enter)
                    }
                })
                tab_content_active.classList.add(this.tabAnimation.leave)
                setTimeout(() => {
                    tab_content.forEach((item) => {
                        if (item.dataset.tabContent == tab) {
                            item.classList.add("active")
                            item.classList.remove(this.tabAnimation.enter)
                        }
                    })
                    tab_content_active.classList.remove(this.tabAnimation.leave)
                }, 200);
            }
        },
        //? ---------- ---------- filter ---------- ----------
        filterBtn(e) {
            let filter = e.target.parentNode.querySelector(".filter-bar .filter-btn-active")
            let filterNodes = filter.parentNode.querySelectorAll(".filter-btn")
            filterNodes.forEach(item => {
                filter.classList.remove("filter-btn-active")
            })
            e.target.classList.add("filter-btn-active")
            let slider = filter.parentNode.querySelector(".slider-bar")
            switch (e.target) {
                case filterNodes[0]:
                    slider.style.left = 0
                    break;
                case filterNodes[1]:
                    slider.style.left = `50%`
                    break;
            }
            switch (e.target.dataset.filter) {
                case "analysis":
                    this.filter.analysis = e.target.dataset.filterTarget
                    break;
                case "setting":
                    this.filter.setting = e.target.dataset.filterTarget
                    break;

                default:
                    break;
            }
        },
        filterContent(e) {
            let filter_content = document.querySelectorAll(".filter-content")
            let filter_content_active = document.querySelector(".filter-content-active")
            if (filter_content_active.dataset.filterContent !== e.target.dataset.filterTarget) {
                switch (e.target.dataset.filterTarget) {
                    case "todo":
                        this.tabAnimationPosition("left");
                        break;
                    case "done":
                        this.tabAnimationPosition("right");
                        break;
                }

                //? content
                filter_content.forEach(item => {
                    item.classList.remove("filter-content-active")
                    if (item.dataset.filterContent == e.target.dataset.filterTarget) {
                        item.classList.add(this.tabAnimation.enter)
                    }
                })
                filter_content_active.classList.add(this.tabAnimation.leave)

                setTimeout(() => {
                    filter_content.forEach((item) => {
                        if (item.dataset.filterContent == e.target.dataset.filterTarget) {
                            item.classList.add("filter-content-active")
                            item.classList.remove(this.tabAnimation.enter)
                        }
                    })
                    filter_content_active.classList.remove(this.tabAnimation.leave)
                }, 200);
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
        //? ---------- ---------- reset data ---------- ----------
        resetFilter() {
            this.filter.analysis = "task"
            this.filter.setting = "clock"
        },
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
            this.setClockTime()
            this.setLocalClock()
        },
        resetWorking() {
            this.stopClock()
            this.clock.status = "working"
            this.setClockTime()
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
            this.setLocalWorking()
        },
        resetList() {
            this.list = [{
                id: "000", //項目建立時之時間戳
                title: "第一個項目",
                clock_expect: 8, //預期時間
                clock_spend: 0, //花費時間
                clock_over: 0, //超出時間
                completed: true, //項目完成狀態 完成: true | 未完成: false
                date_create: '', //建立日期
                date_limit: '',
                date_complete: '', //完成日期
            }];
            this.resetWorking()
            this.setLocallist()
        },
        resetEditor() {
            this.editor.item = {
                id: "", //項目建立時之時間戳
                title: "",
                clock_expect: 0, //預期時間
                clock_spend: 0, //花費時間
                clock_over: 0, //超出時間
                completed: false, //項目完成狀態 完成: true | 未完成: false
                date_create: '', //建立日期
                date_limit: '',
                date_complete: '', //完成日期
            }
        },
        resetAnalysis() {
            this.analysis.chart.week.forEach(item => {
                item.data = item.task
            })
            this.analysis.chart.height = 0.6
        },
        //? ---------- ---------- Data Format ---------- ----------
        dateFormat(date) {
            let year = date.getFullYear()
            let month = date.getMonth() + 1
            let day = date.getDate()
            if ((date.getMonth() + 1) < 10) {
                month = `0${date.getMonth()+1}`
            }
            if (date.getDate() < 10) {
                day = `0${date.getDate()}`
            }
            return `${year}-${month}-${day}`
        },
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
        },
        //? ---------- ---------- Editor Action ---------- ----------
        getTodayDate() {
            this.date.today = this.dateFormat(new Date)
        },
        addItem() {
            this.editor.item.id = new Date().getTime()
            this.editor.item.date_create = this.date.today
            this.list.push(this.editor.item)
            this.resetEditor()
        },
        editItem(item) {
            this.editor.status = 'edit'
            this.editor.item = {
                ...item
            }
            console.log(item);
        },
        updateItem() {
            const Index = this.list.findIndex(item => item.id === this.editor.item.id)
            console.log(Index);
            if (this.list[Index] !== undefined) {
                this.list[Index] = this.editor.item

                console.log('SAVE TASK ' + this.list[Index].id);
            } else {
                console.log('List Index undefined');
            }
            this.resetWorking()
        },
        editWork() {
            this.editor.item = {
                ...this.working
            }
            console.log(this.working);
        },
        playItem(item) {
            this.working = item

            console.log(item);
        },
        completeItem(item) {
            item.completed = true
            if (this.working.id == item.id) {
                this.resetWorking()
            }
        },
        removeItem() {
            const Index = this.list.findIndex(item => item.id === this.editor.item.id)
            console.log(Index);
            if (this.list[Index] !== undefined) {
                console.log('REMOVE  ' + this.list[Index].id);
                this.list.splice(Index, 1)
            } else {
                console.log('List Index undefined');
            }
            this.resetEditor()
        },
        workingComplete() {
            const Index = this.list.findIndex(item => item.id === this.working.id)
            console.log(Index);
            if (this.list[Index] !== undefined) {
                this.list[Index].completed = true
                console.log('COMPLETE WORKING  ' + this.list[Index].id);
            } else {
                console.log('List Index undefined');
            }
            this.resetWorking()
        },
        //? ---------- ---------- Analysis Action ---------- ----------
        renderWeekDay() {
            this.analysis.chart.week.forEach(day => {
                let Index = this.analysis.data.findIndex(item => item.date === day.date)
                if (Index !== -1) {
                    day.task = this.analysis.data[Index].task
                    day.clock = this.analysis.data[Index].clock
                } else {
                    day.task = 0
                    day.clock = 0
                }
            })
        },
        //? Render This Week Data
        getThisWeek() {
            const dayTime = 60 * 60 * 24 * 1000
            let time = new Date(this.date.today).getTime()
            let day = new Date(this.date.today).getDay()
            this.analysis.chart.dateFrom = this.dateFormat(new Date(time - dayTime * day))
            this.updateWeek()
        },
        //? Change Week[Data]
        updateWeek() {
            const dayTime = 60 * 60 * 24 * 1000
            let time = new Date(this.analysis.chart.dateFrom).getTime()
            for (let i = 0; i < 7; i++) {
                let newday = new Date(time + dayTime * i)
                this.dateFormat(newday)
                this.analysis.chart.week[i].date = this.dateFormat(newday)
            }
            this.analysis.chart.dateTo = this.dateFormat(new Date(time + dayTime * 6))
        },
        //? Change DateFrom
        updateDate(range) {
            const dayTime = 60 * 60 * 24 * 1000
            let time = new Date(this.analysis.chart.dateFrom).getTime()
            let newday = new Date(time + dayTime * range)
            this.analysis.chart.dateFrom = this.dateFormat(newday)
            this.updateWeek()
            this.renderAnalysis()
        },
        renderAnalysis() {
            this.renderWeekDay()
            switch (this.filter.analysis) {
                case "task":
                    this.analysis.chart.week.forEach(item => {
                        item.data = item.task
                    })
                    this.analysis.chart.height = 0.6
                    break;
                case "clock":
                    this.analysis.chart.week.forEach(item => {
                        item.data = item.clock
                    })
                    this.analysis.chart.height = 0.3
                    break;
            }
        },
        plusData(item) {
            item.data += 1
        },

    },
    mounted() {
        this.getLocalClock()
        this.getLocalWorking()
        this.getstrock()
        this.setClockTime()
        this.renderClock()
        this.timer = setInterval(this.playingClock, 1000);
        this.getTodayDate()
        this.getThisWeek()
        this.resetFilter()
        this.resetAnalysis()
        this.renderAnalysis()
    },
    computed() {

    }
}).mount('#app');