const Benchmark = {
    run: function() {
        FUNCTION_1("This website is for losers LOL!");
        function FUNCTION_1(VAR_1) {
          return VAR_1
            .split("")
            .filter(function (VAR_2) {
              return !VAR_2.match(/[aeiou]/gi, "");
            })
            .join("");
        }
    }
};