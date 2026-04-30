const Benchmark = {
    run: function() {
        var VAR_1 = { KEY_1: { KEY_2: { KEY_3: { KEY_4: true } } } };
        var VAR_2 = { KEY_5: { KEY_6: { KEY_7: { KEY_8: true } } } };
        var FUNCTION_1 = function (VAR_3, VAR_4) {
          var VAR_5 = VAR_4.split("."),
            VAR_6 = VAR_5.length,
            VAR_7 = VAR_3;
          for (var VAR_8 = 0; VAR_8 < VAR_6; VAR_8++) {
            if (VAR_7) {
              VAR_7 = VAR_7[VAR_5[VAR_8]];
            } else {
              return null;
            }
            return VAR_7;
          }
        };
        try {
          VAR_2.KEY_1.KEY_2.KEY_3.KEY_4;
        } catch (VAR_9) {}
    }
};