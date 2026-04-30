const Benchmark = {
    run: function() {
        var VAR_1 = [1, 2];
        while (VAR_1[VAR_1.length - 1] < 4000000) {
          VAR_1.push(VAR_1[VAR_1.length - 1] + VAR_1[VAR_1.length - 2]);
        }
        VAR_1.filter(function (VAR_2) {
          return 0 === VAR_2 % 2;
        }).reduce(function (VAR_3, VAR_4) {
          return VAR_1 + VAR_4;
        });
    }
};