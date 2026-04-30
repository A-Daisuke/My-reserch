const Benchmark = {
    run: function() {
        var VAR_1 = 10000;
        var VAR_2 = [];
        while (VAR_1--) {
          VAR_2.push("hello");
        }
        var VAR_3 = VAR_2.join();
    }
};