const Benchmark = {
    run: function() {
        var VAR_1 = 1000;
        var VAR_2 = 3;
        var VAR_3 = 5;
        var VAR_4 = 15;
        for (var VAR_5 = 1; VAR_5 <= VAR_1; VAR_5++)
          console.log(
            (VAR_5 % VAR_2 ? "" : "Fizz") + (VAR_5 % VAR_3 ? "" : "Buzz") || VAR_5,
          );
    }
};