const Benchmark = {
    run: function() {
        var VAR_1 = [10, 10, 10];
        for (var VAR_2 = 0; VAR_2 < 100000; VAR_2++) {
          var VAR_3 = new Float32Array(VAR_1);
        }
    }
};