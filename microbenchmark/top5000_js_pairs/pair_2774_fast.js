const Benchmark = {
    run: function() {
        var VAR_1;
        var VAR_3 = true;
        for (var VAR_2 = 0; VAR_2 < 10000; ++VAR_2) {
          VAR_1 = VAR_3 ? "even" : "odd";
          VAR_3 = !VAR_3;
        }
    }
};