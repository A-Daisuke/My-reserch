const Benchmark = {
    run: function() {
        var VAR_1 = { KEY_1: { KEY_2: {} } };
        function FUNCTION_1(VAR_2) {
          try {
            return typeof VAR_1.KEY_1.KEY_2 !== "undefined";
          } catch (VAR_3) {
            return false;
          }
        }
        function FUNCTION_2(VAR_4) {
          var VAR_5 = arguments,
            VAR_6 = 1;
          if (typeof VAR_4 === "undefined") {
            return false;
          }
          while (VAR_6 < VAR_5.length) {
            VAR_4 = VAR_2[VAR_5[VAR_6]];
            if (typeof VAR_4 === "undefined") {
              return false;
            }
            VAR_6 += 1;
          }
          return true;
        }
        FUNCTION_1(VAR_1, "b", "c");
    }
};