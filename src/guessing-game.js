class GuessingGame {
    constructor() {
    }

    setRange(min, max) {
        this.left = min;
        this.right = max;
    }

    guess() {
        return this.res = Math.round((this.left + this.right)/2);
    }

    lower() {
        this.right = this.res;
    }

    greater() {
        this.left = this.res;
    }
}

module.exports = GuessingGame;
