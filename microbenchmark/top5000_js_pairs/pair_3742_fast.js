const Benchmark = {
    run: function() {
        var VAR_1 = { KEY_1: { KEY_2: { KEY_3: { KEY_4: true } } } };
        var FUNCTION_1 = function (VAR_2, VAR_3) {
          var VAR_4 = VAR_3.split("."),
            VAR_5 = VAR_4.length,
            VAR_6 = VAR_2;
          for (var VAR_7 = 0; VAR_7 < VAR_5; VAR_7++) {
            if (VAR_6) {
              VAR_6 = VAR_6[VAR_4[VAR_7]];
            } else {
              return null;
            }
            return VAR_6;
          }
        };
        VAR_1.KEY_1.KEY_2.KEY_3.KEY_4;
    }
};