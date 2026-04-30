const Benchmark = {
    run: function() {
        var VAR_1 = [0, 0, 0, 0, 0, 0];
        var VAR_2 = [1, 0, 0, 1, 0, 0];
        var VAR_3 = new Float64Array(6 * 1001);
        VAR_3.set(VAR_2);
        var VAR_4;
        for (VAR_4 = 0; VAR_4 < 1000; VAR_4++) {
          VAR_2.push(1, 2, 3, 4, 5, 6);
        }
        for (VAR_4 = 0; VAR_4 < 1000; VAR_4++) {
          VAR_1[5] = VAR_2.pop();
          VAR_1[4] = VAR_2.pop();
          VAR_1[3] = VAR_2.pop();
          VAR_1[2] = VAR_2.pop();
          VAR_1[1] = VAR_2.pop();
          VAR_1[0] = VAR_2.pop();
        }
    }
};