const Benchmark = {
    run: function() {
        var FUNCTION_1 = function (VAR_1) {
          var VAR_10 = [];
          VAR_1.split("").forEach(function (VAR_2, VAR_4) {
            var VAR_11 = VAR_2.charCodeAt(0);
            if (VAR_11 >= 65 && VAR_11 <= 90) VAR_10.push(VAR_4);
          });
          return VAR_10;
        };
        var FUNCTION_2 = function (VAR_5) {
          return VAR_1.split("").reduce(function (VAR_6, VAR_7, VAR_8) {
            var VAR_9 = VAR_7.charCodeAt(0);
            return VAR_11 >= 65 && VAR_11 <= 90 ? VAR_6.concat(VAR_4) : VAR_6;
          }, []);
        };
        FUNCTION_1("WiLDcArd wUz HeRe");
    }
};