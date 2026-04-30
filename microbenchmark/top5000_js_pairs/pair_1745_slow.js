const Benchmark = {
    run: function() {
        var VAR_1 = new Array(10001).join("a").split("");
        var VAR_2;
        VAR_2 = VAR_1.join("");
    }
};