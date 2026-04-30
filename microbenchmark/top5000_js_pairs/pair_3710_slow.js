const Benchmark = {
    run: function() {
        var VAR_1 = new Array(1000)
          .fill()
          .map(() => Math.floor(Math.random() * 1000) + 1);
        var VAR_2 = 0;
        VAR_1.forEach(function (VAR_3) {
          VAR_2 += VAR_3;
        });
    }
};