const Benchmark = {
    run: function() {
        var VAR_1 = [];
        var VAR_3 = new ArrayBuffer(100000 * 4 * 4);
        for (var VAR_2 = 0; VAR_2 < 100000; VAR_2++) {
          VAR_1.push(new Float32Array(VAR_3, VAR_2 * 4 * 4, 4));
        }
    }
};