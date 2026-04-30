const Benchmark = {
    run: function() {
        var VAR_1 = {
          0: "0",
          1: "1",
          2: "ABC",
          3: "DEF",
          4: "GHI",
          5: "JKL",
          6: "MNO",
          7: "PQRS",
          8: "TUV",
          9: "WXYZ",
        };
        var FUNCTION_1 = function (VAR_2) {
          var VAR_3 = [];
          var FUNCTION_2 = function (VAR_4, VAR_5) {
            if (VAR_5.length === 0) {
              VAR_3.push(VAR_4);
              return;
            }
            var VAR_6 = VAR_5.slice(1);
            VAR_1[VAR_5[0]].split("").forEach(function (VAR_7) {
              FUNCTION_2(VAR_4 + VAR_7, VAR_6);
            });
          };
          FUNCTION_2("", VAR_2.split(""));
          return VAR_3;
        };
        FUNCTION_1("2475");
    }
};