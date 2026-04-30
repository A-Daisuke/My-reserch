const Benchmark = {
    run: function() {
        VAR_1 = 100000;
        var VAR_2 = 0;
        var VAR_3 = "";
        while (VAR_2++ < VAR_1) {
          VAR_3 += VAR_2.toString();
        }
    }
};