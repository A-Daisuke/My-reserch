const Benchmark = {
    run: function() {
        var VAR_1 = 1000;
        var VAR_2 = 3;
        var VAR_3 = 5;
        var VAR_4 = 15;
        for (VAR_6 = 1; VAR_6 <= VAR_1; VAR_6++)
          console.log(
            VAR_6 % VAR_2
              ? VAR_6 % VAR_3
                ? VAR_6
                : "Buzz"
              : VAR_6 % VAR_3
                ? "Fizz"
                : "FizzBuzz",
          );
    }
};