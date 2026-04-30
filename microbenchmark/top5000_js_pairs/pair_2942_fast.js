const Benchmark = {
    run: function() {
        var VAR_1 = new Float32Array(10000);
        for (var VAR_3 = 0, VAR_4 = VAR_1.VAR_4; VAR_3 < VAR_4; VAR_3++) {
          VAR_1[VAR_3];
        }
    }
};