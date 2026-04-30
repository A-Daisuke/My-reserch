const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1) {
          return " ".repeat(VAR_1).replace(/.|$/g, function (VAR_8, VAR_9) {
            return " ".repeat(VAR_1 - VAR_9) + "a".repeat(VAR_9) + "\n";
          });
        }
        for (var VAR_7 = 0; VAR_7 < 200; VAR_7++) FUNCTION_1(VAR_7);
    }
};