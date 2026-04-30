const Benchmark = {
    run: function() {
        for (var VAR_1 = 1; VAR_1 <= 100; VAR_1++) {
          var VAR_2 = {
            KEY_1: VAR_1.toString(),
            KEY_2: "Fizz",
            KEY_3: "FizzBuzz",
            KEY_4: "Buzz",
          };
          var VAR_3 = VAR_2["" + (VAR_1 % 3 === 0) + (VAR_1 % 5 === 0)];
        }
    }
};