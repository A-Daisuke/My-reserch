const Benchmark = {
    run: function() {
        console.log(
          Array.apply(0, Array(100))
            .map(function (VAR_6, VAR_7) {
              VAR_7++;
              var VAR_8 = VAR_7 % 3 === 0;
              var VAR_9 = VAR_7 % 5 === 0;
              var VAR_10 = VAR_8 && VAR_9;
              if (VAR_10) return "fizz buzz";
              if (VAR_8) return "fizz";
              if (VAR_9) return "buzz";
              return VAR_7;
            })
            .join("\n"),
        );
    }
};