const Benchmark = {
    run: function() {
        var VAR_1 = 10000,
          VAR_2;
        for (; parseInt(VAR_1, 10); VAR_1--) {
          VAR_2 = 1;
        }
    }
};