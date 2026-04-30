const Benchmark = {
    run: function() {
        var VAR_1 = [];
        for (var VAR_2 = 0; VAR_2 < 2000; VAR_2++) {
          VAR_1.push("a reasonably long string which takes a fair amount");
        }
        var VAR_3 = VAR_1.join();
    }
};