const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1) {
          if (VAR_1 === undefined || VAR_1.length === 0) {
            return "";
          }
          var VAR_2 = /\d+/;
          return VAR_1
            .split(" ")
            .sort((VAR_3, VAR_4) => VAR_3.match(VAR_2) - VAR_4.match(VAR_2))
            .join(" ");
        }
        FUNCTION_1("is2 Thi1s T4est 3a");
    }
};