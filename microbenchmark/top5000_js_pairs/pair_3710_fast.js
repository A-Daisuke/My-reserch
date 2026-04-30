const Benchmark = {
    run: function() {
        var VAR_1 = new Array(1000)
          .fill()
          .map(() => Math.floor(Math.random() * 1000) + 1);
        var VAR_2 = 0;
        for (var VAR_4 = 0; VAR_4 < VAR_1.length; VAR_4++) {
          VAR_2 += VAR_1[VAR_4];
        }
    }
};