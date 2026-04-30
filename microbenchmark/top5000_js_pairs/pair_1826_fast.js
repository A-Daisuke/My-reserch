const Benchmark = {
    run: function() {
        var VAR_1 = new Array(1000);
        var VAR_2;
        for (VAR_2 = 0; VAR_2 < 1000; VAR_2++) VAR_1.shift();
    }
};