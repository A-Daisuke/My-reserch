const Benchmark = {
    run: function() {
        var VAR_1 = { KEY_1: true };
        for (var VAR_2 = 0; VAR_2 <= 1000; VAR_2++) {
          VAR_1.KEY_1 = false;
        }
    }
};