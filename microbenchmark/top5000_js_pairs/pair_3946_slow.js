const Benchmark = {
    run: function() {
        var VAR_1 = {};
        var VAR_2 = [];
        for (var VAR_3 = 0; VAR_3 <= 100; VAR_3++) {
          VAR_2.push(VAR_3);
        }
        VAR_2.some(function (VAR_4) {
          return new RegExp("y").test(VAR_4);
        });
    }
};