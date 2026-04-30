const Benchmark = {
    run: function() {
        var VAR_1 = 100000;
        var VAR_2 = { KEY_1: "neat" };
        for (var VAR_3 = 0; VAR_3 != VAR_1; VAR_3++) {
          (function () {
            VAR_2.KEY_1 += "sweet";
          })();
        }
    }
};