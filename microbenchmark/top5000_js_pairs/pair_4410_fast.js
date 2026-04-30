const Benchmark = {
    run: function() {
        FUNCTION_1 = function (VAR_1) {
          VAR_1 += "";
          return (
            VAR_1.split("2").length === 11 &&
            VAR_1.indexOf("1") === VAR_1.lastIndexOf("1") &&
            VAR_1.indexOf("3") === VAR_1.lastIndexOf("3")
          );
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