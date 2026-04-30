const Benchmark = {
    run: function() {
        var VAR_1 = [];
        var VAR_2 = 100000;
        while (VAR_2--) {
          VAR_1.push(Math.random() * 10000 * (Math.random() > 0.5 ? 1 : -1));
        }
        function FUNCTION_1(VAR_3) {
          var VAR_4 = VAR_3 >> 31;
          return (VAR_3 ^ VAR_4) - VAR_4;
        }
        VAR_2 = VAR_1.length - 1;
        while (VAR_2--) FUNCTION_1(VAR_1[VAR_2]);
    }
};