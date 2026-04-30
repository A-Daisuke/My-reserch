const Benchmark = {
    run: function() {
        var VAR_1 = new Array(500).map(function (VAR_2) {
          return Math.random() * 256;
        });
        var VAR_3 = new Array(500).map(function (VAR_4) {
          return Math.random() * 256;
        });
        var VAR_5 = VAR_3.length;
        for (var VAR_6 = 0; VAR_6 < VAR_5; VAR_6++) {
          VAR_1.push(VAR_3[VAR_6]);
        }
    }
};