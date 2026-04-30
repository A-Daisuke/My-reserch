const Benchmark = {
    run: function() {
        var VAR_1;
        var VAR_2 = [];
        for (VAR_1 = 0; VAR_1 < 100000; ++VAR_1) {
          VAR_2.push("some rather long string");
        }
        var VAR_3 = VAR_2.join();
    }
};