const Benchmark = {
    run: function() {
        FUNCTION_1 = function (VAR_1) {
          VAR_1 += "";
          return VAR_1.split("").sort().join() === "122222222223";
        };
        FUNCTION_1("222211111111");
        FUNCTION_1("221222232222");
        FUNCTION_1("222202222222");
        FUNCTION_1("222222200222");
        FUNCTION_1("222211111111");
        FUNCTION_1("221222232222");
        FUNCTION_1("222202222222");
        FUNCTION_1("222222200222");
    }
};