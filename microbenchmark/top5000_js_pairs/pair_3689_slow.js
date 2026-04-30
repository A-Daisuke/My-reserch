const Benchmark = {
    run: function() {
        let VAR_1 = 1000;
        let VAR_2 = new Array(VAR_1 + 1).join("0").split("").map(parseFloat);
    }
};