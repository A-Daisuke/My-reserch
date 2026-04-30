const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1, VAR_2, VAR_3) {
          VAR_3 = VAR_3 || "0";
          VAR_1 = VAR_1 + "";
          return VAR_1.length >= VAR_2
            ? VAR_1
            : new Array(VAR_2 - VAR_1.length + 1).join(VAR_3) + VAR_1;
        }
        for (var VAR_4 = 0; VAR_4 < 10000; VAR_4++) {
          FUNCTION_1("str", 4, " ");
        }
    }
};