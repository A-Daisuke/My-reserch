const Benchmark = {
    run: function() {
        var VAR_1 = ["spacejump", "apples", "graphics", "javascript", "peaches"];
        var VAR_2 = ["a", "e", "i", "o", "u"];
        var VAR_3 = 1;
        var FUNCTION_1 = function (VAR_4) {
          return VAR_4
            .split("")
            .filter(function (VAR_5) {
              var VAR_6 = VAR_2.indexOf(VAR_5.toLowerCase()) != -1;
              return VAR_3 ^ VAR_6;
            })
            .join("");
        };
        VAR_1.map(FUNCTION_1);
    }
};