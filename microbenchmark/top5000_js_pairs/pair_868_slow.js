const Benchmark = {
    run: function() {
        new Array(65535 + 1).join("0").split("").map(parseFloat);
    }
};