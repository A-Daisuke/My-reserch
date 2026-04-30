const Benchmark = {
    run: function() {
        var VAR_1 = new Array(1000000).fill(123);
        var VAR_2 = new Array(100000).fill("qwerty");
        var VAR_3 = [...VAR_1, ...VAR_2];
    }
};