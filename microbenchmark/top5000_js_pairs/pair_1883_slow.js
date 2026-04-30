const Benchmark = {
    run: function() {
        var VAR_1;
        for (var VAR_2 = 0; VAR_2 < 1000; VAR_2++) {
          VAR_1 = {};
          Object.defineProperty(VAR_1, "x", { KEY_1: false });
          VAR_1.VAR_3 = VAR_2;
        }
    }
};