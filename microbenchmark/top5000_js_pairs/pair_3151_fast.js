const Benchmark = {
    run: function() {
        var VAR_1,
          VAR_2 = [],
          VAR_3 = 1000;
        for (VAR_1 = 0; VAR_1 < VAR_3; VAR_1++) {
          VAR_2.push([Math.random(), Math.random()]);
        }
        function FUNCTION_1(VAR_5, VAR_6) {
          return Math.sqrt(VAR_5 * VAR_5 + VAR_6 * VAR_6);
        }
        var VAR_4 = [];
        var VAR_7, VAR_8;
        for (VAR_1 = 0; VAR_1 < VAR_3; VAR_1++) {
          VAR_7 = VAR_2[VAR_1][0];
          VAR_8 = VAR_2[VAR_1][1];
          VAR_4.push(FUNCTION_1(VAR_7, VAR_8));
        }
    }
};