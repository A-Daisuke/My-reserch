const Benchmark = {
    run: function() {
        var VAR_1 = new Array(20);
        var VAR_2;
        for (VAR_2 = 0; VAR_2 < 20; VAR_2++) VAR_1.shift();
    }
};