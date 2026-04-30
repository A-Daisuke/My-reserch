const Benchmark = {
    run: function() {
        var VAR_1 = 0,
          VAR_2 = [],
          VAR_3 = 0;
        for (var VAR_4 = 0; VAR_4 < 500; VAR_4++) {
          VAR_2.push(VAR_4);
        }
        function FUNCTION_1(VAR_5, VAR_6) {
          for (; VAR_1 < VAR_2.length; VAR_1++) {
            VAR_6.call(VAR_2, VAR_1);
          }
        }
        FUNCTION_1(VAR_2, function (VAR_7) {
          VAR_3 += this[VAR_1];
        });
    }
};