const Benchmark = {
    run: function() {
        var VAR_4 = Object.create(null);
        VAR_4.VAR_5 = "T";
        VAR_4.VAR_6 = "A";
        VAR_4.VAR_7 = "G";
        VAR_4.VAR_8 = "C";
        function FUNCTION_1(VAR_1) {
          return VAR_1.split("").map(function (VAR_2) {
            return [VAR_2, VAR_4[VAR_2]];
          });
        }
        FUNCTION_1("ATCGA");
        FUNCTION_1("TTGAG");
        FUNCTION_1("CTCTA");
    }
};