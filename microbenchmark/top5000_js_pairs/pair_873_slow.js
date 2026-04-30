const Benchmark = {
    run: function() {
        var VAR_1 = [];
        var VAR_2 = 100000;
        while (VAR_2--) VAR_1.push(Math.random());
        Math.max.apply(Math, VAR_1);
    }
};