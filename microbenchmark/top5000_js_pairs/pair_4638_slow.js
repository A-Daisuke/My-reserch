const Benchmark = {
    run: function() {
        var VAR_1 = 100;
        var VAR_2 = [];
        for (var VAR_3 = 0; VAR_3 < VAR_1; VAR_3++) {
          VAR_2.push(new Float32Array(4));
          VAR_2[VAR_3][0] = 10;
          VAR_2[VAR_3][1] = 20;
          VAR_2[VAR_3][2] = 424;
          VAR_2[VAR_3][3] = 1;
        }
    }
};