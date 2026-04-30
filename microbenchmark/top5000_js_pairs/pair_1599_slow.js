const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1, VAR_2) {
          for (var VAR_3 = 1; VAR_3 <= 100; VAR_3++) {
            var VAR_4 = VAR_3 % VAR_1 === 0,
              VAR_5 = VAR_3 % VAR_2 === 0;
            console.log(VAR_4 ? (VAR_5 ? "fizz buzz" : "fizz") : VAR_5 ? "buzz" : VAR_3);
          }
        }
        FUNCTION_1(3, 5);
    }
};