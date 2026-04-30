const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1) {
          return function previous(VAR_2) {
            if (typeof VAR_2 !== "undefined") {
              var VAR_3 = FUNCTION_1(VAR_2);
              VAR_3.VAR_4 = previous;
              return VAR_3;
            }
            return VAR_1;
          };
        }
        var VAR_5 = FUNCTION_1(0);
        for (var VAR_6 = 1; VAR_6 < 100000; VAR_6++) {
          VAR_5 = VAR_5(VAR_6);
        }
        var VAR_7;
        do {
          VAR_7 = VAR_5() * 2;
        } while ((VAR_5 = VAR_5.VAR_4));
    }
};