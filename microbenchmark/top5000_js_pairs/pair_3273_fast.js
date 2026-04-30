const Benchmark = {
    run: function() {
        var VAR_1 = "0000",
          VAR_2 = 5000;
        while (VAR_1.length < VAR_2) {
          VAR_1 += VAR_1;
        }
        VAR_1 = VAR_1.substring(0, VAR_2);
    }
};