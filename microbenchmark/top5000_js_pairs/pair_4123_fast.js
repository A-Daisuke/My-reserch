const Benchmark = {
    run: function() {
        var VAR_1 = new Array(1000)
          .fill()
          .map(() => Math.floor(Math.random() * 1000) + 1);
        var VAR_4 = VAR_1.length;
        var VAR_5 = 0;
        while (--VAR_4) {
          VAR_5 += VAR_1[VAR_4];
        }
    }
};