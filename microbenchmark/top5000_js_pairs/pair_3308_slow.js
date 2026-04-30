const Benchmark = {
    run: function() {
        var VAR_1 = [];
        VAR_2 = {
          KEY_1: "1",
          KEY_2: "1",
        };
        for (var VAR_3 = 0; VAR_3 < 10000; VAR_3++) {
          VAR_1.push(VAR_2);
        }
        VAR_1.map(function (VAR_4) {
          var VAR_5 = VAR_4.KEY_1;
          var VAR_6 = VAR_4.KEY_2;
        });
    }
};