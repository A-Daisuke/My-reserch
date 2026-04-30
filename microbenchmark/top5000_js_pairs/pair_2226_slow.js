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
        var VAR_4 = /^.+$/gm;
        var VAR_5 = VAR_4.exec(VAR_1);
        while (VAR_5 != null) {
          FUNCTION_1(VAR_5[0]);
          VAR_5 = VAR_4.exec(VAR_1);
        }
    }
};