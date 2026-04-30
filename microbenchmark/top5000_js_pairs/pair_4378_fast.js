const Benchmark = {
    run: function() {
        VAR_1 = new Array(10000);
        VAR_2 = VAR_1.join("a").split("");
        VAR_3 = VAR_1.map(function (VAR_4) {
          return [VAR_4];
        });
        VAR_5 = "";
        VAR_1.forEach(function (VAR_6) {
          VAR_9 += VAR_4;
        });
    }
};