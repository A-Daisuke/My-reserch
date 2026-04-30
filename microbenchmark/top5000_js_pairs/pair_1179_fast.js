const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1, VAR_2) {
          var VAR_3 = Array(VAR_2).fill(VAR_1);
          return VAR_3.join("");
        }
        function FUNCTION_2(VAR_4, VAR_5) {
          if (VAR_5 === 1) return VAR_4;
          var VAR_9 = VAR_5 % 2 === 1;
          var VAR_10 = FUNCTION_2(VAR_4, Math.floor(VAR_5 / 2));
          var VAR_11 = VAR_10 + VAR_10;
          if (VAR_9) VAR_11 += VAR_4;
          return VAR_11;
        }
        var VAR_8 = FUNCTION_2("y", 100000);
    }
};