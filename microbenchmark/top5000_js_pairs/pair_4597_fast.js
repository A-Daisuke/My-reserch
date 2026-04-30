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
            if (!VAR_5.length) {
              VAR_3.push(VAR_4);
              return;
            }
            var VAR_6 = VAR_1[VAR_5[0]];
            for (var VAR_8 = 0; VAR_8 < VAR_6.length; VAR_8++) {
              FUNCTION_2(VAR_4 + VAR_6[VAR_8], VAR_5.substr(1));
            }
          };
          FUNCTION_2("", VAR_2);
          return VAR_3;
        };
        FUNCTION_1("2475");
    }
};