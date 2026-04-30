const Benchmark = {
    run: function() {
        var VAR_1 = new Array(1000)
          .fill()
          .map(() => Math.floor(Math.random() * 1000) + 1);
        VAR_1.reduce(function (VAR_2, VAR_3) {
          return VAR_2 + VAR_3;
        }, 0);
    }
};