# ToDo-Clock

## 功能
+  Todo List
+  Clock
+  Analysis
---
### Todo List
| Action   | 功能 |Function()      |
|----------|------|----------------|
| Create   | 建立 | addItem()      |
| Read     | 讀取 | render()       |
| Update   | 編輯 | editItem()     |
| Delete   | 刪除 | deleteItem()   |
| Complete | 完成 | completeItem() |


***Data Format***
```javascript
let data = [item, item]
let item = {
    title: "項目名稱",
    clock_expect: 0, 
    clock_spend: 0, //min
    completed:true,
    date_create: "yyyy/mm/dd",
    date_limit: "yyyy/mm/dd",
    date_complete: "yyyy/mm/dd"
}
```
***Data function***
+ 建立新項目
    ```javascript
    function addItem(){
        item.title = input.innertext;
        item.date_create= newDate().dateformat("yyyy/mm/dd");
        item.date_limit= "yyyy/mm/dd";
    }
    ```
+ 讀取項目
    ```javascript
    function render(){
        data.forEach((item)=>{
            list+=
            `<li>
                item.title
                item.date_create
                item.date_limit
            </li>`
        })
    }
    ```
+ 編輯項目
    ```javascript
    let temp;
    let ItemIndex;
    function editItem(e){
        ItemIndex = data.indexOf(item.id === e.target.id)
        temp = {... data[ItemIndex]}
        DOM.input = temp.title
        DOM.clock = temp.clock_expect
        DOM.limit = temp.date_limit
    }
    function saveItem(){
        data[ItemIndex] = {... temp}
    }
    ```
+ 刪除項目
    ```javascript
    let temp;
    let ItemIndex;
    function deleteItem(e){
        ItemIndex = data.indexOf(item.id === e.target.id)
        data.splice(data[ItemIndex])
    }
    ```
+ 完成項目
    ```javascript
    let ItemIndex;
    function deleteItem(e){
        ItemIndex = data.indexOf(item.id === e.target.id)
        data[ItemIndex].completed = true;
    }
    ```
+ 返回已完成項目
    ```javascript
    let ItemIndex;
    function deleteItem(e){
        ItemIndex = data.indexOf(item.id === e.target.id)
        data[ItemIndex].completed = false;
    }
    ```
 

---
### Clock
| Action | 功能 | function()   |
|--------|------|--------------|
| Start  | 開始 | startClock() |
| Pause  | 暫停 | pauseClock() |
| Stop   | 停止 | stopClock()  |
| Skip   | 跳過 | skipClock()  |

***Data Format***
```javascript
    let workTime = 50
    let breakTime = 10
    let clock = {
        workingTime: workTime * 60, //mins
        breakingTime: breakTime * 60, //mins
        playing: false,
        status:"working"
    }
```

***Data function***
+ 計時器
```javascript
    setInterval( function clocking(){
        if (clock.playing){
            switch(clock.status){
                case 'working';
                    if (clock.workingTime > = 0){
                        clock.workingTime - = 1
                    } else {
                        clock.status ='breaking'
                        clock.workingTime = workTime * 60
                    }
                    break;
                case 'breaking';
                    if (clock.breakingTime > = 0){
                        clock.breakingTime - = 1
                    } else {
                        clock.status ='breaking'
                        clock.breakingTime = breakTime * 60
                    }
                    break;
            }
        }
    },1000);
```
+ 開始計時
```javascript
    function startClock(){
        clock.status = true
    }
```
+ 暫停計時
```javascript
    function startClock(){
        clock.status = false
    }
```
+ 停止計時
```javascript
    function startClock(){
        clock.status = false
        clock.workingTime = workTime * 60
        clock.breakingTime = breakTime * 60
 
    }
```
+ 停止計時
```javascript
    function startClock(){
        clock.status = false
        clock.workingTime = workTime * 60
        clock.breakingTime = breakTime * 60
        item.clock_spend ++
    }
```