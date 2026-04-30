const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1) {
          if (VAR_1 <= 0) return [];
          if (VAR_1 == 1) return [0];
          if (VAR_1 == 2) return [0, 1];
          var VAR_2 = FUNCTION_1(VAR_1 - 1);
          VAR_2.push(VAR_2[VAR_2.length - 1] + VAR_2[VAR_2.length - 2]);
          return VAR_2;
        }
        FUNCTION_1(1000);
    }
};