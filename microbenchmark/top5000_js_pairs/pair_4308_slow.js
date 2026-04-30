const Benchmark = {
    run: function() {
        FUNCTION_1 = function (VAR_1, VAR_2) {
          if (console.assert) console.assert(VAR_1, VAR_2);
          else {
            if (!VAR_1) {
              if (VAR_2) alert(VAR_2);
            }
          }
        };
        var VAR_3 = 0;
        var FUNCTION_2 = function (VAR_4) {
          FUNCTION_1(VAR_4 != null, "");
          VAR_3++;
        };
        var FUNCTION_3 = function (VAR_5) {
          if (!VAR_4) return;
          VAR_3++;
        };
        var FUNCTION_4 = function (VAR_6) {
          if (!VAR_4) throw "";
          VAR_3++;
        };
        var FUNCTION_5 = function (VAR_7) {
          console.assert(VAR_4 != null, "");
          VAR_3++;
        };
        FUNCTION_2();
    }
};