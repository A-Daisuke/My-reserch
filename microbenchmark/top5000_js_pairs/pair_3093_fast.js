const Benchmark = {
    run: function() {
        var VAR_1,
          VAR_2 = [],
          VAR_3 = 1000;
        for (VAR_1 = 0; VAR_1 < VAR_3; VAR_1++) {
          VAR_2.push([Math.random(), Math.random()]);
        }
        function FUNCTION_1(VAR_4, VAR_5) {
          return Math.sqrt(VAR_4 * VAR_4 + VAR_5 * VAR_5);
        }
        var VAR_6 = [];
        var VAR_7, VAR_8;
        for (VAR_1 = 0; VAR_1 < VAR_3; VAR_1++) {
          VAR_7 = VAR_2[VAR_1][0];
          VAR_8 = VAR_2[VAR_1][1];
          VAR_6.push(Math.sqrt(Math.pow(VAR_7, 2) + Math.pow(VAR_8, 2)));
        }
    }
};