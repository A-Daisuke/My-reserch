const Benchmark = {
    run: function() {
        var VAR_1 = [];
        for (var VAR_2 = 0; VAR_2 < 10000; VAR_2++) {
          VAR_1.push(VAR_2);
        }
        function FUNCTION_1(VAR_3, VAR_4) {
          var VAR_5 = VAR_3.concat(),
            VAR_6 = 0,
            VAR_7 = VAR_3.length,
            VAR_8;
          for (; VAR_2 < VAR_7; VAR_2 += 1)
            if (VAR_2 in VAR_3) {
              VAR_8 = VAR_3[VAR_2];
              if (VAR_4.call(VAR_8, VAR_8, VAR_2, VAR_3) !== true) {
                VAR_5.splice(VAR_2, 1);
              }
            }
          return VAR_5;
        }
        FUNCTION_1(VAR_1, function (VAR_9) {
          return VAR_9 < 100;
        });
    }
};