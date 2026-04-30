const Benchmark = {
    run: function() {
        var VAR_1 = new Set();
        for (var VAR_2 = 0; VAR_2 < 1000; VAR_2++) {
          VAR_1.add({});
        }
        var VAR_7;
        var VAR_3 = "foo",
          VAR_4 = {};
        for (var VAR_8 of VAR_1) {
          VAR_7 = VAR_3 ? VAR_4 : VAR_8;
        }
    }
};