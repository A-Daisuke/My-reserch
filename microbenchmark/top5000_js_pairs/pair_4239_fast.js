const Benchmark = {
    run: function() {
        var VAR_1 = { KEY_1: { KEY_2: "value" } };
        function FUNCTION_1(VAR_2) {
          var VAR_5 = Array.prototype.slice.call(arguments),
            VAR_6 = VAR_5.shift();
          for (var VAR_7 = 0; VAR_7 < VAR_5.length; VAR_7++) {
            if (!VAR_2.hasOwnProperty(VAR_5[VAR_7])) {
              return;
            }
            VAR_2 = VAR_2[VAR_5[VAR_7]];
          }
          return VAR_2;
        }
        FUNCTION_1(VAR_1, "level1", "key");
    }
};