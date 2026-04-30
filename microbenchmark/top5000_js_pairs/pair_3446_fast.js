const Benchmark = {
    run: function() {
        var VAR_1 = 533332800000;
        function FUNCTION_1(VAR_3) {
          return (VAR_3 || 0).toString().replace(/(\d)(?=(?:\d{3})+$)/g, "$1,");
        }
        FUNCTION_1(VAR_1);
    }
};