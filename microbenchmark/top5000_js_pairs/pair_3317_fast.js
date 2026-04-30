const Benchmark = {
    run: function() {
        var VAR_1 = new Array(10000);
        var VAR_4 = 0;
        while (VAR_4 < VAR_1.length) {
          VAR_1[VAR_4];
          VAR_4++;
        }
    }
};