const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1, VAR_2) {
          for (var VAR_3 = 1; VAR_3 <= 100; VAR_3++) {
            if (VAR_3 % VAR_1 === 0 && VAR_3 % VAR_2 === 0) console.log("fizzbuzz");
            else if (VAR_3 % VAR_1 === 0) console.log("fizz");
            else if (VAR_3 % VAR_2 === 0) console.log("buzz");
            else console.log(VAR_3);
          }
        }
        FUNCTION_1(3, 5);
    }
};