const Benchmark = {
    run: function() {
        var VAR_1 = new Array(),
          VAR_2 = 0;
        for (; VAR_2 < 500000; ++VAR_2) {
          VAR_1.push(VAR_2);
        }
    }
};