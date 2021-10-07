# ToDo-Clock

## 功能
+  Todo List
+  Clock
+  Analysis
---
### Todo List
| Action   | 功能　　 |Function()       |
|----------|---------|-----------------|
| Create   | 建立　　 | addItem()       |
| Read     | 讀取　　 | render()        |
| Update   | 進入編輯 | editItem()      |
| Update   | 完成編輯 | saveItem()      |
| Clear    | 清除資料 | clearItem()     |
| Remove   | 刪除　　 | removeItem()    |
| DeleteAll| 刪除全部 | deleteItemAll() |
| Complete | 完成　　 | completeItem()  |


***Data Format***
```javascript
    data(){
        return{
            list:[],
            temp:{},
            item:{
                id: 202109070000, //項目建立時之時間戳
                title: "項目名稱", 
                clock_expect: 0, //預期時間
                clock_spend: 0, //花費時間
                completed:true, //項目完成狀態 完成: true | 未完成: false
                date_create: "yyyy/mm/dd", //建立日期
                date_limit: { //項目期限
                        year:2021,
                        month: 09,
                        day: 08,
                    }, 
                date_complete: "yyyy/mm/dd", //完成日期
            },
        }
    },

```
***Data function***
+ 建立新項目
    ``` html
        <button type="button" @click="addItem(item)">
        </button>
    ```
    ```javascript
        methods: {
            addItem() {
                item.id = new Date().getTime(), //項目建立時之時間戳
                item.title: "項目名稱",
                item.clock_expect: 1, //預期時間
                item.clock_spend: 0, //花費時間
                item.completed:false,
                item.date_create: "yyyy/mm/dd", //建立日期
                item.date_limit: { //項目期限
                        year:2021,
                        month: 09,
                        day: 08,
                    }, 
                list.push(item)
                item = {} //Reset item.data
            }
        },
    ```
+ 讀取項目
    ``` html
    <ul>
        <li v-for="item in data" :key="item.id">
            {{item.title}}
            ...
        </li>
    </ul>
    ```

+ 編輯項目
    ``` html
        <button type="button" @click="editItem(item)">
        </button>
    ```
    ```javascript
        methods: {
            editItem(item) {
               this.temp = { ...item }; // ES6
            },
            saveItem(item) {
                const index = this.list.findIndex(obj => obj.id === this.temp.id);
          // 把資料寫回索引
                this.list[index] = this.temp
          // this.temp 清空
                this.temp = {};
            },
        },

    ```
+ 刪除項目
    ```javascript
        methods: {
            removeItem(item) {
                const index = this.data.findIndex(obj => obj.id === item.id);
                console.log(index);
                this.data.splice(index, 1);
            },
        },
    ```
+ 完成項目
    ```javascript
        methods: {
            completeItem(item){
                item.completed = ! item.completed
            }   
        },
    ```
+ 執行項目
    ```javascript
        methods: {
            playingItem(item){
                this.selectItem = item
            }   
        },
    ```

---
### Clock
| Action | 功能 | function()    |
|--------|------|---------------|
| Start  | 開始 | switchClock() |
| Pause  | 暫停 | switchClock() |
| Stop   | 停止 | stopClock()   |
| Skip   | 跳過 | skipClock()   |

***Data Format***
```javascript
    data(){ 
        return{
            clock:{
                status:"working" , // "working" || "breaking"
                working:50 ,
                breaking:10 ,
                time:3000 ,
                playing: false , // true || false
                ringtone:"", // setting's ringtone
            },
            selectItem:{},
        }
    }
```

***Data function***
+ 計時器
```javascript
    setInterval( function clocking(){
        if (this.clock.playing) return this.clock.time--
        if (this.clock.time == 0){
            // playing ringtone 3 times
            for(let i = 0; i < 3 ; i++ ){
                this.clock.ringtone.currentTime = 0;
                this.clock.ringtone.play();
            }
            // reset clock.time
            if(this.clock.status == "working") return this.clock.time = this.clock.working * 60
            if(this.clock.status == "breaking") return this.clock.time = this.clock.breaking * 60
        }
    },1000);
```
+ 開始/暫停計時
```javascript
    switchClock() return this.clock.playing = true

```
+ 停止計時
```javascript
    resetClock(){
        this.clock.playing = false
        // reset clock.time
        if(this.clock.status == "working") return this.clock.time = this.clock.working * 60
        if(this.clock.status == "breaking") return this.clock.time = this.clock.breaking * 60
    }
```
+ 跳過計時
```javascript
    skipClock(){
        this.clock.playing = false
        switch(this.clock.status){  // switch clock.status
            case "working": this.clock.status == "breaking";
                break;
            case "breaking": this.clock.status == "working";
                break;
        }
        // reset clock.time
        if(this.clock.status == "working") return this.clock.time = this.clock.working * 60
        if(this.clock.status == "breaking") return this.clock.time = this.clock.breaking * 60
        this.selectItem.clock_spend++
    }
```
---
### Setting
| Action | 功能 | function()    |
|--------|------|---------------|
| Work Time  | 設定工作時間 | setworkTime() |
| Break Time | 設定休息時間 | setbreakTime() |
| Ringtone   | 設定鈴聲 | serRingtone()   |
| Ringtone   | 播放鈴聲 | playRingtone()   |

***Data Format***
```javascript
    data(){ 
        return{
            setting:{
                working:[30,35,40,45,50,55,60,75,90,120,150,180],
                breaking:[30,35,40,45,50,55,60,75,90,120,150,180],
                ringtone:[
                    src(./Ringtone.mp3),
                    src(./Ringtone.mp3),
                    src(./Ringtone.mp3),
                ]
            },
        }
    }
```

***Data function***
```javascript
    setworkTime(item){
        this.clock.working = item
    },
    setbreakTime(item){
        this.clock.breaking = item
    },
    serRingtone(item){
        this.clock.ringtone = item
    }
    playRingtone(item){
        item.currentTime = 0
        item.play()
    }
```