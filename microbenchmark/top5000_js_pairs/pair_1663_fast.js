const Benchmark = {
    run: function() {
        var VAR_1 = 40;
        var VAR_2 = 100;
        var VAR_3 = FUNCTION_1(VAR_1);
        var VAR_4 = [];
        function FUNCTION_1(VAR_5) {
          return new Array(VAR_1)
            .join("#")
            .split("#")
            .map(function (VAR_6, VAR_7) {
              var VAR_8 = { KEY_1: VAR_7 };
              VAR_8[Math.random() + ""] = Math.random();
              return VAR_8;
            });
        }
        for (var VAR_9 = 0; VAR_9 < VAR_2; VAR_9++) {
          for (var VAR_10 = 0; VAR_10 < VAR_1; VAR_10++) {
            VAR_4.push(VAR_3[VAR_10]);
          }
        }
    }
};