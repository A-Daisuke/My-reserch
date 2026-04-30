const Benchmark = {
    run: function() {
        var VAR_1 = new Set();
        for (var VAR_2 = 0; VAR_2 < 1000; VAR_2++) {
          VAR_1.add({});
        }
        var VAR_3 = "foo",
          VAR_4 = {};
        VAR_1.forEach(function (VAR_5) {
          VAR_6 = VAR_3 ? VAR_4 : VAR_5;
        });
    }
};