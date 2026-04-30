const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1, VAR_2) {
          VAR_2 = parseInt((VAR_2 === true ? 1 : VAR_2) + "", 10);
          return typeof VAR_1 == "string" && VAR_2 >= 1
            ? new Array(VAR_2 + 1).join(VAR_1)
            : null;
        }
        FUNCTION_1("-=", 10000);
    }
};