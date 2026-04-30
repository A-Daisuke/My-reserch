const Benchmark = {
    run: function() {
        let VAR_1 = 1000;
        let VAR_2 = "0".repeat(VAR_1).split("").map(parseFloat);
    }
};