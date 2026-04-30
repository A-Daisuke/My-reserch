const Benchmark = {
    run: function() {
        var VAR_1 = [10, 10, 10];
        var VAR_2 = new Float32Array([10, 10, 10]);
        for (var VAR_3 = 0; VAR_3 < 100000; VAR_3++) {
          var VAR_4 = new Float32Array(3);
          VAR_4[0] = VAR_1[0];
          VAR_4[1] = VAR_1[1];
          VAR_4[2] = VAR_1[2];
        }
    }
};