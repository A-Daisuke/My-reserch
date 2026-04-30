const Benchmark = {
    run: function() {
        var VAR_1 = new Float32Array(10000);
        for (var VAR_2 of VAR_1) {
          VAR_2;
        }
    }
};