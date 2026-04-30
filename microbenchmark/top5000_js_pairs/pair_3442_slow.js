const Benchmark = {
    run: function() {
        function FUNCTION_1() {
          return Math.random() < 0.5 ? "one" : "three";
        }
        var VAR_1 = [],
          VAR_2,
          VAR_3;
        for (VAR_3 = 0; VAR_3 < 1000; VAR_3++) {
          VAR_1.push(FUNCTION_1());
        }
        VAR_2 = VAR_1.join("");
    }
};