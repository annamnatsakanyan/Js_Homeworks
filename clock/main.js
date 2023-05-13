class Clock {
    constructor(hour, minute, second) {
        this.hour = hour,
        this.minute = minute,
        this.second = second
    };
    
    start() {
            let x = setInterval( () => {
            const currentDate = new Date();
            this.hour = currentDate.getHours();
            this.minute = currentDate.getMinutes();
            this.second = currentDate.getSeconds();
            this.validateTime(this.hour, this.minute, this.second);
            //this.setAlert(10, 56, 10)
            console.log(this.hour + ":" + this.minute + ":" + this.second);
            
        }, 1000); 
    };
    validateTime(hour, minute, second) {
        if (this.hour < 10) {
            this.hour = "0" + this.hour;
        };
        if (this.minute < 10) {
            this.minute = '0' + this.minute;
        };
        if (this.second < 10) {
            this.second = '0' + this.second;
        };
        return hour + ":" + minute + ":" + second;
    };

    setAlert(hour, minute, second) {
        if(hour == this.hour && minute == this.hour && second == this.hour) {
            console.log("alarm clock");
        };
    };
};

let clock = new Clock();
clock.start();
