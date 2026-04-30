const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1, VAR_2) {
          return Array.apply(null, Array(100))
            .map(function (VAR_4, VAR_5) {
              var VAR_6 = VAR_5 + 1;
              if (VAR_6 % VAR_1 === 0 && VAR_6 % VAR_2 === 0) return "fizzbuzz";
              if (VAR_6 % VAR_1 === 0) return "fizz";
              if (VAR_6 % VAR_2 === 0) return "buzz";
              return VAR_6;
            })
            .join("\n");
        }
        console.log(FUNCTION_1(3, 5));
    }
};