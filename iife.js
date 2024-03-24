const Bird = (function() {
    
    // プライベート変数と関数
    let name = '';
    let sound = '';

    function setName(newName) {
        name = newName;
    }

    function setSound(newSound) {
        sound = newSound;
    }

    function getName() {
        return name;
    }

    function getSound() {
        return sound;
    }

    // 公開するメソッドとプロパティ
    return {
        setName: setName,
        setSound: setSound,
        getName: getName,
        getSound: getSound
    };
})();

// 使用例
Bird.setName('スズメ');
Bird.setSound('チュンチュン');
console.log(Bird.getName()); // スズメ
console.log(Bird.getSound()); // チュンチュン