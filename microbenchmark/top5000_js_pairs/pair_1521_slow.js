const Benchmark = {
    run: function() {
        var VAR_1 = [];
        for (var VAR_2 = 0; VAR_2 < 5000; VAR_2++) {
          VAR_1.push(VAR_2 % 2 ? "" + Math.random() : "client:" + Math.random());
        }
        var VAR_3 = /^client:/;
        VAR_1.filter(function (VAR_4) {
          return VAR_3.test(VAR_4);
        });
    }
};