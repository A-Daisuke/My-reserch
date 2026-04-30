const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1) {
          if (
            typeof VAR_1 === "string" &&
            !/^\s|\s$/.test(VAR_1) &&
            VAR_1.split(".").length === 4
          ) {
            var VAR_2 = VAR_1.split(".").filter(function (VAR_3, VAR_4) {
              if (VAR_3 == "0" || (VAR_3.charAt(0) !== "0" && parseInt(VAR_3) < 256)) {
                return true;
              } else {
                return false;
              }
            }).length;
            if (VAR_2 === 4) {
              return true;
            } else {
              return false;
            }
          } else {
            return false;
          }
        }
        var VAR_5 = 100;
        while (VAR_5--) {
          FUNCTION_1("1.1.1.1");
        }
    }
};