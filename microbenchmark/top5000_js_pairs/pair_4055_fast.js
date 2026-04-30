const Benchmark = {
    run: function() {
        var VAR_1 = { KEY_1: { KEY_2: { KEY_3: { KEY_4: true } } } };
        var VAR_2 = { KEY_5: { KEY_6: { KEY_7: { KEY_8: true } } } };
        var FUNCTION_1 = function (VAR_4, VAR_5) {
          var VAR_6 = VAR_5.split("."),
            VAR_7 = VAR_6.length,
            VAR_8 = VAR_4;
          for (var VAR_9 = 0; VAR_9 < VAR_7; VAR_9++) {
            if (VAR_8) {
              VAR_8 = VAR_8[VAR_6[VAR_9]];
            } else {
              return null;
            }
            return VAR_8;
          }
        };
        FUNCTION_1(VAR_2, "is.a.json.lookup");
    }
};