const Benchmark = {
    run: function() {
        var VAR_1 = new Float32Array(9000);
        var VAR_4 = 0;
        var VAR_5 = VAR_1.length;
        var VAR_6 = -Infinity;
        for (; VAR_4 < VAR_5; VAR_4++) {
          if (VAR_6 < VAR_1[VAR_4]) {
            VAR_6 = VAR_1[VAR_4];
          }
        }
    }
};