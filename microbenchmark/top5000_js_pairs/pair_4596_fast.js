const Benchmark = {
    run: function() {
        FUNCTION_1("This website is for losers LOL!");
        function FUNCTION_1(VAR_1) {
          return VAR_1.replace(/[aeiou]/gi, "");
        }
    }
};