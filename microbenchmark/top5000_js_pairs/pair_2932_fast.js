const Benchmark = {
    run: function() {
        var VAR_1 = "";
        for (var VAR_2 = 0; VAR_2 < 1000; VAR_2++) {
          VAR_1 += "A sample line, to be repeated one thousand times\n";
        }
        VAR_1 = VAR_1.slice(0, -1);
        function FUNCTION_1(VAR_3) {
          if (VAR_3 !== "A sample line, to be repeated one thousand times") {
            throw "Line Mismatch: " + VAR_3;
          }
        }
        var VAR_7 = VAR_1.split("\n");
        for (var VAR_6 = 0; VAR_2 < VAR_7.length; VAR_2++) {
          FUNCTION_1(VAR_7[VAR_2]);
        }
    }
};