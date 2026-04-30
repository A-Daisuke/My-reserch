const Benchmark = {
    run: function() {
        let VAR_1 = 10000;
        let VAR_2 = new Array(VAR_1).fill(0);
        let VAR_3 = new Array(VAR_1).fill(0);
        let VAR_4 = [];
        Array.prototype.push.apply(VAR_4, VAR_2);
        Array.prototype.push.apply(VAR_4, VAR_3);
    }
};