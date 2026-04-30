const Benchmark = {
    run: function() {
        var VAR_1 = new Float32Array(9000);
        var VAR_2 = 0;
        var VAR_3 = VAR_1.length;
        var VAR_4 = -Infinity;
        for (; VAR_2 < VAR_3; VAR_2++) {
          if (VAR_4 < VAR_1[VAR_2]) {
            VAR_4 = VAR_1[VAR_2];
          }
        }
    }
};