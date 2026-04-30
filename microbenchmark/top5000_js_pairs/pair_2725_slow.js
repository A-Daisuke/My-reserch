const Benchmark = {
    run: function() {
        for (var VAR_1 = 0, VAR_2 = 300; VAR_1 < VAR_2; VAR_1++) {
          Math.random().toString().slice(2, 11);
        }
    }
};