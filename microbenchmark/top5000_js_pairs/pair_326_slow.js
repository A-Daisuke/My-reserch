const Benchmark = {
    run: function() {
        var VAR_1 = [];
        var VAR_2 = 0;
        for (; VAR_2 < 100000; VAR_2++) {
          VAR_1.push("abba");
        }
        var VAR_3 = VAR_1.join();
    }
};