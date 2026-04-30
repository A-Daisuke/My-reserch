const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1) {
          VAR_1 = VAR_1.split("");
          var VAR_2 = VAR_1.length;
          if (VAR_1[VAR_2 - 1] === "0") {
            VAR_1[VAR_2 - 1] = "9";
            VAR_1.splice(0, VAR_2 - 1, FUNCTION_1(VAR_1.slice(0, VAR_2 - 1).join("")));
          } else {
            VAR_1[VAR_2 - 1] = VAR_1[VAR_2 - 1] - 1;
          }
          return VAR_1.join("");
        }
        for (var VAR_3 = 0; VAR_3 < 1000; VAR_3++) {
          FUNCTION_1(VAR_3 + "");
        }
    }
};