// State コンストラクタ関数
function RedLight() {
    this.color = "red";
}
RedLight.prototype.go = function (trafficLight) {
    console.log("Red for 1 minute");
    trafficLight.change(new GreenLight());
};

function YellowLight() {
    this.color = "yellow";
}
YellowLight.prototype.go = function (trafficLight) {
    console.log("Yellow for 10 seconds");
    trafficLight.change(new RedLight());
};

function GreenLight() {
    this.color = "green";
}
GreenLight.prototype.go = function (trafficLight) {
    console.log("Green for 1 minute");
    trafficLight.change(new YellowLight());
};

// Context コンストラクタ関数
function TrafficLight() {
    this.currentState = new RedLight(); // 初期状態
}

// Context のメソッド定義
TrafficLight.prototype.change = function (state) {
    this.currentState = state;
};

TrafficLight.prototype.start = function () {
    this.currentState.go(this);
};

// 使用例
var trafficLight = new TrafficLight();
trafficLight.start(); // Red for 1 minute
trafficLight.start(); // Green for 1 minute
trafficLight.start(); // Yellow for 10 seconds
