const Benchmark = {
    run: function() {
        var VAR_1 = [],
          VAR_2 = 1000;
        for (var VAR_3 = 0; VAR_3 < VAR_2; VAR_3++) VAR_1.push(VAR_3);
        function FUNCTION_1(VAR_4) {}
        var VAR_5 = VAR_2,
          VAR_6 = VAR_1.slice(0);
        while (VAR_6.length) {
          var VAR_7 = VAR_6.shift();
          FUNCTION_1(VAR_7);
        }
    }
};